import LoginPage from "./page/login";
import ClientPage from "./page/client";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./page/404";
    
    
function App() {
  document.title = "Kairos"
  return (
    <Routes>
        <Route path="/" element={<ClientPage />}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;


