import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import uuid from 'uuid/v4';

class OrderList extends Component {
  state = {
    orders: new Array(10).fill(0).map(i => ({ id: uuid() }))
  };
  render() {
    const { match } = this.props;
    return (
      <div>
        <List
          header='Orders'
          bordered
          dataSource={this.state.orders}
          renderItem={item => (
            <List.Item>
              <Link to={`${match.url}/${item.id}`}> {item.id}</Link>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default OrderList;
