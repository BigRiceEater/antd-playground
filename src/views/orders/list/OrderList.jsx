import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Row, Col } from 'antd';
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
              <Row type='flex' justify='space-between'>
                <Col span={8}>
                  <Link to={`${match.url}/${item.id}`}> {item.id}</Link>
                </Col>
                <Col span={4}>{item.status}</Col>
              </Row>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default OrderList;
