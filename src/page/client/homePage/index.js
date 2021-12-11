import './style.scss';
import logo from "../../../assets/logo.svg";
import homeIcon from "../../../assets/home-icon.svg"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AboutContentsArray = [
  {
    numberContent: 6,
    content: 'Different<br/>IT Sofware<br/>Networks'
  },
  {
    numberContent: 32,
    content: 'Parners'
  },
  {
    numberContent: 4,
    content: 'Contires'
  }
]
const HomePage = () => {
  const {userInfo} = useSelector(state => ({
    userInfo: state.userAuthentication.get('userInfo')
  }))
  const onHandleSignOut = () => {
    localStorage.clear();
    window.location.reload()
  }
  let navigate = useNavigate();
  return(
    <div className='homePage-container'>
      <div className="left-col">
        <div className="header">
          <img  className="logo" src={logo} alt="logo"/>
          <div className="home-button">
              <img className="icon" src={homeIcon} alt="homeIcon"/>
              Home
          </div>
        </div>
        <div className="content">
          Asia IT <br/> Market Place
        </div>
      </div>
      <div className="right-col">
        <div className="header">
            <span>EN</span>
            <span>Company</span>
            <span>Partner Market Place</span>
            {userInfo.token ? <>
              <span>Welcome &nbsp; {userInfo.name || 'user'}</span>
              <span onClick={onHandleSignOut} >Sign out</span>
            </> :   <span onClick={() => navigate('/login')}>{
              userInfo.name || 'Sign In'
            }</span>}
        </div>
        <div className="sub-header">
            <span>Auto Homepage</span>
            <span>Sales</span>
            <span>CRM</span>
            <span>Electronic office</span>
            <span>Cloud ERP</span>
            <span>SSL</span>
        </div>
        <div className="about">
          <div className="about-option">
            <span className='active'>Now</span>
            <span>Future</span>
          </div>
          <div className="about-option-detail">
            {AboutContentsArray.map((aboutContent, index) => {
              const {numberContent , content} = aboutContent;
              return (
                <div className="content-wrapper" key={index}>
                  <div className="number">
                    {numberContent || ''}
                  </div>
                  <div className="content" dangerouslySetInnerHTML={{__html: content}}/>  
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='badge-container'>
        You are now viewing an <strong>&nbsp;IT Software &nbsp;</strong> that has been verified by <strong>&nbsp;over 1 million users.&nbsp;</strong>
      </div>      
    </div>

  )
}
export default HomePage