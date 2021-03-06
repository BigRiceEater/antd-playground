import React, { Component } from 'react';
import { Table } from 'antd';
import DataMaker from './../../../util/data-maker';

class OrderTableList extends Component {
  columns = [
    { title: 'Order Number', dataIndex: 'id' },
    { title: 'Status', dataIndex: 'status' }
  ];

  state = {
    orders: DataMaker.genOrders(10).map(o => ({ ...o, key: o.id }))
  };

  render() {
    const { match, history } = this.props;
    return (
      <Table
        size='small'
        columns={this.columns}
        dataSource={this.state.orders}
        onRow={(record, rowIndex) => ({
          onClick: event => history.push(`${match.url}/${record.id}`)
        })}
      />
    );
  }
}

export default OrderTableList;
