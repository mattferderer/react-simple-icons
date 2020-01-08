import React from 'react';
import PropTypes from 'prop-types';

const Adobephonegap = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M7.494,15.567l-0.885,0.055v0.387c0,1.051,0.608,1.272,1.106,1.272h0.111l1.438-0.111 c0.055-0.166,0.055-0.276,0.055-0.276S9.153,7.882,9.097,6.776c0-0.276-0.055-0.442-0.166-0.608 C8.434,6.113,7.936,6.113,7.605,6.058H7.439c-0.332,0-0.608,0.111-0.774,0.276C6.388,6.611,6.444,6.998,6.444,6.998v0.663 C7.162,7.716,7.66,7.716,7.66,7.716s0.774,0.166,0.829,0.995c0.055,0.885,0.055,5.861,0.055,5.861S8.6,15.402,7.494,15.567z M4.73,15.789l-1.382,0.111c0,0-1.161,0.166-1.216-1.106c0-0.94-0.111-6.358-0.111-6.358S1.965,7.44,3.181,7.495 c0.387,0,0.885,0.055,1.493,0.111c0-0.885-0.055-1.659-0.055-2.267C3.79,5.228,3.071,5.173,2.573,5.118 C0.97,4.952,1.025,6.279,1.025,6.279s0.166,9.897,0.221,11.113c0.055,1.438,1.603,1.216,1.603,1.216l1.935-0.221 C4.785,17.724,4.785,16.784,4.73,15.789z M21.925,3.459c-0.055-1.88-1.714-2.267-1.714-2.267s-5.64-0.829-8.128-1.161 S9.761,2.132,9.761,2.132s0.553,17.527,0.608,19.683c0.055,2.599,2.488,2.156,2.488,2.156l8.515-1.438 c1.548-0.332,1.603-2.267,1.603-2.267S21.98,5.505,21.925,3.459z M20.045,18.332l-6.358,0.663c0,0-1.825,0.276-1.88-1.99 C11.751,15.346,11.42,5.892,11.42,5.892s-0.111-1.714,1.769-1.603c1.935,0.166,6.579,0.553,6.579,0.553s1.216,0.276,1.272,1.714 c0.055,1.548,0.608,10.118,0.608,10.118S21.759,18.055,20.045,18.332z M13.631,18.664l2.433-0.276 c-0.111-2.488-0.553-12.164-0.608-13.546c-0.885-0.055-1.714-0.111-2.322-0.166h-0.166c-0.387,0-0.719,0.111-0.94,0.332 c-0.332,0.332-0.332,0.94-0.332,0.94v0.166c0.995,0.111,1.769,0.166,1.769,0.166s1.051,0.221,1.106,1.382 c0.055,1.272,0.332,8.128,0.332,8.128s0.111,1.161-1.382,1.382l-1.438,0.111c0.111,1.161,0.774,1.438,1.327,1.438 C13.576,18.664,13.631,18.664,13.631,18.664z M9.927,17.447l-1.99,0.166c0,0-1.603,0.221-1.603-1.603 c0-1.327-0.166-9.012-0.166-9.012S6.056,5.56,7.715,5.671c0.498,0.055,1.161,0.111,1.88,0.166C9.54,4.399,9.484,3.238,9.484,2.63 c-0.94-0.111-1.88-0.166-2.543-0.276C4.785,2.132,4.895,4.012,4.895,4.012s0.221,14.099,0.276,15.813 c0.055,2.046,2.156,1.714,2.156,1.714l2.709-0.332C9.982,20.433,9.982,19.106,9.927,17.447z" />
    </svg>
  );
};

Adobephonegap.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adobephonegap.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adobephonegap;
