import React from 'react';
import { Link } from 'react-router-dom';

import burgerLogo from '../../assets/images/Logo.png';
import classes from './Logo.css'; 

const logo = ( props ) => (
    <Link to='/'>
    <div className = {classes.Logo}>
        <img src = {burgerLogo} alt='myBurgerLogo'/>
    </div>
    </Link>
);

export default logo;