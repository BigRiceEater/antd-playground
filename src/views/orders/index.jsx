import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PageLayout from './../PageLayout';
import OrderList from './OrderList';
import OrderTableList from './OrderTableList';
import OrderItem from './OrderItem';

class OrdersPage extends Component {
  render() {
    const { match, location } = this.props;

    return (
      <PageLayout location={location}>
        <Switch>
          <Route path={`${match.url}`} component={OrderTableList} exact />
          <Route path={`${match.url}/:id`} component={OrderItem} />
        </Switch>
      </PageLayout>
    );
  }
}

export default OrdersPage;
