import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class MeMenuItem extends Component {
  render() {
    return (
      <Menu.Item key='me'>
        <Icon type='user' />
        ME
      </Menu.Item>
    );
  }
}

export default MeMenuItem;
