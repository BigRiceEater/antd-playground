import React, { Component } from 'react';
import { Layout } from 'antd';
import MainMenu from './../components/MainMenu';

const { Sider, Content } = Layout;

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <MainMenu />
        </Sider>
        <Layout>
          <Content>
            <div style={{ backgroundColor: 'lightcoral' }}>Add Routes here</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
