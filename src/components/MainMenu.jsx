import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import MeMenuItem from './MeMenuItem';

const SubMenu = Menu.SubMenu;

class MainMenu extends Component {
  state = {
    menuGroups: [
      {
        label: 'Frontend Settings',
        items: [
          { icon: 'edit', label: 'Custom Pages', to: '#' },
          { icon: 'shop', label: 'Your Store', to: '#' }
        ]
      },
      {
        label: 'Order Details',
        items: [
          { icon: 'user', label: 'Customers and their Profile', to: '#' },
          { icon: 'audit', label: 'Orders', to: '/orders' },
          { icon: 'red-envelope', label: 'Invoices', to: '#' },
          { icon: 'car', label: 'Delivery Notes', to: '#' }
        ]
      }
    ]
  };

  getOpenedSubMenus = () => this.state.menuGroups.map(group => group.label);

  handleClick = e => {
    console.log('click ', e);
  };

  createMenuItem = ({ label, icon, to }) => (
    <Menu.Item key={label}>
      <Link to={to}>
        <Icon type={icon} /> {label}
      </Link>
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
        inlineIndent={15}
      >
        {this.createMenuItem({ icon: 'user', label: 'ME', to: '/' })}

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
