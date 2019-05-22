import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Crumb = Breadcrumb.Item;

class MainBreadcrumb extends Component {
  state = {};
  render() {
    return (
      <Breadcrumb separator='>'>
        <Crumb>
          <Link to='/'>Home</Link>
        </Crumb>
        <Crumb>
          <Link to='/orders'>Orders</Link>
        </Crumb>
      </Breadcrumb>
    );
  }
}

export default MainBreadcrumb;
