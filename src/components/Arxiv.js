import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Arxiv = forwardRef(function Arxiv({ color = 'currentColor', size = 24, title = 'arxiv', ...others }, ref) {
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
      <path d="M16.318 8.465V9.59h1.344V8.465zm-6.9.228l2.059 3.412-2.155 3.311h1.14l1.563-2.41 1.46 2.41h1.628l-2.136-3.553 2.056-3.17h-1.125l-1.484 2.264-1.371-2.264zm-.096 6.723H9.32v.004zM2.25 10.314a5.039 5.039 0 00-1.814.348v.926a3.32 3.32 0 011.593-.445c.59 0 .883.258.883.775v.455h-.355c-.822.001-1.453.152-1.893.451a1.456 1.456 0 00-.663 1.278 1.382 1.382 0 00.408 1.033 1.48 1.48 0 001.065.398c.517 0 .998-.217 1.443-.652l.004.002h.053c.159.435.512.652 1.066.652a2.757 2.757 0 00.754-.129l-.031-.756a.803.803 0 01-.176.022c-.254 0-.377-.192-.377-.584v-2.215c.001-1.038-.653-1.559-1.961-1.559zm6.646 0c-.713 0-1.246.353-1.591 1.057v-.941H5.959v4.99h1.346v-3.178c.336-.535.768-.805 1.306-.805a1.607 1.607 0 01.534.104v-1.2a1.408 1.408 0 00-.249-.027zm7.422.116v4.994l1.344-.004v-4.99zm2.52 0l1.902 4.99h1.332L24 10.43h-.965l-1.385 3.6-1.396-3.6zM2.596 13.145h.322v1.013c-.331.305-.651.46-.982.455a.643.643 0 01-.643-.65c0-.543.433-.818 1.303-.818z" />
    </svg>
  );
});

Arxiv.propTypes = {
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

export default Arxiv;
