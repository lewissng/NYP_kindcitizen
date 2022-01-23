import React from 'react';

const contributorPageHeader = props => (
    <header className="contributorPageHeader">
        <nav className="contributorHeader__navigation">
            <img src="../Images/kindcitizenlogo.jpg" alt="Logo" />
            <div className="contributorHeaderSpacer" />
            <div className="contributorPageHeaderTitle">
                <ul>
                    <li><a href="/">Mainsite</a></li>
                    <li><a href="/">Kind Citizen</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default contributorPageHeader;