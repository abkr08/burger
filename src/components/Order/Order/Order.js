import React from 'react';

import classes from './Order.css';

const order = ( props ) => {
    const ingredients = [];

    for (let ing in props.ingredients){
        ingredients.push({name: ing, amount: props.ingredients[ing]});
    }

    const ingredientsOutput = ingredients.map(ing => {
        return (
        <span key={ing.name} style={{
            textTransform: 'capitalize',
            border: '1px solid #ccc',
            margin: '0 5px',
            padding: '6px',
            display: 'inline-block'
        }}>
        {ing.name}({ing.amount})
        </span>
    )
    });
   
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p><strong>${props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;