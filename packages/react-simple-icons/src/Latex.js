import React from 'react';
import PropTypes from 'prop-types';

const Latex = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.176 2.813c.233.42.477.779.73 1.09h-.002a2.313 2.313 0 0 0-.357-.026 2.702 2.702 0 0 0-.791.13c.494.415.912.717 1.281.95.905.294 1.912.782 2.77 1.328.429.273.812.543 1.113.78.301.236.567.471.621.574.054.102-.001.139-.082.06-.081-.078-.302-.319-.6-.553a14.203 14.203 0 0 0-1.107-.775c-.775-.49-1.982-.96-2.715-1.414-.57-.182-1.182-.207-1.902.135.526.33.967.568 1.353.746 1.104.155 2.259.695 3.225 1.308.483.308.905.616 1.22.868.158.125.29.237.39.328.098.09.176.155.198.21.03.074-.02.104-.085.057-.032-.022-.085-.102-.182-.191a7.475 7.475 0 0 0-.385-.326c-.312-.25-.73-.553-1.21-.858-.894-.561-2.233-1.012-3.175-1.396-.601-.11-1.223-.06-1.904.389.449.2.837.35 1.182.464-.566.02-1.128.197-1.676.717.477.118.885.198 1.244.25-.44.09-.87.3-1.289.72.324.07.616.123.883.163-.329.159-.64.406-.924.783.373.03.703.042 1 .043-.36.166-.696.428-.996.85.533.026.979.024 1.363.002-.422.172-.812.464-1.144.969a11.66 11.66 0 0 0 1.629-.077l-.008.002c.99-.073 2.3.127 2.965.848.052.057-.024.118-.073.074-.648-.58-1.494-.827-2.892-.922-.544.15-1.047.447-1.461 1.075.535.007.981-.011 1.365-.047-.47.255-.871.643-1.137 1.304.483-.091.888-.19 1.237-.293-.363.265-.669.636-.873 1.194.324-.072.611-.146.87-.221a2.52 2.52 0 0 0-.513 1.096c.351-.13.655-.256.926-.38h.002c.283-.23.71-.457 1.289-.622.506-.145 1.082-.284 1.652-.301a3.63 3.63 0 0 1 .244 0c.1.003.063.104.006.103-.728-.008-1.302.132-1.873.295a9.8 9.8 0 0 0-1.318.526 2.5 2.5 0 0 0-.551 1.191c.495-.198.899-.388 1.238-.568-.311.333-.543.76-.635 1.357a11.794 11.794 0 0 0 1.442-.744c-.432.362-.764.844-.879 1.588a10.81 10.81 0 0 0 1.766-.957c-.184.372-.281.807-.235 1.35.762-.585 1.245-1.056 1.604-1.473a2.67 2.67 0 0 0 .076.885c.449-.772.897-1.093 1.353-1.358-.563.37-.464.671-.464 1.014.683-.72 1.636-1.483 1.927-1.961-.39.585-.547 1.14-.65 1.629-1.994 1.055-3.21 1.33-4.57 1.752.528.194 1.095.383.861.652l-.625.623c.399-.124.805-.3 1.158-.058-.034.327-.448.493-.8.683.62-.224.756-.173.92-.12.08.391-.203.602-.387.86 1.565-1.19 3.606-2.128 5.045-2.521 2.022-.681 4.632-1.39 5.341-3.117.235-.946.478-1.905.707-2.842-.111-.035-.245-.063-.35-.133a.655.655 0 0 1-.234-.299c-.252.066-.441.031-.56-.088-.118-.117-.168-.294-.203-.49-.204.042-.364.017-.47-.076-.114-.102-.17-.26-.198-.443l-.006-.041.037-.014a.84.84 0 0 0 .3-.195.256.256 0 0 0 .071-.225l-.006-.037.03-.016c.163-.093.346-.168.43-.279a.277.277 0 0 0 .05-.21.886.886 0 0 0-.154-.36l-.028-.04.04-.027c.118-.09.246-.176.31-.257.032-.041.046-.077.045-.11 0-.033-.015-.071-.065-.119l-.097-.094.135.006c.212.009.396-.006.539-.053a.5.5 0 0 0 .296-.224.455.455 0 0 1-.005-.074.455.455 0 0 1 .455-.455.455.455 0 0 1 .455.455.455.455 0 0 1-.022.132c.184.016.359.008.524-.064l.037-.012c.236-.084.333.045.72-.459-1.69-2.191-4.158-.632-4.978 1.625-.21.577-1.405.577-1.752-.002-1.37-2.95-5.531-6.067-9.072-7.216zm.732 1.091c.252-.009 1.13.453 1.31.52a23.6 23.6 0 0 1 1.567.967c.505.336.961.663 1.274.902.156.12.277.218.351.285.037.034.064.057.08.082a.079.079 0 0 1 .01.022.056.056 0 0 1-.004.045c-.01.02-.03.03-.043.03a.075.075 0 0 1-.027 0c-.057.001-.202-.163-.496-.415a23.427 23.427 0 0 0-2.758-1.826c-.504-.28-.956-.54-1.264-.612zM1.766 6.691c.812 0 1.89.365 2.931.92C5.74 8.168 6.74 8.83 7.223 9.39c.066.076-.019.123-.077.068-.52-.496-1.462-1.206-2.498-1.758-.637-.336-2.148-1.005-2.882-1.008zm-.428.967c1.116.015 2.348.446 3.432.996.541.275 1.024.57 1.396.832.372.263.673.523.734.657.062.133-.019.13-.086.054a4.404 4.404 0 0 0-.705-.627 11.496 11.496 0 0 0-1.384-.824c-.963-.482-2.284-.926-3.387-1.088zm.162.815c.066-.003.133 0 .201.006.822.071 1.719.366 2.533.748 1.087.509 2.035 1.157 2.434 1.666.035.045-.011.133-.078.064-.428-.44-1.32-1.132-2.397-1.637C3.28 8.9 1.91 8.45.93 8.541c.188-.024.373-.061.57-.068zm16.541.013c-.365.475-.53.425-.701.465.093.431.35.587.586.772 2.02-.372 4.29-.274 6.08-.225l-5.963-1.01-.002-.002zm-.803.494c-.19.077-.387.079-.584.06a.455.455 0 0 1-.39.224.455.455 0 0 1-.414-.268.616.616 0 0 1-.301.21 1.57 1.57 0 0 1-.492.054c.02.035.054.067.054.103a.275.275 0 0 1-.07.174c-.073.093-.188.172-.295.25a.946.946 0 0 1 .149.361.388.388 0 0 1-.07.284c-.106.14-.287.211-.438.295a.374.374 0 0 1-.092.267.886.886 0 0 1-.297.197c.027.157.074.283.154.354.086.076.212.104.426.049l.055-.016.01.055c.034.207.088.386.187.484.1.099.243.135.502.055l.049-.016.015.05a.53.53 0 0 0 .21.282c.087.06.25.112.36.147.798-.868 1.525-1.772 1.884-2.86-.225-.176-.508-.335-.612-.795zM1.44 9.348a6.683 6.683 0 0 1 2.77.64c.92.43 1.658.939 1.975 1.307.074.087-.02.122-.073.074a8.186 8.186 0 0 0-1.947-1.29c-.904-.416-2.196-.646-3.16-.718.145-.01.29-.014.435-.013zm.432.816c.61.02 1.24.155 1.807.352.756.262 1.42.614 1.746.98.044.05-.005.13-.072.07-.349-.304-.962-.694-1.707-.953-.575-.195-1.616-.367-2.27-.396.196-.021.293-.06.496-.053zm.893 1.781c.05 0 .103.004.156.008.424.034.886.133 1.342.406.043.026.049.136-.05.09-.856-.402-1.327-.489-2.458-.308.338-.113.652-.199 1.01-.196zm.416.784c.3.004.613.062.998.216.044.018.08.126-.033.094-.857-.243-1.167-.328-2.288.104.281-.229.62-.367 1.022-.403.1-.009.2-.013.3-.011zm1.459.681c.156 0 .311.009.46.026.053.005.055.102-.007.1a7.9 7.9 0 0 0-1.838.114c-.243.046-.422.044-1.404.46.286-.234.795-.451 1.386-.56.444-.08.934-.142 1.403-.14zm1.336.906c.035-.005.105.084.017.1-.73.136-1.244.268-1.795.455-.216.074-.579.207-1.242.588.259-.269.655-.494 1.213-.684a10.65 10.65 0 0 1 1.807-.459zm.31.508c.075-.012.099.087.022.102-1.217.24-1.76.556-2.541 1.144.503-.523 1.296-1.05 2.52-1.246zm.596.447a.095.095 0 0 1 .03 0c.06.011.069.089-.009.1-.872.13-1.479.555-2.257 1.332.295-.494 1.006-1.242 2.236-1.432zm.371.391c.046-.005.116.073.025.1-.193.056-.433.15-.67.3-.182.118-.302.202-.6.508.112-.245.299-.435.546-.591.246-.157.507-.293.699-.317z" />
    </svg>
  );
};

Latex.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Latex.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Latex;
