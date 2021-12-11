import About from "./about"
import HomePage from "./homePage"
import ServiceFeePage from "./serviceFee"
import ServicePage from "./servicePage"

const ClientPage = () => {
  return (
    <>
      <HomePage/>
      <ServicePage/>
      <ServiceFeePage/>
      <About/>
    </>
  )
}

export default ClientPage