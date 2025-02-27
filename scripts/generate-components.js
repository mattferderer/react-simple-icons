const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');

const SimpleIcons = require('simple-icons');

const { titleToFilename, outputFileFormat, signale } = require('./utils');

const formatFile = 'utf-8';
const rootDir = path.join(__dirname, '..');
const dir = path.join(rootDir, 'src/');
const outputComponent = 'src/components';

const pathIndexExport = path.join(rootDir, 'src', 'index.js');
const pathIndexExportTypeScript = path.join(rootDir, 'src', 'index.d.ts');

const ICONS = Object.keys(SimpleIcons);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if (!fs.existsSync(outputComponent)) {
  fs.mkdirSync(outputComponent);
}

const initialTypeDefinitions = `
import { FC, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = FC<Props>;

`;

fs.writeFileSync(pathIndexExport, '', formatFile);
fs.writeFileSync(pathIndexExportTypeScript, initialTypeDefinitions, formatFile);

const attrsToString = attrs => {
  return Object.keys(attrs)
    .map(key => {
      if (key === 'width' || key === 'height' || key === 'fill' || key === 'ref') {
        return key + '={' + attrs[key] + '}';
      }
      if (key === 'others') {
        return '{...others}';
      }
      return key + '="' + attrs[key] + '"';
    })
    .join(' ');
};

ICONS.forEach(icon => {
  const baseName = String(icon);
  const componentName = (baseName === 'React' || baseName === 'react') ? 'ReactJs' : upperCamelCase(titleToFilename(baseName));

  const locationOutputComponent = path.join(rootDir, `${outputComponent}/`, `${componentName}.js`);

  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    fill: 'color',
    viewBox: '0 0 24 24',
    ref: 'ref',
    others: '...others',
  };

  const element = `
    import React, {forwardRef} from 'react';
    import PropTypes from 'prop-types';

    const ${componentName} = forwardRef(function ${componentName}({color = 'currentColor', size = 24, title = "${baseName}", ...others}, ref) {

      return (
        <svg ${attrsToString(defaultAttrs)}>
          <title>{title}</title>
          <path d="${SimpleIcons[baseName].path}" />
        </svg>
      );
    });

    ${componentName}.propTypes = {
      /**
      * Hex color or color name
      */
      color: PropTypes.string,
      /**
      * The size of the Icon.
      */
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      /**
       * The title provides an accessible short text description to the SVG
       */
      title: PropTypes.string,
    }

    export default ${componentName}
  `;

  const component = outputFileFormat(element);

  fs.writeFileSync(locationOutputComponent, component, formatFile);

  signale.success(`${componentName}`);

  const exportComponent = outputFileFormat(
    `export { default as ${componentName} } from './components/${componentName}';\r\n`
  );
  const exportComponentTypeScript = `export const ${componentName}: Icon;\n`;

  fs.appendFileSync(pathIndexExport, exportComponent, formatFile);

  fs.appendFileSync(pathIndexExportTypeScript, exportComponentTypeScript, formatFile);
});

signale.complete({ prefix: '[Components]', message: 'Ready components', suffix: '(@wootsbot)' });
