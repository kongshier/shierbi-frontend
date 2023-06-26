export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', name: '登录', component: './User/Login' },
      { path: '/user/register', name: '注册', component: './User/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '首页', icon: 'icon-huanying1', component: './Welcome' },
  { path: '/add_chart', name: 'BI智能分析(同步)', icon: 'icon-tubiao1', component: './AddChart' },
  { path: '/add_chart_async', name: 'BI智能分析(异步)', icon: 'icon-tubiao1', component: './AsyncAddChart' },
  { path: '/gen_chart', name: '我的图表', icon: 'icon-bingtutubiao', component: './ChartManage' },
  {
    path: '/ai_question',
    name: '智能 AI 助手',
    icon: 'icon-rengongzhineng',
    routes: [
      { path: '/ai_question/assistant', name: 'AI 助手', icon: 'smile', component: './AiChatAssistant/AddChat' },
      { path: '/ai_question/history', name: 'AI 解答', icon: 'smile', component: './AiChatAssistant/AiChatManage' },
    ]
  },
  { icon: 'icon-yonghu', name: '我的信息', path: '/userinfo', component: './UserInfo/' },
  {
    path: '/admin',
    icon: 'icon-guanliyuan',
    name: '系统管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/index', name: '管理员身份介绍', component: './Admin' },
      { path: '/admin/user_manage', name: '用户管理', component: './Admin/UserManage' },
      { path: '/admin/adduser', name: '添加用户', component: './Admin/AddUser' },
      { path: '/admin/chart_manage', name: '图表管理', component: './Admin/ChartManage' },
      { path: '/admin/chat_manage', name: '对话管理', component: './Admin/AiChatManage' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
