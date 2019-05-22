import React, { Component } from 'react';
import { Layout } from 'antd';

import MainBreadcrumb from '../components/MainBreadcrumb';

const { Content } = Layout;

class PageLayout extends Component {
  state = {};
  render() {
    return (
      <Layout style={{ padding: '32px 64px' }}>
        <Content>
          <MainBreadcrumb />
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default PageLayout;
