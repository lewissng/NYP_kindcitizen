import React from 'react';

const merchantSideDrawer = props => {
    let merchantDrawerClasses = 'merchantSide-drawer';
    if (props.show) {
        merchantDrawerClasses = 'merchantSide-drawer open';
    }
    return (
    <nav className={merchantDrawerClasses}>
        <ul>
            <li>
                <a href="www.google.com">Dashboard</a>
            </li>
            <li>
                <a href="/">Merchant List</a>
            </li>
            <li>
                <a href="/">Sales & Invoices</a>
            </li>
            <li>
                <a href="/">Merchant Setup</a>
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

export default merchantSideDrawer;