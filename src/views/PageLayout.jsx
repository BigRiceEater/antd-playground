import React, { Component } from 'react';
import { Row, Col } from 'antd';

import MainBreadcrumb from '../components/MainBreadcrumb';
import routeMapper from './routeMap';

class PageLayout extends Component {
  render() {
    const { location } = this.props;

    const paths = location.pathname.split('/').filter(p => p !== '');

    const crumbs = paths.reduce((acc, path) => {
      const lastPath = acc.slice(-1)[0];
      if (!lastPath)
        return [{ url: `/${path}`, label: routeMapper[path] || path }];

      const nextCrumb = {
        url: `${lastPath.url}/${path}/`,
        label: routeMapper[path] || path
      };
      return [...acc, nextCrumb];
    }, []);

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
