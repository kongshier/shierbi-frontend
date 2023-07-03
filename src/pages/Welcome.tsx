import {HeartTwoTone, LoadingOutlined, SmileTwoTone} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Carousel, Image, Typography } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 */

const { Title, Paragraph } = Typography;

const blockContent = `通过我们的智能BI平台，即使对数据分析一无所知的同学也能够轻松完成复杂的数据分析任务，大幅节约人力成本。利用AI接口和自动化技术，我们为您提供了快速、准确和可靠的数据洞察力。立即体验我们的智能BI平台，让数据分析变得简单而智能！`;
const BIIntroduce = `这是一个创新的数据分析工具，与传统的BI完全不同。我们的项目利用AI技术，以完全新颖的方式帮助用户进行数据分析，节约人力成本并提高效率。

在传统的数据分析过程中，数据分析者需要耗费大量的时间和精力来导入、清理和准备数据，然后仔细选择合适的图表类型，并分析数据以得出结论。这个过程耗时且复杂，对于不擅长数据分析的用户来说更是一项挑战。

但是，我们的项目将彻底改变这一现状。我们的数据分析工具不需要用户具备专业的数据分析能力，只需导入最原始的数据集并输入所需的分析目标，即可依靠强大的AI技术自动生成符合要求的图表和详细的分析结论。这一创新的方法不仅减少了数据准备和分析的时间和工作量，还使得数据分析对于非专业用户来说变得轻而易举。

此外，我们的项目还包含其他功能，如图表管理和异步生成。通过图表管理功能，用户可以轻松管理已生成的图表，并进行编辑和导出。而异步生成功能可以让用户在图表生成的同时进行其他操作，进一步提高工作效率。

这个项目的最大优势在于让不具备数据分析技能的人员也能快速进行数据分析。我们的解决方案利用AI接口，根据用户输入的分析目标和原始数据，快速生成高质量的可视化图表和详细的分析结论。这将大大降低公司和组织的人工数据分析成本，提高工作效率，并为决策提供更有力的支持。

总而言之，我们的项目将为数据分析领域带来一场革命。借助AI技术的应用，我们的工具能够满足非专业用户的需求，让数据分析过程变得简单高效。我们相信，这个项目的推出将帮助更多的人轻松实现数据分析目标，并推动业务和决策的快速发展。`
const Welcome: React.FC = () => {
  return (
    <PageContainer content={' 欢迎来到不一样的智能BI平台'}>
      <Card>
        <Alert
          message={'欢迎使用十二的智能BI平台！'}
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
          <SmileTwoTone style={{color:"#0015ff"}} /> 智能 BI 平台 <HeartTwoTone twoToneColor="#eb2f96" />
        </Typography.Title>
        <Paragraph style={{color:"blue"}}>
          我们的智能BI平台是一个革命性的数据分析工具，为用户提供了轻松、快速且智能化的数据分析体验。
        </Paragraph>
        <Paragraph style={{color:"#0d9d8e",fontWeight:'bold'}}>
          <pre>{blockContent}</pre>
        </Paragraph>
        <Title level={2} style={{color:"#0015ff"}}>
          智能BI介绍
        </Title>
        <Paragraph style={{color:"#120bfc",fontWeight:'bold'}}>
          <pre>{BIIntroduce}</pre>
        </Paragraph>
        <Title level={2} style={{color:"#0015ff"}}>
          智能BI特点
        </Title>
        <Paragraph strong style={{color:"#0067ff"}}>
          1.
          自动化数据分析：项目采用AI技术，能够自动化地从原始数据中生成符合要求的图表和分析结论。用户只需要输入分析目标和原始数据，无需具备专业的数据分析知识，即可完成数据分析的过程。
        </Paragraph>
        <Paragraph strong style={{color:"#00bbff"}}>
          2.
          节约人力成本：传统的数据分析通常需要数据分析师具备一定的技能和经验，并花费大量的时间进行数据清洗、转化和分析。这个项目的优势在于能够大幅度降低人工数据分析成本，让不具备数据分析能力的用户也能迅速完成数据分析任务，节约了人力资源。
        </Paragraph>
        <Paragraph strong style={{color:"#0077ff"}}>
          3.
          简化操作流程：该项目提供了图表管理和异步生成的功能，使用户能够更加方便地管理和保存生成的图表，同时异步生成功能也能提升用户的操作效率。
        </Paragraph>
        <Paragraph strong style={{color:"#00bbff"}}>
          4.
          可视化结果：通过使用AI接口生成分析结果，该项目能够实现将数据以可视化的方式展示出来，使用户更容易理解和解读数据，从而做出更明智的决策。
        </Paragraph>
        <Paragraph strong style={{color:"#006fff"}}>
          5.
          适用范围广：由于项目能够从最原始的数据集中进行分析，因此适用于各类行业和领域。用户只需要提供自己的数据和分析目标，即可快速得到相应的分析结果。
        </Paragraph>
        <br/>
        <br/>
        <Paragraph strong style={{color:"#006fff"}}>
          <Carousel autoplay autoplaySpeed={10000} >
            <div>
              <Image
                src={
                  'https://shierimages.oss-cn-shenzhen.aliyuncs.com/TyporaImages/49.jpeg'
                }
              />
            </div>
            <div>
              <Image
                src={
                  'https://shierimages.oss-cn-shenzhen.aliyuncs.com/TyporaImages/48.jpeg'
                }
              />
            </div>
            <div>
              <Image
                src={
                  'https://shierimages.oss-cn-shenzhen.aliyuncs.com/TyporaImages/62.jpeg'
                }
              />
            </div>
            <div>
              <Image
                src={
                  'https://shierimages.oss-cn-shenzhen.aliyuncs.com/TyporaImages/yys.jpg'
                }
              />
            </div>
            <div>
              <Image
                src={
                  'https://shierimages.oss-cn-shenzhen.aliyuncs.com/TyporaImages/54.jpeg'
                }
              />
            </div>
          </Carousel>
        </Paragraph>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
