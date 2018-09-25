import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients)
          .map(ing => {
              return <li key={ing}>
              <span style={{textTransform: 'capitalize'}}>
              {ing}:</span> {props.ingredients[ing]}</li>
          })
    return (
        <Aux>
            <h2>Your Order</h2>
            <p>A delicious burger with the following ingredients:</p>
            {ingredientsSummary}
            <p>Continue to Checkout?</p>
            <Button clicked = {props.cancelPurchase} btnType='Danger'>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;