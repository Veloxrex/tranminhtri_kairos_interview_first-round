import "./style.scss"

const About = () => {
  return(
    <div className="about-page-container">
      <div className="about-detail-container">
        <div className='title'>Vietnam Office</div>
        <div className='address'>14F, APtower, Dien Bien Phu street, district 3, <br/>Ho Chi Minh city</div>
        <div className="tax-id">Business resigtration: 0315421202</div>
        <div className="contact">Tel: 028-3520-2367 &nbsp; &nbsp; sales@dkinno.com</div>
        <div className="copyright">Copyright 2021 DaouKiwoom Innocation C0., Ltd</div>
      </div>
      <div className="about-detail-container">
        <div className='title'>Indonesia Office</div>
        <div className='address'>Menara Mandiri II, Jl. jend. Sudirman No.54-55,<br/> South Jakarta, DKI Jakarta 12190, Indonsia</div>
        <div className="contact">Tel: +62-21-5082-0038</div>
      </div>
      <div className="about-detail-container">
        <div className='title'>Korea Office</div>
        <div className='address'>5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu,<br/> Seongnam-si, Gyeonggi-do, Korea</div>
      </div>
    </div>
  )
}

export default About