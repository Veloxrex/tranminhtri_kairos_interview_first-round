import CustomerIcon from "../../../../assets/customer-icon.svg";
const CustomerServiceComponent = () => {
  return (
    <div className="service-detail-container">
      <img src={CustomerIcon} alt="assets"/>
      <div className="service-detail-content">
        <div className="title">
          customer
        </div>
        <div className="button-service-container">
          <div className="button-wrapper">
            <div className="descript">
              Customer Request Management
            </div>
            <div className="button">
              OQUFIE
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default CustomerServiceComponent