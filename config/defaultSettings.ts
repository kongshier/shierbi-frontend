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
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '十二智能 BI',
  pwa: false,
  logo: 'https://gitee.com/kcsen/img/raw/master/picGo/systemlogo.png',
  iconfontUrl: '',
  token: {},
};

export default Settings;
