import React, { useCallback, useState } from 'react';

import PageHeader from './Components/PageHeader/PageHeader';
import MerchantInfoToolbar from './Components/Toolbar/MerchantInfoToolbar';
import MerchantSideDrawer from './Components/SideDrawer/MerchantSideDrawer';

class MerchantInfo extends React.Component {

    state = {
        merchantSideDrawerOpen: true
    };
    
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {merchantSideDrawerOpen: !prevState.merchantSideDrawerOpen}
        });
    };
    
    backdropClickHandler = () => {
        this.setState({merchantSideDrawerOpen: true})
    };    

    render () {
        return (
            <div className="merchantInfoPage" style={{height: '100%'}}>
                <PageHeader />
                <MerchantInfoToolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <MerchantSideDrawer show={this.state.merchantSideDrawerOpen} />

                <main style={{marginTop: '131px'}}>
                    <br></br>
                </main>

                <div className="merchantInfoPageTag">
                    <form className="merchantInfoFormClass">
                        <label> 
                            Username
                        </label>
                        <input type="text" name="uName" value="placeholder value" />
                    </form>
                    <form className="merchantInfoFormClass">
                        <label> 
                            Name
                        </label>
                        <input type="text" name="name" value="placeholder value" />
                    </form>
                    <form className="merchantInfoFormClass">
                        <label> 
                            Business Name
                        </label>
                        <input type="text" name="bName" value="placeholder value" />
                    </form>
                    <form className="merchantInfoFormClass">
                        <label> 
                            E-Mail
                        </label>
                        <input type="email" name="email" value="placeholder value" />
                    </form>
                </div>
            </div>
        )
    }
}

export default MerchantInfo;