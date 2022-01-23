import React from 'react';

const contributorSideDrawer = props => {
    let contributorDrawerClasses = 'contributorSide-drawer';
    if (props.show) {
        contributorDrawerClasses = 'contributorSide-drawer open';
    }
    return (
    <nav className={contributorDrawerClasses}>
        <ul>
            <li>
                <a href="www.google.com">Dashboard</a>
            </li>
            <li>
                <a href="/">Contributor List</a>
            </li>
            <li>
                <a href="/">Abandoned Carts</a>
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

export default contributorSideDrawer;