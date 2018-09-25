import React from 'react';
import classes from './ToggleSideDrawer.css';

const toggleSideDrawer = ( props ) => (
    <div className = {classes.ToggleSideDrawer}onClick = {props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
)

export default toggleSideDrawer;