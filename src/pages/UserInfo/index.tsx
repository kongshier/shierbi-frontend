import {DEFAULT_AVATAR_URL, selectAvatarUrl} from '@/constants';
import {getLoginUserUsingGET, updateMyUserUsingPOST} from '@/services/ShierBI/UserManage';
import {ModalForm, ProForm, ProFormText} from '@ant-design/pro-components';
import {Button, Descriptions, Divider, Image, message} from 'antd';
import React, {useEffect, useState} from 'react';
import {ProFormSelect} from "@ant-design/pro-form";

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
      <Divider>用户头像</Divider>
      <Descriptions style={{margin: '20px', marginLeft: '650px'}}>
        <Descriptions.Item>
          <Image
            src={myUser.userAvatar === null ? DEFAULT_AVATAR_URL : myUser.userAvatar}
            width={300}
            height={300}
          />
        </Descriptions.Item>
      </Descriptions>
      <Divider>用户信息</Divider>
      <Descriptions bordered column={4}>
        <Descriptions.Item label="用户名" span={1.5}>
          {myUser.userName}
        </Descriptions.Item>
        <Descriptions.Item label="用户账户" span={1.5}>
          {myUser.userAccount}
        </Descriptions.Item>
        <Descriptions.Item label="用户角色" span={1.5}>
          {myUser.userRole === 'user' ? '普通用户' : '管理员'}
        </Descriptions.Item>
      </Descriptions>

      <ModalForm<API.UserUpdateMyRequest>
        title="修改本用户信息"
        trigger={
          <Button
            type="primary"
            shape="round"
            style={{marginTop: '100px', width: '250px', marginLeft: '650px'}}
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
            label="用户名"
            placeholder="你想修改的账号名称"
            initialValue={myUser.userAccount}
          />
          <ProFormText
            width="md"
            name="userPassword"
            label="用户名"
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
