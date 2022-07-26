import FooterAction from "../../components/footerAction/FooterAction"
import Header from "../../components/header/Header"
import OrdersBlock from "../../components/ordersBlock/OrdersBlock"
import "./driverPageOrders.scss"

const DriverPageOrders = () => {
  return (
    <div className="page-view">
      <div className="header-table">
        <Header />
      </div>

      <div className="main-table">
        <OrdersBlock />
      </div>

      <div className="footer-table">
        <FooterAction />
      </div>
    </div>
  )
}

export default DriverPageOrders