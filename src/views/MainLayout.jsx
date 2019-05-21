import React, { Component } from 'react';
import { Layout } from 'antd';

const { Sider, Content } = Layout;

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Sider>
          <div style={{ backgroundColor: 'lightgreen' }} />
        </Sider>
        <Content>
          <div style={{ backgroundColor: 'lightcoral' }}> Add Routes here </div>
        </Content>
      </Layout>
    );
  }
}

export default MainLayout;
