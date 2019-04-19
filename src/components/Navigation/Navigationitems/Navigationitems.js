import React from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem';

const Navigationitems = (props) => (
    <ul className={classes.NavigationItems}>
        <Navigationitem link="/" exact >Burger Byilder</Navigationitem>
        <Navigationitem link="/orders">Orders</Navigationitem>
        <Navigationitem link="/auth">Authentication</Navigationitem>
    </ul>
);

export default Navigationitems;