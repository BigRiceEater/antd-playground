import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PageLayout from './../PageLayout';
import OrderList from './OrderList';
import OrderItem from './OrderItem';

class OrdersPage extends Component {
  state = {};
  render() {
    const { match } = this.props;
    return (
      <PageLayout>
        <Switch>
          <Route path={`${match.url}`} component={OrderList} exact />
          <Route path={`${match.url}/:id`} component={OrderItem} />
        </Switch>
      </PageLayout>
    );
  }
}

export default OrdersPage;
