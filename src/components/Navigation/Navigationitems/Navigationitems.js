import React from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem';

const Navigationitems = (props) => (
    <ul className={classes.NavigationItems}>
        <Navigationitem link="/" active>Burger Byilder</Navigationitem>
        <Navigationitem link="/">Checkout</Navigationitem>
    </ul>
);

export default Navigationitems;