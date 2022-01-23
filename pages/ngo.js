import React from 'react';
import { Page, Layout, Card, DataTable} from "@shopify/polaris";
import PageHeader from './Components/PageHeader/PageHeader';

import NgoToolbar from './Components/Toolbar/NgoToolbar';
import NgoSideDrawer from './Components/SideDrawer/NgoSideDrawer';



/* function DataTableExample() {
    const rows = [
      ['C1', 'Alan', 'alan@email.com', '5/3/2021', <a href='url'>View More</a>],
      ['C2', 'Bob', 'bob@email.com', '5/3/2011', <a href='url'>View More</a>],
      ['C3', 'Charles', 'charles@email.com', '2/5/2015', <a href='url'>View More</a>],
    ];
  
    return (
      <Page title="List of NGOs">
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
  } */

var id = 0;

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  // var hour = a.getHours();
  // var min = a.getMinutes();
  // var sec = a.getSeconds();
  // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time = date + ' ' + month + ' ' + year ;
  return time;
}
  
class NGO extends React.Component {
  
  constructor(props) {
    super(props);  
    this.state = {
        ngoSideDrawerOpen: true,
        apiData: [],
        myList: [],
        isLoaded: false,
    }
  }
    
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {ngoSideDrawerOpen: !prevState.ngoSideDrawerOpen}
        });
    };
    
    backdropClickHandler = () => {
        this.setState({ngoSideDrawerOpen: true})
    };

    componentDidMount() {

      var result = [];
  
      const requestOptions = {
          method: 'POST',
          headers: { 'accept' : 'application/json' },
          // body: JSON.stringify({ title: 'React POST Request Example' })
      };
      const dataList = fetch('https://kindcitizen.myshopify.com/apps/kcapi/getAllContributors', requestOptions)
          .then(response => response.json())
          .then((user) => {
              console.log(user);
              return user;
          });
  
          console.log("jello");

          const jimmy = dataList;
          console.log(jimmy);
  
      const addToArray = () => {
          dataList.then((a) => {
  
              for(var i in a)
                  result.push(a[i]);
              console.log(result)
              console.log(result[0])
              this.setState({apiData: result});
  
              var listOfKeys = Object.keys(a);
              console.log(listOfKeys)
              this.setState({myList: listOfKeys});
          });
      };
  
      addToArray();
    };

    render() {
      var { isLoaded, apiData, myList } = this.state;

        var pikachu = 0
        var v = 0
        var anotherList = []

        for(var i in myList) {
          anotherList.push("https://kindcitizendev3.myshopify.com/admin/apps/kindcitizen_admin/ngoInfo?id="+myList[pikachu]+"&secId="+pikachu)
          pikachu ++
        }

        console.log(anotherList)

        const url = new URL("https://kindcitizendev3.myshopify.com/admin/apps/kindcitizen_admin/ngoInfo?id="+myList[pikachu]);

        if (!isLoaded) {
          return(
            <div className="ngoPage" style={{height: '100%'}}>
              <PageHeader />
              <NgoToolbar drawerClickHandler={this.drawerToggleClickHandler} />
              <NgoSideDrawer show={this.state.ngoSideDrawerOpen} />
              <main style={{marginTop: '131px'}}></main>
              <div className="ngoPageTag">
                <Page>
                <table className='contributorTable'>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Joined</th>
                    <th>More Details</th>
                  </tr>
                      {apiData.map(item => (
                          <tr>
                              <td key={item.email}>
                                  {id++ - 10}
                              </td>
                              <td key={item.email}>
                                  {item.firstName} {item.lastName}
                              </td>
                              <td key={item.email}>
                                  {item.email}
                              </td>
                              <td key={item.email}>
                                  {timeConverter(item.onboardingTimestamp)}
                              </td>
                              <td key={item.email}>
                                <a href={anotherList[v++]}>
                                  View More
                                </a>
                              </td>
                          </tr>
                      ))}
                </table>
                <div>
                  <button type="button" className="ngoListDownloadBtn">Download All</button>
                </div>
                </Page>
              </div>
            </div>
          )
        }

        else {
          return (
            <div className="contributorPage" style={{height: '100%'}}>
              <PageHeader />
              <NgoToolbar drawerClickHandler={this.drawerToggleClickHandler} />
              <NgoSideDrawer show={this.state.ngoSideDrawerOpen} />
              <main style={{marginTop: '131px'}}></main>
              <div className="ngoPageTag">
                {/* <DataTableExample /> */}
                {/* <Page>
                <button type="button" className="cListDownloadBtn">Download All</button>
                </Page> */}
              </div>
            </div>
          )
        }

        /* return(
            <div className="ngoPage" style={{height: '100%'}}>
                <PageHeader />
                <NgoToolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <NgoSideDrawer show={this.state.ngoSideDrawerOpen} />

                <main style={{marginTop: '131px'}}></main>
                <div className="ngoPageTag">
                  <DataTableExample />
                  <Page>
                  <button type="button" className="ngoListDownloadBtn">Download All</button>
                  </Page>
                </div>
            </div>
        ) */
    }
}

export default NGO;