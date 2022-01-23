// import React, { Component, useState } from 'react';
import { Page, Layout, Card} from "@shopify/polaris";
// import ReactDOM from 'react-dom';
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css';

// import * as FaIcons from 'react-icons/fa';
// import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component } from "react";
import { render } from "react-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  Content,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink
} from "carbon-components-react/lib/components/UIShell";

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import PageHeader from './Components/PageHeader/PageHeader';

import axios from 'axios';

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

/*function formatName(a) {
    return a.firstName + ' ' + a.lastName;
  }
  
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

//stateful class component
class Sandbox extends React.Component {
    render () {
        return (
            <Page>
                {element}
                {element}
                {element}

                <p>oi test</p>
            </Page>
        )
    }
}*/

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//[STATE AND SETSTATE USAGE]
// https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11

/*class Sandbox extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 0
        }
    }

    //SETSTATE CHANGES THE STATE VALUE
    changeMessage() {
        this.setState({ //value is received here
            message: this.state.message += 456
        })
    }

    render() {
        return (
        <div>

            <h1>test</h1>

            <h1>{this.state.message}</h1>

            <button onClick={() => this.changeMessage()}>This is a button</button>

        </div>
        )
    }
}*/

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//[PROPS USAGE]

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

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//DESTRUCTURING PROPS
//https://www.youtube.com/watch?v=5_PdMS9CLLI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=12

//Method 1
/*const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}*/

//Method 2
/*const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
            Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

class Sandbox extends React.Component {
    render () {
        return (

            <div>
                <Greet name="John" heroName="Johnny" />
            </div>

        )
    }
}*/

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//EVENT HANDLING

/*class Sandbox extends React.Component {
    clickHandler() {
        console.log('You clicked the button')
    }

    render () {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>

                test
            </div>
        )
    }
}*/

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//BINDING EVENT HANDLERS
//https://www.youtube.com/watch?v=kVWpBtRjkCk&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=15

// /class Sandbox extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             message: "Hallaww"
//         }
//         //method for 3rd button, binding in constructor
//         this.clickHandler = this.clickHandler.bind(this)
//     }

//     clickHandler() {
//         this.setState({
//             message: 'Adios'
//         })
//     }

//     //4th method
//     // clickHandler = () => {
//     //     this.setState({
//     //         message: 'Adios'
//     //     })
//     // }

//     render () {
//         return (
//             <div>
//                 <div>{this.state.message}</div>
//                 {/* method 1 <button onClick={this.clickHandler.bind(this)}>1st button</button>*/}
//                 {/* method 2 <button onClick={() => this.clickHandler()}>2nd Button</button>*/}
//                 <button onClick={this.clickHandler}>3rd Method</button>
//             </div>
//         )
//     }
// }

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//PASS METHODS AS PROPS
//https://www.youtube.com/watch?v=QpfyjwhY9kg&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=15

// function ChildComponent(props) {
//     return (
//         <div>
//             <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
//         </div>
//     )
// }

// class ParentComponent extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             parentName: 'Parent'
//         }

//         this.greetParent = this.greetParent.bind(this)
//     }

//     greetParent(childName) {
//         alert(`Hello ${this.state.parentName} from ${childName}`)
//     }

//     render() {
//         return (
//             <div>
//                 <ChildComponent greetHandler={this.greetParent} />
//             </div>
//         )
//     }
    

// }


//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//CONDITIONAL RENDERING
//https://www.youtube.com/watch?v=7o5FPaVA9m0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=16

// class Sandbox extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: true
//         }
//     }

//     render() {

        //4th method; if left is true, right will appear, vice versa
        //return this.state.isLoggedIn && <div>Welcome Hakim 123</div>

        // 3rd method
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Hakim!</div>   //true
        // ) : (
        //     <div>Welcome guest!</div>   //false
        // )
        

        // 2nd Method
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Hakim test</div>
        // } else {
        //     message = <div>Welcome guest test</div>
        // }

        // return <div>{message}</div>

        // 1st method
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Hakim
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Hakim</div>
        //         <div>Welscome Guest</div>
        //     </div>
        // )
