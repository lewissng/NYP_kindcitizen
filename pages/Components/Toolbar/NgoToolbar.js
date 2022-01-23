import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const ngoToolbar = props => (
    <header className="ngoToolbar">
        <nav className="ngoToolbar__navigation">
            <div>
                {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
            </div>
            <div className="ngoToolbar__logo">NGO List</div>
            <div className="ngoSpacer" />
            <div className="ngoToolbar_navigation-items">
                <ul>
                    <li><a href="https://kindcitizendev.myshopify.com/admin/apps/kind_citizen_admin">Redirect testing</a></li>
                    {/*<li><a href="/">Users</a></li>*/}
                </ul>
            </div>
        </nav>
    </header>
);

export default ngoToolbar;