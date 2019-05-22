import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class PageLayout extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb>
              <Link to='/orders'>Orders</Link>
            </Breadcrumb>
          </Breadcrumb>
        </Header>
        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}

export default PageLayout;
