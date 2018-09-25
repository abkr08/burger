import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/ContactData/ContactData';


class Checkout extends Component {
   

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace(`${process.env.PUBLIC_URL}/checkout/contact-form`);
    }
    render () {
        return (
            <div>
               <CheckoutSummary 
               checkoutCancelled={this.checkoutCancelledHandler}
               checkoutContinued={this.checkoutContinuedHandler}
               ingredients={this.props.ingredients} />
            <Route path={this.props.match.path + '/contact-form'} component={ContactData} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    }
} 
export default connect(mapStateToProps)(Checkout);