import * as actionTypes from './actions';
import axios from '../../Axios';

export const setIngredients = (ing) => {
    return {
       type: actionTypes.SET_INGREDIENTS,
       ingredients: ing
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const getIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data));
            })
            .catch(err => {
                dispatch(fetchIngredientsFailed())
            });
    }
}

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT, payload: {ingr: name}
    }
}
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: {ingr: name}
    }
}