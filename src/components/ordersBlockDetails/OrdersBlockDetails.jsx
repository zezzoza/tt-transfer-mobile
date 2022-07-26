import { Link } from "react-router-dom"
import "./ordersBlockDetails.scss"
import arrow from "../../assets/Arrow 3.svg"
import arrowDown from "../../assets/Arrow 2.svg"
import arrowTriangle from "../../assets/Polygon 6.svg"

const OrdersBlockDetails = () => {
  return (
    <div className="orders-details-wrapper">
      <div className="back-orders header-table">
        <img src={arrow} alt="" />
        <Link to="/orders" >Вернуться к списку</Link>
      </div>

      <div className="main-table">
        <div className="orders-information">
          <div className="personal-data">
            <p className="name">Имя: Александр Николаевич</p>
            <p className="phone">Телефон: +7 (123) 456-78-99 <span><a href="tel:+79998887766">Позвонить</a></span> </p>
            <p className="date">Дата: <span>10.06.2022</span></p>
            <p className="time">Время: <span>21:00</span></p>
          </div>

          <div className="details-fromto">
            <div className="fromto-conteiner">
              <input type="text" />
              <div className="description">Откуда</div>
              <div className="point">A</div>
              <div className="from-map"><a href="#">Показать на карте</a></div>
              <img src={arrowDown} alt="" />
            </div>

            <div className="fromto-conteiner">
              <input type="text" />
              <div className="description">Откуда</div>
              <img src={arrowDown} alt="" />
            </div>

            <div className="fromto-conteiner">
              <input type="text" />
              <div className="description">Откуда</div>
              <div className="point">Б</div>
              <div className="final-price">Цена:<span>12 500 руб</span></div>
            </div>
          </div>

          <div className="additional-data">
            <a className="additional-data-title" href="#">Дополнительные услуги<span><img src={arrowTriangle} alt="" /></span></a>
            <p className="additional-data-description">Вода, табличка, детское кресло</p>
          </div>

          <div className="comments">
            <p>Коментарии:</p>
            <textarea />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersBlockDetails