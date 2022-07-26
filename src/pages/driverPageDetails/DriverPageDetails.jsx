import FooterAccept from "../../components/footerAccept/FooterAccept"
import Header from "../../components/header/Header"
import OrdersBlockDetails from "../../components/ordersBlockDetails/OrdersBlockDetails"
import "./driverPageDetails.scss"

const DriverPageDetails = () => {
  return (
    <div className="page-view">
      <div className="header-table">
        <Header />
      </div>

      <div className="main-table">
        <OrdersBlockDetails />
      </div>

      <div className="footer-table">
        <FooterAccept />
      </div>
    </div>
  )
}

export default DriverPageDetails