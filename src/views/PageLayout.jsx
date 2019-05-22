import React, { Component } from 'react';
import { Row, Col } from 'antd';

import MainBreadcrumb from '../components/MainBreadcrumb';
import CrumbMaker from './../util/crumb-maker';

class PageLayout extends Component {
  render() {
    const { location } = this.props;
    const crumbs = CrumbMaker.fromRelativePath(location.pathname);

    return (
      <div style={{ padding: '32px 64px' }}>
        <Row style={{ marginBottom: '32px' }}>
          <Col span={24}>
            <MainBreadcrumb crumbs={crumbs} />
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
