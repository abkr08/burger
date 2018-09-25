import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';


import Layout from './components/Layout/Layout'; 
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <Layout> 
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Redirect from='/burger' to='/' />
      </Layout>
    )
  }
}

export default App;
