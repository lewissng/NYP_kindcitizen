import React, { useCallback, useState } from 'react';
import { Page, Layout, Card, DataTable, FormLayout, TextField} from "@shopify/polaris";
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

import PageHeader from './Components/PageHeader/PageHeader';
import BeneficiaryInfoToolbar from './Components/Toolbar/BeneficiaryInfoToolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import DatePicker from './Components/Datepicker/Datepicker';


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

// function DataTableExample() {
//     const rows = [
//       ['C1', 'Rice', '2', '4', '8', '12/10/2021', 'VISA ***********', ''],
//       ['C2', 'Stew', '3', '6', '18', '12/10/2021', 'VISA ***********', ''],
//       ['C3', 'Cupcake', '4', '5', '20', '12/10/2021', 'VISA ***********', ''],
//     ];
  
//     return (
//       <div>
//         <Card>
//           <DataTable
//             columnContentTypes={[
//               'text',
//               'numeric',
//               'numeric',
//               'numeric',
//               'numeric',
//               'numeric',
//               'numeric',
//               'numeric',
//             ]}
//             headings={[
//               'ID',
//               'Item',
//               'Quantity',
//               'Price',
//               'Total',
//               'Date',
//               'Payment Details',
//               'Kindness notes',
//             ]}
//             rows={rows}
//             //totals={['', '', '', 255, '$155,830.00']}
//           />
//         </Card>
//       </div>
//     );
//   }

class BeneficiaryInfo extends React.Component {
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

    render () {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (

            <div className="beneficiaryInfoPage" style={{height: '100%'}}>
                <PageHeader />
                <BeneficiaryInfoToolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {/* {backdrop} */}

                <main style={{marginTop: '131px'}}>
                    <br></br>
                </main>

                <div className="beneficiaryInfoPageTag">
                    <form className="formClass">
                        <label> 
                            Username
                        </label>
                        <input type="text" name="uName" value="placeholder value" />
                    </form>
                    <form className="formClass">
                        <label> 
                            Name
                        </label>
                        <input type="text" name="name" value="placeholder value" />
                    </form>
                    <form className="formClass">
                        <label> 
                            E-Mail
                        </label>
                        <input type="email" name="email" value="placeholder value" />
                    </form>
                    <form className="formClass">
                        <label> 
                            Password
                        </label>
                        <input type="password" name="password" value="placeholder value" />
                    </form>
                    <form className="formClass">
                        <label> 
                            Phone Number
                        </label>
                        <input type="text" name="phoneNumber" value="9456 7656" />
                    </form>

                    <div className="tokenValidityClass">
                        <div>Token validity</div>
                        <div className="myDatePickers">
                            <div className="indivDatePickers"><DatePicker /></div>
                            <div className="datePickerDash">-</div>
                            <div className="indivDatePickers"><DatePicker /></div>
                        </div>
                    </div>
                    {/* <br></br>
                    <div>
                        <Card title="Token validity" sectioned>
                            <Layout>
                                <Layout.Section oneHalf>
                                    <Card title="From" sectioned>
                                        <Hakim />
                                    </Card>
                                </Layout.Section>

                                <Layout.Section oneHalf>
                                    <Card title="To" sectioned>
                                        <Hakim />
                                    </Card>
                                </Layout.Section>
                            </Layout>
                        </Card>
                    </div>

                    <div>
                        <DataTableExample />
                    </div>

                    <br></br>
                    <br></br>
                    <br></br> */}

                </div>
            </div>

        )
    }
}

export default BeneficiaryInfo;