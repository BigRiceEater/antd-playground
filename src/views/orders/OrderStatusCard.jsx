import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';

class OrderStatusCard extends Component {
  controls = () => <Button type='danger'>delete</Button>;

  render() {
    const {
      data: { orderId }
    } = this.props;

    return (
      <Card title='Status' type='inner' extra={this.controls()}>
        <Row>
          <Col span={4}>Status :</Col>
          <Col>Completed</Col>
        </Row>
        <Row>
          <Col span={4}>Order Number :</Col>
          <Col>{orderId}</Col>
        </Row>
      </Card>
    );
  }
}

export default OrderStatusCard;
