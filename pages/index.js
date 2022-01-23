import React from 'react';
import { Page, Layout, Card} from "@shopify/polaris";
import ReactDOM from 'react-dom';

import PageHeader from './Components/PageHeader/PageHeader';



// const Index = () => {
//   return (
//     <Page title="Welcome Back, Kind Citizen!" style="background-color: red">
//         <Layout>
//         <Layout.Section oneHalf>
//             <Card title="Contributor" sectioned>
//               <a href="https://kindcitizendev.myshopify.com/admin/apps/kind_citizen_admin/contributors">View and manage all contributors</a>
//               <h1></h1>
//               <img alt="" width="20%" height="20%" style={{ objectFit: 'cover', objectPosition: 'center', }}
//               src="https://cdn.shopify.com/s/files/1/0554/1743/8369/t/7/assets/logo.png?v=7261625647166429261" />
//             </Card>
//           </Layout.Section>

//           <Layout.Section oneHalf>
//             <Card title="NGO" sectioned>
//               <a href="https://kindcitizendev.myshopify.com/admin/apps/kind_citizen_admin/contributors">View and manage all contributors</a>
//               <h1></h1>
//               <img alt="" width="20%" height="20%" style={{ objectFit: 'cover', objectPosition: 'center', }}
//               src="https://cdn.shopify.com/s/files/1/0554/1743/8369/t/7/assets/logo.png?v=7261625647166429261" />
//             </Card>
//           </Layout.Section>

//           <Layout.Section oneHalf>
//             <Card title="Merchant" sectioned>
//               <a href="url">View and manage all contributors</a>
//               <h1></h1>
//               <img alt="" width="20%" height="20%" style={{ objectFit: 'cover', objectPosition: 'center', }}
//               src="https://cdn.shopify.com/s/files/1/0554/1743/8369/t/7/assets/logo.png?v=7261625647166429261" />
//             </Card>
//           </Layout.Section>

//           <Layout.Section oneHalf>
//             <Card title="Beneficiary" sectioned>
//               <a href="https://kindcitizendev.myshopify.com/admin/apps/kind_citizen_admin/contributors">View and manage all contributors</a>
//               <h1></h1>
//               <img alt="" width="20%" height="20%" style={{ objectFit: 'cover', objectPosition: 'center', }}
//               src="https://cdn.shopify.com/s/files/1/0554/1743/8369/t/7/assets/logo.png?v=7261625647166429261" />
//             </Card>
//           </Layout.Section>

//           <Layout.Section oneHalf>
//             <Card title="Sales & Account" sectioned>
//               <a href="https://kindcitizendev.myshopify.com/admin/apps/kind_citizen_admin/contributors">View and manage all contributors</a>
//               <h1></h1>
//               <img alt="" width="20%" height="20%" style={{ objectFit: 'cover', objectPosition: 'center', }}
//               src="https://cdn.shopify.com/s/files/1/0554/1743/8369/t/7/assets/logo.png?v=7261625647166429261" />
//             </Card>
//           </Layout.Section>

//           <Layout.Section oneHalf>
//             <Card title="Website" sectioned>
//               <a href="https://kindcitizendev.myshopify.com/admin/apps/kind_citizen_admin/contributors">View and manage all contributors</a>
//               <h1></h1>
//               <img alt="" width="20%" height="20%" style={{ objectFit: 'cover', objectPosition: 'center', }}
//               src="https://cdn.shopify.com/s/files/1/0554/1743/8369/t/7/assets/logo.png?v=7261625647166429261" />
//             </Card>
//           </Layout.Section>

//         </Layout>
//     </Page>
//   );
// };

class Hakim extends React.Component {
  render() {
      return(
        
        <div className="indexPage" style={{height: '100%'}}>
          <PageHeader />
          <main className="indexMainStyle" style={{marginTop: '56px'}}></main>
          <div className="indexPageContent">
            <div className="indexPageTitle">Welcome back, Kind Citizen!</div>

            
            <div className="row1Cards">
            
               

              <div className="card1">
                <div className="cardTitle"><a href="https://kindcitizendev3.myshopify.com/admin/apps/kindcitizen_admin/contributors">Contributor</a></div>
                <div className="cardContent">View and manage all <br /> contributors</div>
              </div>
              

              <div className="card2">
                <div className="cardTitle"><a href="https://kindcitizendev3.myshopify.com/admin/apps/kindcitizen_admin/ngo">NGO</a></div>
                <div className="cardContent">View and manage all <br /> NGOs</div>
              </div>

              <div className="card3">
                <div className="cardTitle"><a href="https://kindcitizendev3.myshopify.com/admin/apps/kindcitizen_admin/merchant">Merchant</a></div>
                <div className="cardContent">View and manage all <br /> merchants</div>
              </div>

              <div className="card4">
                <div className="cardTitle"><a href="https://kindcitizendev3.myshopify.com/admin/apps/kindcitizen_admin/beneficiary">Beneficiary</a></div>
                <div className="cardContent">View and manage all <br /> beneficiaries</div>
              </div>

              
            
              
            </div>

            <div className="row2Cards">

            </div>
          </div>
        </div>
        
      )
      
  }
}

export default Hakim;