import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Merck = forwardRef(function Merck({ color = 'currentColor', size = 24, title = 'merck', ...others }, ref) {
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
      <path d="M6 6a6 6 0 0112 0zm0 12a6 6 0 016-6 6 6 0 01-6-6 6 6 0 000 12 a6 6 0 1012 0zm6-6a6 6 0 016 6 6 6 0 100-12c0 3.314-2.686 6-6 6" />
    </svg>
  );
});

Merck.propTypes = {
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

export default Merck;