//     }
// }


//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//LIST RENDERING

// function NameList() {
//     const names = ['Ali', 'Bob', 'Cheong']

//     return (
//         <div>
//             {
//                 names.map(name => <h2>{name}</h2>)
//             }
//         </div>
//     )
// }

// function NameList() {
//     const persons = [
//         {
//             id: 1,
//             name: 'Ali',
//             age: 30,
//             skill: 'Angular'
//         },
//         {
//             id: 2,
//             name: 'Charlie',
//             age: 25,
//             skill: 'React'
//         },
//         {
//             id: 3,
//             name: 'Gon',
//             age: 15,
//             skill: 'Vue'
//         }
//     ]

//     const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
//     return <div>{personList}</div>
// }

// class Sandbox extends React.Component {
//     render() {
//         return(
//             <div>
//                 <NameList />
//             </div>
//         )
//     }
// }


//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//

// const styleObj = {
//     background: "Purple"
// }

// class Sandbox extends React.Component {
//     render() {
//         return(
//             <div>
//                 <Page title="Test" style={styleObj} className="Sandbox">
//                     <div style={styleObj} className="Sandbox">
//                         <h1>        qwertyy</h1>
//                         <br></br>
//                     </div>
//                     <br></br>
//                     <div>
//                         <Layout>
//                             <Layout.Section oneHalf>
//                                 <Card title="Contributor" sectioned>
//                                     Hallaw
//                                 </Card>
//                             </Layout.Section>

//                             <Layout.Section oneHalf>
//                                 <Card title="Contributor" sectioned>
//                                     Hallaw
//                                 </Card>
//                             </Layout.Section>
//                         </Layout>
//                     </div>
//                 </Page>
//             </div>
//         )
//     }
// }

//DATE STUFF
// function Hakim () {
//     const [selectedDate, setSelectedDate] = useState(null)
//     return (
//         <div>
//             <DatePicker
//                 selected={selectedDate}
//                 onChange={date => setSelectedDate(date)}
//             />
//         </div>
//     )
// }

// class Sandbox extends React.Component {
//     render () {
//         return (
//             <div>
//                 <Page>
//                     <Layout>
//                         <Layout.Section oneHalf>
//                             <Hakim />
//                         </Layout.Section>

//                         <Layout.Section oneHalf>
//                             <Hakim />
//                         </Layout.Section>
//                     </Layout>
//                 </Page>
//             </div>
//         )
//     }
// }

// const mysidenav = (
//     <div>
//       <HeaderContainer
//         render={({ isSideNavExpanded, onClickSideNavExpand }) => (
//           <>
//             <Header aria-label="Product name">
//               <HeaderMenuButton
//                 aria-label="Open menu"
//                 onClick={onClickSideNavExpand}
//                 isActive={isSideNavExpanded}
//               />
//               <HeaderName prefix="[Corp]">[Product]</HeaderName>
//               <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
//                 <SideNavItems>
//                   <SideNavLink element={Link} to="/link1">
//                     Home
//                   </SideNavLink>
//                   <SideNavLink element={Link} to="link2" isActive={true}>
//                     Jot
//                   </SideNavLink>
//                   <SideNavLink element={Link} to="link3">
//                     Marketing
//                   </SideNavLink>
//                   <SideNavLink element={Link} to="link4">
//                     Analytics
//                   </SideNavLink>
//                   <SideNavLink element={Link} to="link5">
//                     Inventory
//                   </SideNavLink>
//                   <SideNavLink element={Link} to="/link6">
//                     Orders
//                   </SideNavLink>
//                   <SideNavLink element={Link} to="/link7">
//                     Apps
//                   </SideNavLink>
//                   <SideNavLink element={Link} to="/link8">
//                     Settings
//                   </SideNavLink>
//                 </SideNavItems>
//               </SideNav>
//             </Header>
//           </>
//         )}
//       />
//     </div>
//   );


// class Sandbox extends React.Component {
//     state = {
//         sideDrawerOpen: false
//     };

//     drawerToggleClickHandler = () => {
//         this.setState((prevState) => {
//             return {sideDrawerOpen: !prevState.sideDrawerOpen}
//         });
//     };

