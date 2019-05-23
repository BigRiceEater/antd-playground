import React, { Component } from 'react';
import { Card } from 'antd';

import OrderList from './OrderList';
import OrderTable from './OrderTable';

const tabList = [
  { key: 'list', tab: 'List View' },
  { key: 'table', tab: 'Table View' }
];

class OrderListTabCard extends Component {
  state = { key: 'list' };

  contentList = {
    list: <OrderList match={this.props.match} />,
    table: <OrderTable match={this.props.match} history={this.props.history} />
  };

  handleTabChange = key => {
    this.setState({ key });
  };

  render() {
    return (
      <Card
        type='inner'
        tabList={tabList}
        onTabChange={this.handleTabChange}
        activeTabKey={this.state.key}
      >
        {this.contentList[this.state.key]}
      </Card>
    );
  }
}

export default OrderListTabCard;
