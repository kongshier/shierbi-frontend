// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addOrder POST /api/order/addorder */
export async function addOrderUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addOrderUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/order/addorder', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getOrderList GET /api/order/orderlist */
export async function getOrderListUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListAiFrequencyOrderVO_>('/api/order/orderlist', {
    method: 'GET',
    ...(options || {}),
  });
}
