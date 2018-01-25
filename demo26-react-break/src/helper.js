import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  desktop: 992
});

export const OnMobile = layout.is('mobile');
export const OnDesktop = layout.is('desktop');