import React from 'react';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <a href="www.google.com">Dashboard</a>
            </li>
            <li>
                <a href="/">Beneficiary List</a>
            </li>
            <li>
                <a href="/">Manage Reviews</a>
            </li>
            <li>
                <a href="/">Promotions & Banners</a>
            </li>
            <li>
                <a href="/">Categories</a>
            </li>
            <li>
                <a href="/">FAQ</a>
            </li>
        </ul>
    </nav>
    );
};

export default sideDrawer;