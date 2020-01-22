import React from 'react';
import PropTypes from 'prop-types';

const Rhinoceros = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.879,15.199c-0.101-0.032-0.216-0.126-0.361-0.219c-0.144-0.093-0.318-0.184-0.386-0.268 c-0.068-0.084-0.031-0.161,0.029-0.218c0.06-0.056,0.143-0.092,0.262-0.065c0.119,0.027,0.272,0.116,0.418,0.212 c0.146,0.096,0.283,0.199,0.334,0.288c0.05,0.089,0.013,0.164-0.048,0.217c-0.044,0.038-0.101,0.065-0.168,0.065 C11.933,15.212,11.907,15.208,11.879,15.199 M10.794,14.327c-0.093,0.086-0.144,0.201-0.033,0.338 c0.111,0.137,0.385,0.297,0.636,0.469c0.252,0.172,0.481,0.357,0.665,0.42c0.184,0.063,0.323,0.006,0.403-0.096 c0.079-0.102,0.099-0.247-0.004-0.404c-0.102-0.157-0.327-0.325-0.564-0.481c-0.237-0.157-0.488-0.302-0.681-0.346 c-0.046-0.01-0.088-0.015-0.127-0.015C10.961,14.212,10.865,14.261,10.794,14.327 M16.058,19.305 c-0.058,0.041-0.106,0.113-0.093,0.185c0.012,0.072,0.084,0.146,0.173,0.255c0.089,0.109,0.195,0.255,0.264,0.335 c0.069,0.08,0.1,0.093,0.128,0.091c0.028-0.002,0.054-0.018,0.085-0.048c0.031-0.03,0.069-0.074,0.095-0.156 c0.026-0.082,0.041-0.204,0.002-0.316c-0.039-0.112-0.133-0.216-0.218-0.282c-0.085-0.067-0.162-0.096-0.236-0.106 c-0.016-0.002-0.032-0.003-0.048-0.003C16.156,19.259,16.104,19.273,16.058,19.305 M16.546,20.304 c-0.032-0.001-0.062-0.023-0.208-0.171c-0.146-0.148-0.409-0.423-0.573-0.642c-0.165-0.219-0.231-0.383-0.263-0.568 c-0.031-0.185-0.027-0.391,0.082-0.537c0.109-0.145,0.323-0.23,0.534-0.238c0.211-0.008,0.419,0.061,0.602,0.239 c0.183,0.179,0.34,0.468,0.383,0.732c0.042,0.265-0.03,0.505-0.125,0.692c-0.095,0.187-0.212,0.32-0.288,0.397 c-0.074,0.074-0.109,0.095-0.141,0.095C16.547,20.304,16.546,20.304,16.546,20.304 M13.291,10.137 c-0.084,0.009-0.193,0.111-0.415,0.293c-0.222,0.182-0.559,0.444-1.017,0.701c-0.458,0.256-1.038,0.507-1.509,0.733 c-0.471,0.226-0.832,0.429-1.005,0.712c-0.172,0.283-0.155,0.648,0.04,0.851c0.195,0.203,0.566,0.245,0.884,0.258 c0.317,0.013,0.58-0.002,0.826,0.087c0.246,0.09,0.475,0.284,0.764,0.515c0.289,0.231,0.637,0.499,0.926,0.562 c0.289,0.063,0.518-0.079,0.766-0.203c0.248-0.124,0.516-0.23,0.887-0.225c0.371,0.005,0.847,0.121,1.318,0.37 c0.471,0.249,0.938,0.63,1.184,0.867c0.246,0.236,0.272,0.327,0.245,0.362c-0.027,0.036-0.108,0.017-0.304-0.14 c-0.196-0.158-0.507-0.454-0.916-0.688c-0.409-0.234-0.916-0.405-1.399-0.391c-0.483,0.013-0.941,0.211-1.231,0.55 c-0.29,0.34-0.412,0.822-0.546,1.164c-0.134,0.342-0.279,0.543-0.47,0.617c-0.19,0.074-0.424,0.021-0.704-0.099 c-0.279-0.12-0.604-0.307-0.873-0.442c-0.269-0.136-0.484-0.221-0.62-0.353c-0.136-0.132-0.195-0.311-0.203-0.571 c-0.009-0.26,0.032-0.601,0.051-0.853c0.019-0.251,0.017-0.413-0.039-0.561c-0.055-0.147-0.164-0.28-0.233-0.349 c-0.069-0.069-0.098-0.075-0.112-0.058c-0.014,0.017-0.012,0.058,0.01,0.158c0.023,0.1,0.066,0.26,0.049,0.582 c-0.018,0.321-0.097,0.803-0.159,1.169c-0.062,0.367-0.107,0.618-0.02,0.809c0.087,0.191,0.307,0.321,0.707,0.54 c0.401,0.219,0.982,0.527,1.519,0.854c0.536,0.327,1.027,0.674,1.561,1.089c0.534,0.415,1.112,0.9,1.501,1.238 c0.388,0.339,0.588,0.532,0.742,0.591c0.154,0.058,0.263-0.018,0.307-0.139c0.044-0.121,0.023-0.285-0.014-0.429 c-0.037-0.144-0.091-0.266-0.24-0.46c-0.149-0.194-0.394-0.46-0.68-0.704c-0.286-0.243-0.613-0.463-0.803-0.614 c-0.19-0.151-0.242-0.233-0.212-0.258c0.03-0.026,0.141,0.004,0.303,0.107c0.162,0.104,0.374,0.281,0.611,0.459 c0.237,0.178,0.499,0.356,0.734,0.584c0.235,0.228,0.442,0.506,0.583,0.707c0.14,0.201,0.214,0.324,0.294,0.372 c0.08,0.048,0.166,0.021,0.277-0.05c0.111-0.071,0.249-0.186,0.427-0.355c0.178-0.169,0.397-0.393,0.551-0.634 c0.154-0.24,0.242-0.496,0.299-0.772c0.056-0.276,0.081-0.572,0.247-0.861c0.167-0.29,0.476-0.574,0.994-1.025 c0.518-0.451,1.244-1.07,1.891-1.665c0.647-0.595,1.216-1.165,1.695-1.802c0.479-0.637,0.87-1.342,1.068-1.743 c0.198-0.401,0.204-0.499,0.14-0.526c-0.064-0.028-0.198,0.015-0.611,0.312c-0.413,0.297-1.105,0.849-1.886,1.43 c-0.781,0.581-1.65,1.191-2.336,1.569c-0.686,0.378-1.189,0.524-1.55,0.562c-0.361,0.037-0.58-0.034-0.723-0.11 c-0.143-0.076-0.211-0.157-0.224-0.241c-0.013-0.084,0.029-0.169,0.135-0.275c0.106-0.106,0.277-0.232,0.446-0.392 c0.17-0.16,0.339-0.354,0.468-0.556c0.13-0.202,0.22-0.412,0.262-0.593c0.042-0.181,0.034-0.333-0.04-0.376 c-0.074-0.043-0.215,0.023-0.377,0.11c-0.161,0.086-0.343,0.193-0.593,0.301c-0.249,0.108-0.566,0.216-0.92,0.235 c-0.354,0.018-0.746-0.053-1.089-0.313c-0.342-0.26-0.635-0.709-0.866-1.147c-0.23-0.438-0.399-0.864-0.513-1.119 c-0.108-0.242-0.167-0.33-0.245-0.33C13.299,10.137,13.295,10.137,13.291,10.137 M6.483,3.12c-0.512,0.044-1.25,0.181-1.803,0.329 c-0.552,0.148-0.917,0.307-1.149,0.42C3.3,3.981,3.201,4.047,3.177,4.141c-0.024,0.095,0.027,0.218,0.16,0.436 c0.132,0.219,0.346,0.533,0.535,0.961c0.19,0.428,0.356,0.97,0.361,1.651c0.006,0.68-0.149,1.499-0.245,1.962 C3.892,9.614,3.855,9.72,3.761,9.77C3.667,9.82,3.516,9.813,3.235,9.749c-0.28-0.065-0.69-0.187-1.1-0.259 C1.726,9.418,1.317,9.397,1.014,9.452C0.71,9.508,0.51,9.641,0.369,9.82C0.228,10,0.145,10.227,0.087,10.57 C0.029,10.913-0.004,11.372,0,11.688c0.005,0.316,0.047,0.489,0.136,0.583c0.089,0.094,0.223,0.109,0.492,0.054 c0.269-0.055,0.672-0.18,1.224-0.215c0.553-0.035,1.255,0.02,1.94,0.202c0.685,0.182,1.352,0.491,1.95,0.929 c0.598,0.439,1.127,1.008,1.565,1.594c0.439,0.586,0.787,1.189,1.004,1.541c0.217,0.352,0.304,0.455,0.371,0.42 c0.068-0.035,0.118-0.207,0.145-0.417c0.028-0.209,0.033-0.456-0.02-0.848c-0.053-0.392-0.165-0.93-0.319-1.366 c-0.154-0.436-0.35-0.77-0.495-1.018c-0.146-0.247-0.242-0.407-0.245-0.51c-0.004-0.103,0.085-0.148,0.51-0.315 c0.425-0.167,1.186-0.457,1.958-0.808c0.772-0.351,1.557-0.764,2.042-1.106c0.486-0.341,0.674-0.611,0.724-0.937 c0.05-0.326-0.039-0.709-0.159-1.076c-0.12-0.367-0.272-0.717-0.53-1.193c-0.257-0.476-0.62-1.077-1.014-1.604 c-0.394-0.528-0.818-0.982-1.1-1.236C9.898,4.109,9.759,4.054,9.669,4.074c-0.09,0.02-0.13,0.114-0.167,0.47 C9.465,4.9,9.433,5.517,9.358,6.103C9.283,6.689,9.166,7.244,8.926,7.876c-0.239,0.632-0.601,1.342-0.99,1.982 c-0.388,0.641-0.804,1.212-1.054,1.462c-0.25,0.25-0.336,0.179-0.477,0.063c-0.141-0.116-0.337-0.275-0.486-0.4 c-0.149-0.125-0.253-0.214-0.273-0.293c-0.02-0.08,0.044-0.15,0.27-0.448c0.226-0.298,0.614-0.824,0.96-1.477 c0.346-0.653,0.649-1.432,0.796-2.283C7.82,5.632,7.811,4.709,7.767,4.145c-0.044-0.564-0.124-0.77-0.306-0.896 C7.324,3.154,7.129,3.103,6.823,3.103C6.722,3.103,6.61,3.109,6.483,3.12" />
    </svg>
  );
};

Rhinoceros.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rhinoceros.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Rhinoceros;
