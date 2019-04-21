import React from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem';

const Navigationitems = (props) => (
    <ul className={classes.NavigationItems}>
        <Navigationitem link="/" exact >Burger Byilder</Navigationitem>
        { props.isAuthenticated ? 
            <Navigationitem link="/orders">Orders</Navigationitem>
            : null }
        { !props.isAuthenticated 
            ? <Navigationitem link="/auth">Authentication</Navigationitem>
            : <Navigationitem link="/logout">Logout</Navigationitem>}
    </ul>
);

export default Navigationitems;