import React, { useCallback, useState } from 'react';

import PageHeader from './Components/PageHeader/PageHeader';
import NgoInfoToolbar from './Components/Toolbar/NgoInfoToolbar';
import NgoSideDrawer from './Components/SideDrawer/NgoSideDrawer';

class NgoInfo extends React.Component {

    state = {
        ngoSideDrawerOpen: true
    };
    
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {ngoSideDrawerOpen: !prevState.ngoSideDrawerOpen}
        });
    };
    
    backdropClickHandler = () => {
        this.setState({ngoSideDrawerOpen: true})
    };    

    render () {
        return (
            <div className="ngoInfoPage" style={{height: '100%'}}>
                <PageHeader />
                <NgoInfoToolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <NgoSideDrawer show={this.state.ngoSideDrawerOpen} />

                <main style={{marginTop: '131px'}}>
                    <br></br>
                </main>

                <div className="ngoInfoPageTag">
                    <form className="ngoInfoFormClass">
                        <label> 
                            UEN
                        </label>
                        <input type="text" name="uen" value="placeholder value" />
                    </form>
                    <form className="ngoInfoFormClass">
                        <label> 
                            NGO Organization
                        </label>
                        <input type="text" name="ngoOrg" value="placeholder value" />
                    </form>
                    <form className="ngoInfoFormClass">
                        <label> 
                            Contact Number
                        </label>
                        <input type="yext" name="contactNo" value="placeholder value" />
                    </form>
                    <form className="ngoInfoFormClass">
                        <label> 
                            Contact Person
                        </label>
                        <input type="text" name="contactPerson" value="placeholder value" />
                    </form>
                </div>
            </div>
        )
    }
}

export default NgoInfo;