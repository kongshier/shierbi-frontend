import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Card, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;


const Admin: React.FC = () => {
  return (
    <PageContainer content={' 管理员首页介绍 '}>
      <Card>
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone /> 智能 BI 管理界面
          <HeartTwoTone twoToneColor="#eb2f96" />
        </Typography.Title>

        <Alert
          message={'全力打造智能BI系统'}
          style={{
            margin: -12,
            marginBottom: 48,
            textAlign:"center"
          }}
        />
        <Title level={1} style={{color:"#0015ff",textAlign:"center"}}>
          管理员特权
        </Title>
        <Paragraph style={{color:"#0015ff"}}>
          1. 增删改查用户
        </Paragraph>
        <Paragraph style={{color:"#0015ff"}}>
          2. 调用平台所有接口服务
        </Paragraph>
        <Paragraph style={{color:"#0015ff"}}>
          3. 更好进行图表管理
        </Paragraph>
        <Paragraph style={{color:"#0015ff"}}>
          4. 可以查看所有用户生成的图表
        </Paragraph>
      </Card>
    </PageContainer>
  );
};
export default Admin;
