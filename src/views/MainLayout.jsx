import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import MainMenu from './../components/MainMenu';
import Orders from './orders';

const { Sider, Content } = Layout;

const Home = () => <div>Home</div>;

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={256}>
            <MainMenu />
          </Sider>
          <Layout>
            <Content>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/orders' component={Orders} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default MainLayout;
