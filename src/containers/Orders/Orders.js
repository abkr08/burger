import React, { Component } from 'react';

import axios from '../../Axios';
import Order from '../../components/Order/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class Orders extends Component {

    componentDidMount () {
        this.props.onOrdersInit();
    }
    
    render () {
        let output = null;
        this.props.error ? output = <h3>An unknown error occured</h3> : output = <Spinner />;    
        if (this.props.orders) {
            output = this.props.orders.map(order => {
                return <Order key={order.id} ingredients={order.ingredients} price={order.totalPrice} />
            });
        }
        
        return (
           <div>{
                output
           }
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        error: state.orderReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrdersInit: () => dispatch(actionCreators.fetchOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));