//     backdropClickHandler = () => {
//         this.setState({sideDrawerOpen: false})
//     };

//     render() {
//         let backdrop;

//         if (this.state.sideDrawerOpen) {
//             backdrop = <Backdrop click={this.backdropClickHandler} />
//         }

//       return (
//         <div style={{height: '100%'}}>
//             <PageHeader />
//             <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
//             <SideDrawer show={this.state.sideDrawerOpen} />
//             {backdrop}
//             <main style={{marginTop: '150px'}}>
//                 <p>This is the page content</p>
//             </main>
//             <Page>
//             <form className="formClass">
//                 <label> 
//                     Username
//                 </label>
//                 <input type="text" name="name" value="test" />
//             </form>
//             <form className="formClass">
//                 <label> 
//                     Name
//                 </label>
//                 <input type="text" name="name" />
//             </form>
//             <form className="formClass">
//                 <label> 
//                     E-Mail
//                 </label>
//                 <input type="text" name="name" />
//             </form>
//             <form className="formClass">
//                 <label> 
//                     Password
//                 </label>
//                 <input type="text" name="name" />
//             </form>
//             <form className="formClass">
//                 <label> 
//                     Phone Number
//                 </label>
//                 <input type="text" name="name" />
//             </form>
//             </Page>
//         </div>
//       );
//     }
//   }

// class Sandbox extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }
//     }

//     componentDidMount() {

//         fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'POST'
//         })
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json.items,
//                 })
//             });

//     }

//     render() {

//         var { isLoaded, items } = this.state;

//         if (!isLoaded) {
//             return <div>Loading...</div>;
//         }

//         else {

//             return(
//                 <div>
                    
//                     <ul>
//                         {items.map(item => (
//                             <li key={item.id}>
//                                 Email: {item.email}
//                             </li>
//                         ))};
//                     </ul>

//                 </div>
//             );

//         }

//     }
// }

// class Sandbox extends React.Component {

//     state = {
//         loading: true,

//     }

//     async componentDidMount() {
//         const url = "https://kindcitizen.myshopify.com/apps/kcapi/getAllContributors";
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: { "Content-Type" : "application/json" }
//         });
//         console.log(data);
//         const data = await response.json();
//         console.log(data);

//     }

//     render() {
//         return (
//             <div>
//                 hello
//             </div>
//         );
//     }
// }

class Sandbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyList: [],
            myList: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        var result = [];

        const requestOptions = {
            method: 'POST',
            headers: { 'accept' : 'application/json' },
            // body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const dataList = fetch('https://kindcitizen.myshopify.com/apps/kcapi/getAllContributors', requestOptions)
            // .then(response => response.json()) 
            // .then(json => console.log(json));

            .then(response => response.json())
            .then((user) => {
                return user;
            });

        const addToArray = () => {
            dataList.then((a) => {
                // result.push(a)
                for(var i in a)
                    result.push(a[i]);
                console.log(result)
                console.log(result[0])
                this.setState({keyList: result});
                // console.log(result)
                // this.setState({keyList: result[0][1].email})
                var listOfKeys = Object.keys(a);
                console.log(listOfKeys)
                this.setState({myList: listOfKeys});

                // console.log(result[0][listOfKeys[0]].email)
            });
        };

        addToArray();

        // const printData = () => {
        //     result.then((b) => {
        //         console.log(b);
        //     });
        // };

        // printData();

    }

    render() {

        var { isLoaded, keyList, myList } = this.state;

        if (!isLoaded) {
            return (
                <div>
                    <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                        {keyList.map(item => (
                            <tr>
                                <td key={item.email}>
                                    {item.firstName}
                                </td>
                                <td key={item.email}>
                                    {item.lastName}
                                </td>
                            </tr>
                        ))};
                    </table>
                </div>
            )
        }

        else {
            return (
                <div>
                    go turn
                </div>
            )
        }
    }

}

// export default Sandbox;

// class Sandbox extends React.Component {

//     render() {
//         return (
//             <div>hello world</div>
//         )
//     }

// }

export default Sandbox;