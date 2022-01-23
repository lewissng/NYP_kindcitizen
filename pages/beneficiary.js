import React from 'react';
import { Page, Layout, Card, DataTable} from "@shopify/polaris";
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import PageHeader from './Components/PageHeader/PageHeader';


/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

class Contributors extends React.Component {
    render () {
        return (

            <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
            </div>

        )
    }
}*/

function DataTableExample() {
    const rows = [
      ['B1', 'Alan', '1', 'NGO name', 'Company A', '03/09/21', '11', '50', <a href='https://kindcitizendev.myshopify.com/admin/apps/kind_citizen_admin/beneficiaryInfo'>View More</a>],
      ['B2', 'Bob', '2', 'NGO name', 'Company A', '03/09/21', '11', '50', <a href='url'>View More</a>],
      ['B3', 'Charles', '3', 'NGO name', 'Company A', '03/09/21', '11', '50', <a href='url'>View More</a>],
      // ['B4', 'Alan', '4', 'NGO name', 'Company A', '03/09/21', '11', '50', <a href='url'>View More</a>],
      // ['B5', 'Bob', '5', 'NGO name', 'Company A', '03/09/21', '11', '50', <a href='url'>View More</a>],
      // ['B6', 'Charles', '6', 'NGO name', 'Company A', '03/09/21', '11', '50', <a href='url'>View More</a>],
    ];
  
    return (
      <Page title={<a href="/">test link title</a>}>
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
            ]}
            headings={[
              'ID',
              'Name',
              'NGO ID',
              'NGO Name',
              'NGO Company',
              'Joined',
              'Balance',
              'Allocated',
              '',
            ]}
            rows={rows}
            //totals={['', '', '', 255, '$155,830.00']}
          />
        </Card>
      </Page>
    );
  }

class Beneficiary extends React.Component {
  state = {
      sideDrawerOpen: true
  };

  drawerToggleClickHandler = () => {
      this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen}
      });
  };

  backdropClickHandler = () => {
      this.setState({sideDrawerOpen: true})
  };

  render() {
      let backdrop;

      if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
      }

    return (
      <div className="beneficiaryInfoPage" style={{height: '100%'}}>
          <PageHeader />
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {/* {backdrop} */}
          <main style={{marginTop: '131px'}}></main>
          <div className="beneficiaryPageTag">
            <DataTableExample />
            <Page>
            <button type="button" className="bListDownloadBtn">Download All</button>
            </Page>
          </div>
      </div>
    );
  }
}  

export default Beneficiary;