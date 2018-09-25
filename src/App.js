import React, { Component } from 'react';
import { Route } from 'react-router-dom';



import Layout from './components/Layout/Layout'; 
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <Layout> 
       
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={BurgerBuilder} />
        <Route path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout} />
        <Route path={`${process.env.PUBLIC_URL}/orders`} component={Orders} />
      
      </Layout>
    )
  }
}

export default App;
