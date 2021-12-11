import { useNavigate } from "react-router-dom";
import "./style.scss";
const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className="notfound-container">
      <div className="title"> 404 Page Not found</div>
      <span onClick={() => navigate('/')}>Click here to back to the homepage !</span>
    </div>
  )
}

export default NotFoundPage