import React from 'react';

const pageHeader = props => (
    <header className="pageHeader">
        <nav className="header__navigation">
            <img src="../Images/kindcitizenlogo.jpg" alt="Logo" />
            <div className="headerSpacer" />
            <div className="pageHeaderTitle">
                <ul>
                    <li><a href="/">Mainsite test</a></li>
                    <li><a href="/">Kind Citizen</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default pageHeader;