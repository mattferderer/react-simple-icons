import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kotlin = forwardRef(function Kotlin({ color = 'currentColor', size = 24, title = 'kotlin', ...others }, ref) {
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
      <path d="M24 24H0V0h24L12 12Z" />
    </svg>
  );
});

Kotlin.propTypes = {
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

export default Kotlin;
