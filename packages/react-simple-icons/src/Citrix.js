import React from 'react';
import PropTypes from 'prop-types';

const Citrix = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.295 12.954l1.0616 1.6337H24l-1.8279-2.73 1.6518-2.4358h-1.6473l-.88 1.3548-.8832-1.3548H18.766l1.6518 2.4357-1.8278 2.7301h1.6434l1.0616-1.6338m-6.7216-1.7087c0 .204-.0604.3492-.1845.4437-.1269.0967-.3315.1457-.608.1457h-.1835v-1.2312h.2065c.2838 0 .4858.05.6005.1486.1122.0965.169.2625.169.4932zm.386 1.3058c.3396-.087.6051-.2508.7903-.4875.199-.2545.3-.586.3-.9852 0-.57-.1748-.9938-.5193-1.2601-.34-.263-.9332-.3963-1.7626-.3963h-1.5975v5.1658h1.4271v-1.8165l1.0717 1.8165h1.6856l-1.3953-2.0367M7.4346 9.4219v1.27h1.3542v3.8958h1.4271v-3.8959h1.3478v-1.27H7.4346m-3.4557 3.2634l-.045.0577c-.154.1975-.3362.3463-.5271.4307-.2066.0912-.4188.1375-.6306.1375-.3804 0-.6956-.1202-.9367-.3572-.241-.2368-.3632-.5452-.3632-.9164 0-.4.1208-.7268.359-.9713.238-.244.5545-.3679.9409-.3679.218 0 .4313.0458.6338.1361.225.1002.386.2327.522.4297l.0469.0679.779-1.1874-.0352-.0319c-.4074-.3691-.8488-.611-1.3119-.719-.2281-.053-.489-.08-.7754-.08-.752 0-1.386.2591-1.8847.7698C.2526 10.5939 0 11.2426 0 12.0114c0 .7688.252 1.4152.7493 1.9214.4975.5062 1.132.763 1.886.763.3069 0 .5593-.0269.7719-.082.2349-.0611.8357-.2619 1.3414-.8084l.0312-.0338-.8009-1.0864m14.33-3.2633h-1.4226v5.1658h1.4226V9.422m-.706 5.5365c-.4866 0-.8825.396-.8825.8825 0 .4866.3959.8826.8825.8826s.8826-.396.8826-.8826c0-.4866-.396-.8825-.8826-.8825m-12.1867-.3707h1.4226V9.422H5.4162v5.1658m.706-5.546c.4867 0 .8826-.396.8826-.8825 0-.4868-.396-.8827-.8826-.8827-.4866 0-.8825.396-.8825.8827 0 .4866.3959.8825.8825.8825Z" />
    </svg>
  );
};

Citrix.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Citrix.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Citrix;
