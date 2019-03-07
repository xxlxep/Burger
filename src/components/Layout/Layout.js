import React from 'react';
import Aux from '../../Hoc/iaux';
import classes from './Layout.css';

const Layout = ( props ) => {
    return (
        <Aux>
            <div>
                Toolbar, SideDrawer, BaqckDrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
     
    );
};

export default Layout;