import AccountingIcon from "../../../../assets/accounting-icon.svg"
const AccountingServiceComponent = () => {
  return (
    <div className="service-detail-container reverse-row">
      <img src={AccountingIcon} alt="assets"/>
      <div className="service-detail-content">
        <div className="title">
          accounting
        </div>
        <div className="button-service-container">
          <div className="button-wrapper">
            <div className="descript">
              Accounting
            </div>
            <div className="button">
              G-book
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountingServiceComponent