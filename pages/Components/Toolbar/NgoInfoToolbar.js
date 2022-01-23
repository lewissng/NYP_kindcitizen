import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const ngoInfoToolbar = props => (
    <header className="ngoToolbar">
        <nav className="ngoToolbar__navigation">
            <div>
                {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
            </div>
            <div className="ngoToolbar__logo">User Account</div>
            <div className="ngoSpacer" />
            <div className="ngoToolbar_navigation-items">
                <ul>
                    <li><a href="/">Back to main dashboard</a></li>
                    {/*<li><a href="/">Users</a></li>*/}
                </ul>
            </div>
        </nav>
    </header>
);

export default ngoInfoToolbar;