import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Polkadot = forwardRef(function Polkadot(
  { color = 'currentColor', size = 24, title = 'polkadot', ...others },
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
      <path d="M12 0C6.985 0 2.886 4.075 2.886 9.114a9.55 9.55 0 0 0 .482 2.966c.217.651.94 1.013 1.615.796.651-.217 1.013-.94.796-1.616a6.42 6.42 0 0 1-.362-2.338c.097-3.4 2.846-6.197 6.245-6.366 3.786-.193 6.92 2.821 6.92 6.558a6.579 6.579 0 0 1-6.196 6.559s-1.278.072-1.905.169c-.314.048-.555.096-.723.12-.073.024-.145-.048-.121-.12l.217-1.061 1.182-5.45a1.264 1.264 0 0 0-.965-1.494 1.264 1.264 0 0 0-1.495.964s-2.845 13.262-2.87 13.406c-.144.676.29 1.35.965 1.495.675.145 1.35-.289 1.495-.964.024-.145.41-1.905.41-1.905a3.203 3.203 0 0 1 2.7-2.508c.29-.048 1.423-.12 1.423-.12 4.702-.362 8.415-4.292 8.415-9.09C21.114 4.074 17.015 0 12 0Zm.651 20.978a1.518 1.518 0 0 0-1.808 1.181c-.17.82.337 1.64 1.181 1.809.82.168 1.64-.338 1.809-1.182.168-.844-.338-1.64-1.182-1.808z" />
    </svg>
  );
});

Polkadot.propTypes = {
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

export default Polkadot;
