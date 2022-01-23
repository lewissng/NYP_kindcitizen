import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const contributorToolbar = props => (
    <header className="contributorToolbar">
        <nav className="contributorToolbar__navigation">
            <div>
                {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
            </div>
            <div className="contributorToolbar__logo">Contributor List</div>
            <div className="contributorSpacer" />
            <div className="contributorToolbar_navigation-items">
                <ul>
                    <li><a href="/">Back to main dashboard</a></li>
                    {/*<li><a href="/">Users</a></li>*/}
                </ul>
            </div>
        </nav>
    </header>
);

export default contributorToolbar;