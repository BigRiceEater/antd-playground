import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PageLayout from './../PageLayout';
import OrderListTabCard from './list/OrderListTabCard';
import OrderItem from './OrderItem';

class OrdersPage extends Component {
  render() {
    const { match, location } = this.props;

    return (
      <PageLayout location={location}>
        <Switch>
          <Route path={`${match.url}`} component={OrderListTabCard} exact />
          <Route path={`${match.url}/:id`} component={OrderItem} />
        </Switch>
      </PageLayout>
    );
  }
}

export default OrdersPage;
