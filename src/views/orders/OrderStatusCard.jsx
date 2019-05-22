import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';

class OrderStatusCard extends Component {
  state = {};

  controls = () => <Button type='danger'>delete</Button>;

  render() {
    return (
      <Card title='Status' type='inner' extra={this.controls()}>
        <Row>
          <Col span={4}>Status :</Col>
          <Col>Completed</Col>
        </Row>
        <Row>
          <Col span={4}>Order Number :</Col>
          <Col>Completed</Col>
        </Row>
      </Card>
    );
  }
}

export default OrderStatusCard;
