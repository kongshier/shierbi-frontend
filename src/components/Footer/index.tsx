import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {CSDN_LINK, WELCOME} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '猫十二懿出品';
  const currentYear = new Date().getFullYear();
  const beian = '桂ICP备2023002099号';
  const beianUrl = 'https://beian.miit.gov.cn/#/Integrated/index';
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage} |{' '}
          <a href={beianUrl} target="_blank" rel="noreferrer">
            {beian}
          </a>
        </>
      }
      links={[
        {
          key: '欢迎你加入星球 ',
          title: '学习圈子',
          href: WELCOME,
          blankTarget: true,
        },
        {
          key: '猫十二懿博客 ',
          title: '猫十二懿博客 ',
          href: CSDN_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/kongshier',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
