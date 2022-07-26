import "./ordersBlock.scss"
import OrdersHeaderTable from "./ordersHeaderTable/OrdersHeaderTable"
import OrdersMainTable from "./ordersMainTable/OrdersMainTable"

const OrdersBlock = () => {
  return (
    <div className="orders-block-wrapper">
      <OrdersHeaderTable />
      <OrdersMainTable />
    </div>
  )
}

export default OrdersBlock