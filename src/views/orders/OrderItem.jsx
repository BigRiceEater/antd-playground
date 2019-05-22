import React, { Component } from 'react';
import { Row, Col } from 'antd';

import OrderStatusCard from './OrderStatusCard';

class OrderItem extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <OrderStatusCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderItem;
