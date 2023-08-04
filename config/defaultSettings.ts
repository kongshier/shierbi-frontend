import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  title:'Cat 智能BI分析系统',
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#3e10d8',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  splitMenus: true, // 切割菜单
  colorWeak: false,
  pwa: true,
  iconfontUrl:'',
  logo:'https://shierimages.oss-cn-shenzhen.aliyuncs.com/TyporaImages/logo.png'
};

export default Settings;
