import { payCodeUsingPOST } from '@/services/ShierBI/aliPayController';
import { getOrderListUsingGET } from '@/services/ShierBI/frequencyOrderController';
import { ProColumns } from '@ant-design/pro-components';
import { Button, Image, message, Table, Tag } from 'antd';
import Modal from 'antd/es/modal/Modal';
import React, { useEffect, useState } from 'react';

const MyOrder: React.FC = () => {
  const [orderList, setOrderList] = useState<API.AiFrequencyOrderVO[]>();
  const [er, setEr] = useState<string>();

  const renderStatus = (value: number) => {
    let color = 'default';
    let status = '';
    if (value === 0) {
      color = 'warning';
      status = '待支付';
    }
    if (value === 1) {
      color = 'success';
      status = '支付完成';
    }
    if (value === 2) {
      color = 'error';
      status = '无效订单';
    }
    return <Tag color={color}>{status}</Tag>;
  };

  const columns: ProColumns<API.AiFrequencyOrderVO>[] = [
    {
      title: '订单号',
      width: 300,
      dataIndex: 'id',
      key: 'name',
      fixed: 'left',
    },
    { title: '购买次数', width: 150, dataIndex: 'purchaseQuantity',key:'purchaseQuantity' },
    { title: '单价', width: 150, dataIndex: 'price',key:'price'},
    { title: '总价', width: 150, dataIndex: 'totalAmount',key:'totalAmount' },
    {
      title: '订单状态',
      dataIndex: 'orderStatus',
      // 枚举  @ts-ignore
      render: renderStatus,
      key: 'orderStatus'
    },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },

    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (value, record, index) => (
        <Button type="primary" onClick={() => root(record.id)}>
          付款
        </Button>
      ),
    },
  ];

  const root = async (id: string) => {
    setOpen(true);
    const res = await payCodeUsingPOST({ orderId: id });
    console.log(res);
    setEr(res.data);
  };

  const loaData = async () => {
    const res = await getOrderListUsingGET();
    if (res.data) {
      console.log(res);
      setOrderList(res?.data);
    } else {
      message.error('获取失败');
    }
  };
  useEffect(() => {
    loaData();
  }, ['']);

  const data = orderList;

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('取消支付');
    setOpen(false);
  };

  return (
    <div className="my-order" style={{ margin: '50px' }}>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      <Modal
        title="请使用支付宝扫码付款"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Image width={200} src={er}></Image>
      </Modal>
    </div>
  );
};
export default MyOrder;
