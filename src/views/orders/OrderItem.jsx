import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import OrderStatusCard from './OrderStatusCard';

class OrderItem extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Row>
          <Col span={20} offset={2}>
            <OrderStatusCard />
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default OrderItem;
