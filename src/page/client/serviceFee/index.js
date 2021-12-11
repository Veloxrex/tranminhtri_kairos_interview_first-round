import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { message } from 'antd';

const ServiceFeesArray = [
  {
    title: 'Free Test',
    detail: 'Organize across all apps by hand',
    price: 0,
    curency: '$',
    frequency: 'per month'
  },
  {
    title: 'Low Price',
    detail: 'Monthly Fixed Amount',
    price: 200000,
    curency: '$',
    frequency: 'per month'
  },
  {
    title: 'Easy Using Methods',
    detail: 'Various Manuals',
    price: 200000,
    curency: '$',
    frequency: 'per month'
  },
  {
    title: 'Verified IT Service',
    detail: 'On sale in 4 countries',
    price: 300000,
    curency: 'VND',
    frequency: 'per month'
  }
] 
const ServiceFeePage = () => {
  const {userInfo} = useSelector(state => ({
    userInfo: state.userAuthentication.get('userInfo')
  }))
  const navigate = useNavigate();
  const onHandleLogin = () => {
    if(!userInfo || !userInfo.token){
      navigate('/login');
      message.success('You need to login first', 2.5)
    }else{
      message.success('Thank you for using our services', 2.5)
    } 
  }
  return (
    <div className="service-page-fee-container">
      {ServiceFeesArray.map((serviceFee, index) => {
        const {title , detail , price , curency , frequency} = serviceFee;
        return (
          <div className="service-fee-detail-container" key={index} onClick={onHandleLogin}>
            <div className="title">{title}</div>
            <div className="duration-detail">{detail}</div>
            <div className="price-container">
              <div className="price-number">{price.toLocaleString() || 0}</div>
              <div className="price-curency">{curency}<br/><span className="frequency">{frequency}</span></div>
            </div>
          </div>
        )
      })}
     
    </div>
  )
}

export default ServiceFeePage