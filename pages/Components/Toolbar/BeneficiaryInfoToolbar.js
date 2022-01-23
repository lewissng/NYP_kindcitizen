import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const beneficiaryInfoToolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
            </div>
            <div className="toolbar__logo">User Account</div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Back to main dashboard</a></li>
                    {/*<li><a href="/">Users</a></li>*/}
                </ul>
            </div>
        </nav>
    </header>
);

export default beneficiaryInfoToolbar;