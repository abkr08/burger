import React from 'react';
import { Link } from 'react-router-dom';

import burgerLogo from '../../assets/images/Logo.png';
import classes from './Logo.css'; 

const logo = ( props ) => (
    <Link to={`${process.env.PUBLIC_URL}/`}>
    <div className = {classes.Logo}>
        <img src = {burgerLogo} alt='myBurgerLogo'/>
    </div>
    </Link>
);

export default logo;