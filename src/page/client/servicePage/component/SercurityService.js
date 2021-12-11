import SercurityServiceIcon from "../../../../assets/sercurity-icon.svg"
const SercurityServiceComponent = () => {
  return (
    <div className="service-detail-container reverse-row">
      <img src={SercurityServiceIcon} alt="assets"/>
      <div className="service-detail-content">
        <div className="title">
          sercurity
        </div>
        <div className="button-service-container">
          <div className="button-wrapper">
            <div className="descript">
              SSL server
            </div>
            <div className="button">
            SECTIGO
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SercurityServiceComponent