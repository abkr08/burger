import * as actionTypes from '../actions/actions';

const initialState = {
    orders: [],
    error: false
}

const orderReducer = (state = initialState, action ) => {
    switch (action.type){
        case actionTypes.FETCH_ORDERS:
            return {
                ...state, 
                orders: action.orders,
                error: false
            }
        case actionTypes.FETCH_ORDERS_FAILED: 
            return {
                ...state,
                error: true
            }
        default: 
            return state;
    }
}

export default orderReducer;