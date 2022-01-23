import React, { useCallback, useState } from 'react';

import PageHeader from './Components/PageHeader/PageHeader';
import ContributorInfoToolbar from './Components/Toolbar/ContributorInfoToolbar';
import ContributorSideDrawer from './Components/SideDrawer/ContributorSideDrawer';

class ContributorInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          contributorSideDrawerOpen: true,
          apiData: [],
          apiData2: [],
          myList: [],
          isLoaded: false,
        }
      }

    // state = {
    //     contributorSideDrawerOpen: true
    // };

    componentDidMount() {

        var result = [];
        var result2 = [];
        var targetData = [];

        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        console.log(id);
        const secId = urlParams.get('secId')
        console.log(secId);
    
        const requestOptions = {
            method: 'POST',
            headers: { 'accept' : 'application/json' },
            // body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const dataList = fetch('https://kindcitizen.myshopify.com/apps/kcapi/getAllContributors', requestOptions)
            .then(response => response.json())
            .then((user) => {
                return user;
            });

        const dataList2 = fetch('https://kindcitizen.myshopify.com/apps/kcapi/getContributorDetail/'+id, requestOptions)
        .then(response => response.json())
        .then((user) => {
            return user;
        });
    
        const addToArray = () => {
            dataList.then((a) => {
    
                for(var i in a)
                    result.push(a[i]);
                console.log(result)
                console.log(result[secId])

                targetData.push(result[secId])
                console.log(targetData)
                this.setState({apiData: targetData});
    
                var listOfKeys = Object.keys(a);
                // console.log(listOfKeys)
                this.setState({myList: listOfKeys});
            });
        };

        const addToArray2 = () => {
            dataList2.then((a) => {
    

                result2.push(a);
                console.log(result2)
                console.log(result2[0])
                this.setState({apiData2: result2});
            });
        };
    
        addToArray();
        addToArray2();
      };
    
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {contributorSideDrawerOpen: !prevState.contributorSideDrawerOpen}
        });
    };
    
    backdropClickHandler = () => {
        this.setState({contributorSideDrawerOpen: true})
        console.log(this.state)
    };    

    render () {

        var { isLoaded, apiData, apiData2, myList } = this.state;

        if (apiData2.favourites) {
            return (<div>hai</div>)
        } else {
            return (
                <div className="contributorInfoPage" style={{height: '100%'}}>
                <PageHeader />
                <ContributorInfoToolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <ContributorSideDrawer show={this.state.contributorSideDrawerOpen} />

                <main style={{marginTop: '131px'}}>
                    <br></br>
                </main>

                <div className="contributorInfoPageTag">

                    <div>
                        {apiData.map(item => (
                            <div>
                                <form className="cInfoFormClass" >
                                    <label> 
                                        Username 
                                    </label>
                                    <input type="text" name="uName" value={item.lastName} />
                                </form>
                                <form className="cInfoFormClass">
                                    <label> 
                                        Name
                                    </label>
                                    <input type="text" name="name" value={item.firstName} />
                                </form>
                                <form className="cInfoFormClass">
                                    <label> 
                                        E-Mail
                                    </label>
                                    <input type="email" name="email" value={item.email} />
                                </form>
                                {/* <form className="cInfoFormClass">
                                    <label> 
                                        Password
                                    </label>
                                    <input type="password" name="password" value="placeholder value" />
                                </form> */}
                            </div>
                        ))}
                    </div>
                    <div>
                        {apiData2.map(item => (
                            <div>
                                <form className="cInfoFormClass" >
                                    <label> 
                                        Favourites List
                                    </label>
                                    {/* <input type="text" name="uName" value={item.favourites} /> */}
                                </form>
                                
                            </div>
                        ))}
                    </div>
                    <br></br>
                    <br></br>
                    <div className='noFav'>User has no favourites</div>
                </div>
            </div>
            )
        }
    }
}

export default ContributorInfo;