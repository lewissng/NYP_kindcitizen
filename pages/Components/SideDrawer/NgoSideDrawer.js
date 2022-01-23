import React from 'react';

const ngoSideDrawer = props => {
    let ngoDrawerClasses = 'ngoSide-drawer';
    if (props.show) {
        ngoDrawerClasses = 'ngoSide-drawer open';
    }
    return (
    <nav className={ngoDrawerClasses}>
        <ul>
            <li>
                <a href="www.google.com">Dashboard</a>
            </li>
            <li>
                <a href="/">NGO List</a>
            </li>
        </ul>
    </nav>
    );
};

export default ngoSideDrawer;