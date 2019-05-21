import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import MeMenuItem from './MeMenuItem';

const SubMenu = Menu.SubMenu;

class MainMenu extends Component {
  state = {
    menuGroups: [
      {
        label: 'Frontend Settings',
        items: [
          { icon: 'edit', label: 'Custom Pages' },
          { icon: 'shop', label: 'Your Store' }
        ]
      },
      {
        label: 'Order Details',
        items: [
          { icon: 'user', label: 'Customers and their Profile' },
          { icon: 'audit', label: 'Orders' },
          { icon: 'red-envelope', label: 'Invoices' },
          { icon: 'car', label: 'Delivery Notes' }
        ]
      }
    ]
  };

  getOpenedSubMenus = () => this.state.menuGroups.map(group => group.label);

  handleClick = e => {
    console.log('click ', e);
  };

  createMenuItem = ({ label, icon }) => (
    <Menu.Item key={label}>
      <span>
        <Icon type={icon} /> {label}
      </span>
    </Menu.Item>
  );

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={this.getOpenedSubMenus()}
        mode='inline'
        theme='dark'
      >
        {this.createMenuItem({ icon: 'user', label: 'ME' })}

        {this.state.menuGroups.map(group => (
          <SubMenu key={group.label} title={group.label}>
            {group.items.map(item => this.createMenuItem(item))}
          </SubMenu>
        ))}
      </Menu>
    );
  }
}

export default MainMenu;
