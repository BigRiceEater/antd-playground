import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Crumb = Breadcrumb.Item;

class MainBreadcrumb extends Component {
  render() {
    const { crumbs } = this.props;
    return (
      <Breadcrumb separator='>'>
        {crumbs.map(c => (
          <Crumb key={c.label}>
            <Link to={c.url}>{c.label}</Link>
          </Crumb>
        ))}
      </Breadcrumb>
    );
  }
}

export default MainBreadcrumb;
