import React, { Component } from 'react';
import { Row, Col } from 'antd';

import OrderStatusCard from './OrderStatusCard';

class OrderItem extends Component {
  render() {
    const { match } = this.props;
    const data = { orderId: match.params.id };
    return (
      <div>
        <Row>
          <Col span={24}>
            <OrderStatusCard data={data} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderItem;
