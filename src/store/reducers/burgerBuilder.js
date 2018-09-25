import * as actionTypes from "../actions/actions";

const initialState = {
    ingredients: null, 
    totalPrice: 4,
    error: false
}
const INGREDIENTS_PRICE = {
    salad: 0.2,
    cheese: 0.4,
    meat: 1.4,
    bacon: 1.2
};

const burgerReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false
            };
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state, 
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingr]: state.ingredients[action.payload.ingr] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.payload.ingr]
                
            }
        case actionTypes.REMOVE_INGREDIENT:
        return {
            ...state, 
            ingredients: {
                ...state.ingredients,
                [action.payload.ingr]: state.ingredients[action.payload.ingr] - 1
            },
            totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.payload.ingr]
        }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
        return state;
    }
    
} 

export default burgerReducer;