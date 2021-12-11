import "./style.scss";

import AssetsServiceComponent from "./component/AssetsService";
import AccountingServiceComponent from "./component/AccountingService";
import HrAndAdminServiceComponent from "./component/AdminService";
import SalesServiceComponent from "./component/SalesService";
import CustomerServiceComponent from "./component/CustomerService";
import SercurityServiceComponent from "./component/SercurityService";

const ServicePage = () => {
  return (
    <>
      <div className="service-page-title">IT CLOUD SEA’S IT SERVICE</div>
      <div className="service-page-container">
        <div className="service-page-wrapper">
            <AssetsServiceComponent/>
            <AccountingServiceComponent/>
        </div>
      </div>
      <div className="service-page-container">
        <div className="service-page-wrapper">
          <HrAndAdminServiceComponent/>  
          <SalesServiceComponent/> 
        </div>
      </div>
      <div className="service-page-container">
        <div className="service-page-wrapper">
          <CustomerServiceComponent/>  
          <SercurityServiceComponent/> 
        </div>
      </div>
    </>
  
  )
}

export default ServicePage