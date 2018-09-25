import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem clicked={props.clicked} link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem clicked={props.clicked} link='/orders'>Orders</NavigationItem>
    </ul>
);

export default navigationItems;