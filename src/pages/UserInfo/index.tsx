import { DEFAULT_AVATAR_URL, selectAvatarUrl } from '@/constants';
import { getLoginUserUsingGET, updateMyUserUsingPOST } from '@/services/ShierBI/UserController';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { ProFormSelect } from '@ant-design/pro-form';
import { Button, Descriptions, Divider, Image, message } from 'antd';
import React, { useEffect, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const UserInfo: React.FC = () => {
  const [myUser, setMyUser] = useState({
    userName: '',
    userAccount: '',
    userAvatar: '',
    userPassword: '',
    userRole: 'user',
    createTime: '',
    updateTime: '',
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getLoginUserUsingGET(); // 使用 getLoginUserUsingGET 发送请求
        // @ts-ignore
        setMyUser(res.data);
      } catch (error) {
        // 处理请求错误
        message.error('请求参数错误！');
      }
    }

    fetchData();
  }, []);
  console.log('currentUser12312:', myUser);
  return (
    <>
      <Divider style={{ fontWeight: 'bold', color: 'blue' }}>用户头像</Divider>
      <Descriptions style={{ margin: '20px', marginLeft: '650px' }}>
        <Descriptions.Item style={{borderRadius:'50%'}}>
          <Image
            src={myUser.userAvatar === null ? DEFAULT_AVATAR_URL : myUser.userAvatar}
            width={300}
            height={300}
            style={{borderRadius:'50%'}}
          />
        </Descriptions.Item>
      </Descriptions>
      <Divider style={{ fontWeight: 'bold', color: 'blue' }}>用户信息</Divider>
      <Descriptions
        bordered
        column={1}
        size={'middle'}
        contentStyle={{ fontWeight: 'bold', color: 'blue' }}
      >
        <Descriptions.Item style={{ textAlign: 'center' }} label="用户名：">
          {myUser.userName}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="用户账户：">
          {myUser.userAccount}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="用户角色：">
          {myUser.userRole === 'user' ? '普通用户' : '管理员'}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="创建时间：">
          {myUser.createTime}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="更新时间：">
          {myUser.updateTime}
        </Descriptions.Item>
      </Descriptions>

      <ModalForm<API.UserUpdateMyRequest>
        title="修改本用户信息"
        trigger={
          <Button
            type="primary"
            shape="round"
            style={{ marginTop: '100px', width: '250px', marginLeft: '650px' }}
          >
            修改信息
          </Button>
        }
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          onCancel: () => console.log('run'),
        }}
        submitTimeout={2000}
        onFinish={async (values) => {
          await waitTime(1000);
          //点击发起请求
          const isModify = await updateMyUserUsingPOST(values);
          if (isModify) {
            message.success('修改成功');
            // 刷新用户信息表单
            location.reload();
            return true;
          }
          return false;
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="userName"
            label="用户名"
            placeholder="请输入用户名"
            initialValue={myUser.userName}
          />
          <ProFormText
            width="md"
            name="userAccount"
            label="账号名称"
            placeholder="你想修改的账号名称"
            initialValue={myUser.userAccount}
          />
          <ProFormText
            width="md"
            name="userPassword"
            label="输入密码"
            placeholder="修改密码"
            initialValue={myUser.userPassword}
          />
          <ProFormSelect
            name="userAvatar"
            fieldProps={{
              size: 'large',
            }}
            label="用户头像"
            options={selectAvatarUrl}
            placeholder={'请选择用户头像 '}
            initialValue={myUser.userAvatar}
            rules={[
              {
                required: true,
                message: '请输入选择用户头像!',
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
};

export default UserInfo;
