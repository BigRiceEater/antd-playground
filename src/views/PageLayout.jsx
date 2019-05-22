import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

import MainBreadcrumb from '../components/MainBreadcrumb';

class PageLayout extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: '32px 64px' }}>
        <Row style={{ marginBottom: '32px' }}>
          <Col span={24}>
            <MainBreadcrumb />
          </Col>
        </Row>
        <Row>
          <Col span={24}>{this.props.children}</Col>
        </Row>
      </div>
    );
  }
}

export default PageLayout;
