import { Card, InputNumber, message, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';

import { getChartFrequencyUsingGET } from '@/services/ShierBI/aiFrequencyController';
import { AntDesignOutlined } from '@ant-design/icons';
import { Statistic } from '@ant-design/pro-components';
import Avatar from 'antd/es/avatar/avatar';

import { addOrderUsingPOST } from '@/services/ShierBI/frequencyOrderController';
import { Button } from 'antd/es/radio';
import Col from 'antd/lib/grid/col';

const MyInformation: React.FC = () => {
  const initsearchParams = {
    current: 1,
    pageSize: 6,
    sortField: 'createTime',
    sortOrder: 'desc',
  };
  //加...是创建一个新的对象把值赋给新对象，不会造成对象污染
  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({ ...initsearchParams });
  const [frequency, setFrequency] = useState<API.AiFrequencyVO>();
  const [number, setNumber] = useState<number>();

  const loadData = async () => {
    try {
      const res = await getChartFrequencyUsingGET();
      console.log('获取图表调用信息', res.data);
      if (res.data) {
        setFrequency(res.data);
      }
    } catch (e: any) {
      message.error('获取数据失败' + e.error);
    }
  };

  //监听  当searchParams改变再去触发这个函数
  useEffect(() => {
    loadData();
  }, [searchParams]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (value: number) => {
    console.log('changed', value);
    setNumber(value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    console.log(number);
    const res = await addOrderUsingPOST({ total: number });
    if (res.data) {
      message.success('生成订单成功，请在我的订单中付款');
    } else {
      message.error('生成订单失败');
    }
    loadData();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // @ts-ignore
  return (
    <div className="my-chart">
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
      />
      <div style={{ marginBottom: 16 }} />
      <Card>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="已使用智能分析次数" value={frequency?.totalFrequency} />
          </Col>
          <Col span={12}>
            <Statistic title="剩余智能分析次数" value={frequency?.remainFrequency} />
            <Button style={{ marginTop: 16 }} type="primary" onClick={showModal}>
              充值
            </Button>
            <Modal
              title="请输入充值次数"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <InputNumber min={1} max={1000} defaultValue={1} onChange={onChange} />
            </Modal>
          </Col>
        </Row>
      </Card>
      <div style={{ marginBottom: 16 }} />
    </div>
  );
};
export default MyInformation;
