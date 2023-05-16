import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Card, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

const blockContent = `欢迎来到管理智能BI，你是管理员你拥有更多的权限去体验平台服务`;

const Admin: React.FC = () => {
  return (
    <PageContainer content={' 管理员首页介绍 '}>
      <Card>
        <Alert
          message={'全力打造智能BI系统'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone /> 十二智能 BI 管理界面
          <HeartTwoTone twoToneColor="#eb2f96" />
        </Typography.Title>

        <Paragraph>
          我们的智能BI平台是一个革命性的数据分析工具，为用户提供了轻松、快速且智能化的数据分析体验。
        </Paragraph>
        <Paragraph>
          <pre>{blockContent}</pre>
        </Paragraph>
        <Title level={3}>
          管理员权限
        </Title>
        <Paragraph>
          1. 增删改查用户
        </Paragraph>
        <Paragraph>
          2. 调用平台所有接口服务
        </Paragraph>
        <Paragraph>
          3. 更好进行图表管理
        </Paragraph>
      </Card>
    </PageContainer>
  );
};
export default Admin;
