import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
];
const buildControls = ( props ) => (
    
    <div className = {classes.BuildControls}>
    <p><strong>Current Price: ${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl 
            addIngredient = {() => props.addIngredient(ctrl.type)}
            removeIngredient = {() => props.removeIngredient(ctrl.type)}
            key = {ctrl.type}
            label = {ctrl.label}
            disabled = {props.disabled[ctrl.type]}
            />;
        })
        }
        <button className = {classes.OrderButton}
        disabled = {!props.purchasable}
        onClick = {props.showModal}
        >CHECKOUT!</button>
    </div>
);

export default buildControls