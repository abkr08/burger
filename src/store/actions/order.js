import * as actionTypes from './actions';
import axios from '../../Axios';

export const purchaseInitialized = () => {
    return {
        type: actionTypes.PURCHASE_INIT,
    }
}
export const initPurchase = ( data ) => {
    return dispatch => {
        axios.post('/orders.json', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const getOrders = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        orders: orders
    }
}

export const fetchOrdersFailed = () => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED
    }
}

export const fetchOrders = () => {
    return dispatch => {
        axios.get('/orders.json')
            .then(res => { 
               const fetchedOrders = [];
               for (let key in res.data){
                   fetchedOrders.push({
                       ...res.data[key], id: key
                   });
               }
               dispatch(getOrders(fetchedOrders));
            })
            .catch(err => {
                    dispatch(fetchOrdersFailed());
                
            });
    }
}