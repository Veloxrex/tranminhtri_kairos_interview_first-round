import SalesServiceIcon from "../../../../assets/salses-icon.svg"
const SalesServiceComponent = () => {
  return (
    <div className="service-detail-container reverse-row">
      <img src={SalesServiceIcon} alt="assets"/>
      <div className="service-detail-content">
        <div className="title">
          sales
        </div>
        <div className="button-service-container">
          <div className="button-wrapper">
            <div className="descript">
              Create Homepage <br/>Youtube & Instagram
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

export default SalesServiceComponent