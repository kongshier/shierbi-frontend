import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 */

const { Title, Paragraph } = Typography;

const blockContent = `通过我们的智能BI平台，即使对数据分析一无所知的同学也能够轻松完成复杂的数据分析任务，大幅节约人力成本。利用AI接口和自动化技术，我们为您提供了快速、准确和可靠的数据洞察力。立即体验我们的智能BI平台，让数据分析变得简单而智能！`;

const Welcome: React.FC = () => {
  return (
    <PageContainer content={' 欢迎来到不一样的智能BI平台'}>
      <Card>
        <Alert
          message={'欢迎使用我们的智能BI平台！。'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={1}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone /> 十二智能 BI <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
        <Paragraph>
          我们的智能BI平台是一个革命性的数据分析工具，为用户提供了轻松、快速且智能化的数据分析体验。
        </Paragraph>
        <Paragraph>
          <pre>{blockContent}</pre>
        </Paragraph>
        <Title level={2} style={{}}>
          平台特点
        </Title>
        <Paragraph>与传统的BI系统相比，我们的平台具有以下突出特点</Paragraph>
        <Paragraph>
          1.
          自动化分析：无需编写复杂的查询语言或进行手动分析，您只需将原始数据集导入平台，输入您想要分析的目标，我们的AI技术将自动生成符合要求的图表和分析结论。这使得数据分析变得简单且高效。
        </Paragraph>
        <Paragraph>
          2.
          简单易用：我们的平台专为不具备数据分析经验的用户设计。通过简单的界面和指导，您只需输入目标即可快速完成数据分析，无需深入了解复杂的分析技术和工具。
        </Paragraph>
        <Paragraph>
          3.
          图表管理：我们的平台提供了图表管理功能，让您可以轻松保存、组织和共享生成的图表。您可以创建自定义的仪表板，将多个图表组合在一起，以便更好地展示和比较数据。
        </Paragraph>
        <Paragraph>
          4.
          异步生成：平台支持异步生成图表和分析结果，即使处理大量数据时也能保持高效。您可以提交分析任务后继续其他工作，平台会在后台自动处理数据并生成结果，您可以随时返回查看分析完成的图表和结论。
        </Paragraph>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
