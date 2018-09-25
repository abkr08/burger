import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleSideDrawer from './../ToggleSideDrawer/ToggleSideDrawer'

const toolbar = ( props ) => (
   <header className={classes.Toolbar}>
        <ToggleSideDrawer toggle={props.toggle} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;