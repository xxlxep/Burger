import React from 'react';
import burgerLogo from '../../assets/images/132 burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} />
    </div>
);

export default Logo;