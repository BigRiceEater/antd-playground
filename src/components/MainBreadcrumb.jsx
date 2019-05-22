import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

class MainBreadcrumb extends Component {
  state = {};
  render() {
    return (
      <Breadcrumb separator='>'>
        <Breadcrumb.Item>
          <Link to='/'>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb>
          <Link to='/orders'>Orders</Link>
        </Breadcrumb>
      </Breadcrumb>
    );
  }
}

export default MainBreadcrumb;
