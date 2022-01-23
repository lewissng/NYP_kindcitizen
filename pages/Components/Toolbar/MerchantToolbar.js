import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const merchantToolbar = props => (
    <header className="merchantToolbar">
        <nav className="merchantToolbar__navigation">
            <div>
                {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
            </div>
            <div className="merchantToolbar__logo">Merchant List</div>
            <div className="merchantSpacer" />
            <div className="merchantToolbar_navigation-items">
                <ul>
                    <li><a href="/">Back to main dashboard</a></li>
                    {/*<li><a href="/">Users</a></li>*/}
                </ul>
            </div>
        </nav>
    </header>
);

export default merchantToolbar;