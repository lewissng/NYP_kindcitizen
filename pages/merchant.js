import React from 'react';
import { Page, Layout, Card, DataTable} from "@shopify/polaris";
import PageHeader from './Components/PageHeader/PageHeader';

import MerchantToolbar from './Components/Toolbar/MerchantToolbar';
import MerchantSideDrawer from './Components/SideDrawer/MerchantSideDrawer';


function DataTableExample() {
    const rows = [
      ['C1', 'Alan', 'alan@email.com', '5/3/2021', <a href='url'>View More</a>],
      ['C2', 'Bob', 'bob@email.com', '5/3/2011', <a href='url'>View More</a>],
      ['C3', 'Charles', 'charles@email.com', '2/5/2015', <a href='url'>View More</a>],
    ];
  
    return (
      <Page title="List of Merchants">
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
            ]}
            headings={[
              'ID',
              'Name',
              'Email',
              'Date Joined',
              'More Details',
            ]}
            rows={rows}
            //totals={['', '', '', 255, '$155,830.00']}
          />
        </Card>
      </Page>
    );
  }

class Merchant extends React.Component {
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

    render() {

        return(
            <div className="merchantPage" style={{height: '100%'}}>
                <PageHeader />
                <MerchantToolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <MerchantSideDrawer show={this.state.merchantSideDrawerOpen} />

                <main style={{marginTop: '131px'}}></main>
                <div className="merchantPageTag">
                  <DataTableExample />
                  <Page>
                  <button type="button" className="mListDownloadBtn">Download All</button>
                  </Page>
                </div>
            </div>
        )
    }
}

export default Merchant;