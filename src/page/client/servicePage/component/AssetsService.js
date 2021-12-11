import AssetIcon from "../../../../assets/assets-icon.svg";
const AssetsServiceComponent = () => {
  return (
    <div className="service-detail-container">
      <img src={AssetIcon} alt="assets"/>
      <div className="service-detail-content">
        <div className="title">
          assets
        </div>
        <div className="button-service-container">
          <div className="button-wrapper">
            <div className="descript">
              Inventory Management
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

export default AssetsServiceComponent