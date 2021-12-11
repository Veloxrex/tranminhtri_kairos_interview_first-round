import "./style.scss";
import { Form, Input, Button , message} from 'antd';
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthenticationRequest } from "./state/action";
import { useEffect } from "react";

const LoginPage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {userInfo , errorMessage} = useSelector(state => ({
    userInfo: state.userAuthentication.get('userInfo'),
    errorMessage: state.userAuthentication.get('errorMessage')
  }))
  //clear token -> first time access
  useEffect(() => {
    localStorage.clear();
  }, [])
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo && userInfo.token) {
      navigate('/')
    }
  }, [userInfo , navigate])
  
  useEffect(() => {
    if(errorMessage){
      message.error(errorMessage, 1)
    }
  }, [errorMessage])
  const onFinish = (values) => {
    message.loading('Action in progress..', 1)
    dispatch(getUserAuthenticationRequest(values))
  
  };

  return (
    <div className='loginPage-container'>
      <div className="left-col">
      <div className="header">
        <img  className="logo" src={logo} alt="logo" onClick={() =>  navigate('/')}/>
      </div>
      <div className="content">
        Asia IT <br/> Market Place
      </div>
      </div>
      <div className="right-col">
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    
    </div>
  )
}

export default LoginPage