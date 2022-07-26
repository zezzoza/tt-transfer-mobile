import "./ordersHeaderTable.scss"
import { Link } from "react-router-dom"

const OrdersHeaderTable = () => {
  return (
    <div className="orders-content-header header-table">
      <div className="orders-navbar">
        <Link to="/orders" className="active">
          {/* active - стиль для активного меню */}
          Заказы
        </Link>

        <Link to="/history" >
          История
        </Link>

        <Link to="/archive" >
          Архив
        </Link>
      </div>
    </div>
  )
}

export default OrdersHeaderTable