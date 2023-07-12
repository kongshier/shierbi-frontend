import { DEFAULT_AVATAR_URL, selectAvatarUrl, selectGender } from '@/constants';
import {
  getLoginUserUsingGET,
  getUserVOByIdUsingGET,
  updateByProfileUserUsingPOST,
  updateMyInfoUsingPOST
} from '@/services/ShierBI/UserController';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { ProFormSelect } from '@ant-design/pro-form';
import {Button, Col, Descriptions, Divider, Image, message, Row, Upload, UploadFile, UploadProps} from 'antd';
import React, { useEffect, useState } from 'react';
import {useModel} from "@@/exports";
import {RcFile, UploadChangeParam} from "antd/es/upload";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const avatarStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
};
const buttonStyle: React.CSSProperties = {
  marginLeft: '30px',
};

/**
 * 上传前校验
 * @param file 文件
 */
const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
  if (!isJpgOrPng) {
    message.error('仅允许上传 JPG/PNG 格式的文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('文件最大上传大小为 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UserInfo: React.FC = () => {
  const [myUser, setMyUser] = useState({
    userName: '',
    userAccount: '',
    userAvatar: '',
    userPassword: '',
    userRole: 'user',
    gender: '',
    phone: '',
    email: '',
    userStatus: '0',
    userCode: '',
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

  const [data, setData] = useState<API.UserVO>({});
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const { initialState, setInitialState } = useModel('@@initialState');

  // 获取用户信息
  const getUserInfo = async (id: any) => {
    return getUserVOByIdUsingGET({ id }).then((res:any) => {
      if (res.data) {
        setInitialState((s: any) => ({ ...s, loginUser: res.data }));
        setData(res.data);
        setImageUrl(res.data.userAvatar);
      }
    });
  };

  useEffect(() => {
    try {
      getUserInfo(initialState?.currentUser?.id).then(r => {});
      // console.log("用户信息",initialState?.currentUser.userAvatar)
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  // 更新用户头像
  const updateUserAvatar = async (id:any,userAvatar:any) => {
    // 更新用户头像
    console.log(id ,userAvatar)
    const res = await updateByProfileUserUsingPOST({
      id:id,
      userAvatar:userAvatar
    });
    console.log('头像状态' + res.code);
    if (res.code !== 0) {
      message.error(`更新用户头像失败`);
    } else {
      getUserInfo(id);
    }
  };

  /**
   * 上传图片
   * @param info
   */
  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    console.log('上传状态',info.file.status)
    if (info.file.status === 'done') {
      if (info.file.response.code === 0) {
        message.success(`上传成功`);
        const id = initialState?.currentUser?.id as number;
        const userAvatar = info.file.response.data;
        console.log("头像url",info.file)
        setLoading(false);
        setImageUrl(userAvatar);
        updateUserAvatar(id, userAvatar);
      }
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Divider style={{ fontWeight: 'bold', color: 'blue' }}>用户头像</Divider>
      <Descriptions style={{ margin: '50px' }}>
        <Row>
          <Col style={avatarStyle}>
            <Upload
              name="file"
              listType="picture-circle"
              showUploadList={false}
              action="http://127.0.0.1:8103/api/oss/upload"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={data?.userAvatar}
                  alt="userAvatar"
                  style={{ width: '200%', borderRadius: '50%',height:"200%"}}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col>
        </Row>
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
        <Descriptions.Item style={{ textAlign: 'center' }} label="性别：">
          {myUser.gender}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="用户账户：">
          {myUser.userAccount}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="我的身份：">
          {myUser.userRole === 'user' ? '普通用户' : '管理员'}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="我的编号：">
          {myUser.userCode}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="手机号码：">
          {myUser.phone === null ? '尚未填写手机号码！' : myUser.phone}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="我的邮箱：">
          {myUser.email === null ? '尚未填写邮箱！' : myUser.email}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center', color: '#1bf113' }} label="我的状态：">
          {/*@ts-ignore*/}
          {myUser.userStatus === 0 ? '正常在线' : '账号异常'}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="用户创建时间：">
          {myUser.createTime}
        </Descriptions.Item>
        <Descriptions.Item style={{ textAlign: 'center' }} label="用户更新时间：">
          {myUser.updateTime}
        </Descriptions.Item>
      </Descriptions>

      <ModalForm<API.UserUpdateMyRequest>
        title="修改我的信息"
        trigger={
          <Button
            type="primary"
            shape="round"
            style={{ marginTop: '50px', width: '250px', marginLeft: '650px' }}
          >
            修改我的信息
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
          const isModify = await updateMyInfoUsingPOST(values);
          if (isModify) {
            message.success('修改成功！');
            // 刷新用户信息表单
            location.reload();
            return true;
          }else {
            message.error("修改失败！")
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
            rules={[
              {
                required: true,
                message: '请输入选择用户头像!',
              },
            ]}
          />
          <ProFormText
            width="md"
            name="userAccount"
            label="账号名称"
            placeholder="你想修改的账号名称"
            initialValue={myUser.userAccount}
            rules={[
              {
                required: true,
                message: '请输入选择用户头像!',
              },
            ]}
          />
          <ProFormText
            width="md"
            name="userPassword"
            label="修改密码"
            placeholder="修改修改后的密码"
            initialValue={myUser.userPassword}
            rules={[
              {
                required: true,
                message: '请输入选择用户头像!',
              },
            ]}
          />
          <ProFormText
            width="md"
            name="phone"
            label="修改手机号码"
            placeholder="修改手机号码密码"
            initialValue={myUser.phone}
          />
          <ProFormSelect
            width="md"
            name="gender"
            label="修改性别"
            placeholder="修改我的性别"
            options={selectGender}
            initialValue={myUser.gender}
          />
          <ProFormText
            width="md"
            name="email"
            label="修改邮箱"
            placeholder="修改修改后的邮箱"
            initialValue={myUser.email}
          />
          <ProFormText
            width="md"
            name="userCode"
            label="修改我的编码"
            placeholder="输入修改后的编码"
            initialValue={myUser.userCode}
          />
          <ProFormSelect
            name="userAvatar"
            fieldProps={{
              size: 'large',
            }}
            label="修改头像"
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
