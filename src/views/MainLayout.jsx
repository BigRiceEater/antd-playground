import React, { Component } from 'react';
import { Layout } from 'antd';
import MainMenu from './../components/MainMenu';

const { Sider, Content } = Layout;

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Sider>
          <MainMenu />
        </Sider>
        <Content>
          <div style={{ backgroundColor: 'lightcoral' }}> Add Routes here </div>
        </Content>
      </Layout>
    );
  }
}

export default MainLayout;
