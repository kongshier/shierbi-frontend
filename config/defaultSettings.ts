import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#3e10d8',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  pwa: false,
  iconfontUrl:'',
  logo:'https://shierimages.oss-cn-shenzhen.aliyuncs.com/TyporaImages/logo.png'
};

export default Settings;
