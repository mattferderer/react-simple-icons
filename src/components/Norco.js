import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Norco = forwardRef(function Norco({ color = 'currentColor', size = 24, title = 'norco', ...others }, ref) {
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
      <path d="M11.055 2.707a.971.971 0 00-.688.387L0 16.78h4.049l7.27-9.597 1.927 5.74 1.42-1.875-2.578-7.676a.983.983 0 00-1.033-.666zM19.95 7.22l-7.27 9.597-1.927-5.74-1.42 1.875 2.578 7.676a.987.987 0 001.72.28L24 7.218z" />
    </svg>
  );
});

Norco.propTypes = {
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

export default Norco;
