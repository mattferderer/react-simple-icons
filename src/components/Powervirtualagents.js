import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Powervirtualagents = forwardRef(function Powervirtualagents(
  { color = 'currentColor', size = 24, title = 'powervirtualagents', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M17.239 17.968c.272 0 .511-.105.717-.252a.985.985 0 0 1-.962.811H12.41a1 1 0 0 0-.707.293l-4.425 4.425a.75.75 0 0 1-1.28-.53v-3.188a1 1 0 0 0-1-1H1a1 1 0 0 1-1-1V7.531a1 1 0 0 1 1-1h4.498v4.998c0 .827.673 1.5 1.5 1.5h4.585c.133 0 .259.052.353.146l4.425 4.425c.237.238.548.368.878.368zm6.752-12.935H5.998v3.498h17.993V5.033zm0-3.726a.998.998 0 0 0-.972-.773H6.998a1 1 0 0 0-1 1v2.999h17.993V1.307zM5.998 9.031v2.498a1 1 0 0 0 1 1h4.584a1 1 0 0 1 .707.293l4.425 4.425a.75.75 0 0 0 1.28-.528v-3.19a1 1 0 0 1 1-1h4.014a.998.998 0 0 0 .986-.864L24 9.031H5.998z" />
    </svg>
  );
});

Powervirtualagents.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Powervirtualagents;
