import React from 'react';
import PropTypes from 'prop-types';

const Alipay = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M16.076,13.732c0.862-1.494,1.55-3.196,2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365 c-0.415,0-0.415,0.408-0.415,0.408V6.04H4.707v0.948h5.861v1.699H5.729v0.948h9.386c-0.343,1.18-0.805,2.288-1.352,3.294 c-3.045-1.002-6.295-1.814-8.337-1.314c-1.305,0.321-2.146,0.893-2.641,1.493c-2.267,2.751-0.641,6.929,4.147,6.929 c2.831,0,5.559-1.574,7.673-4.168C17.758,17.381,24,19.976,24,19.976v0.157c0,2.117-1.719,3.833-3.843,3.833H3.845 C1.72,23.966,0,22.249,0,20.132V3.868C0,1.75,1.72,0.034,3.845,0.034h16.312C22.281,0.034,24,1.75,24,3.868v12.409 c0,0-0.784-0.062-4.24-1.216C18.8,14.74,17.511,14.25,16.076,13.732z M5.834,13.034c-0.6,0.059-1.725,0.324-2.341,0.866 c-1.845,1.604-0.741,4.537,2.993,4.537c2.17,0,4.339-1.384,6.042-3.599C10.104,13.659,8.052,12.816,5.834,13.034z" />
    </svg>
  );
};

Alipay.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Alipay.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Alipay;
