import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import DataMaker from './../../../util/data-maker';

class OrderList extends Component {
  state = {
    orders: DataMaker.genOrders(10)
  };
  render() {
    const { match } = this.props;
    return (
      <div>
        <List
          size='small'
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
