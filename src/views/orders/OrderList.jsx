import React, { Component } from 'react';
import { Layout } from 'antd';

import OrderStatusCard from './OrderStatusCard';
class OrderList extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: '100px' }}>
        <OrderStatusCard />
      </div>
    );
  }
}

export default OrderList;
