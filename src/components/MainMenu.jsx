import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { groupPatternsByBaseDirectory } from 'fast-glob/out/managers/tasks';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
          { icon: 'user', label: 'Customers' },
          { icon: 'audit', label: 'Orders' },
          { icon: 'red-envelope', label: 'Invoices' },
          { icon: 'car', label: 'Delivery Notes' }
        ]
      }
    ]
  };

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
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
      >
        {this.state.menuGroups.map(group => (
          <MenuItemGroup key={group.label} title={group.label}>
            {group.items.map(item => this.createMenuItem(item))}
          </MenuItemGroup>
        ))}
      </Menu>
    );
  }
}

export default MainMenu;
