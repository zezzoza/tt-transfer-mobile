import "./ordersMainTable.scss"
import arrow from "../../../assets/Arrow 4.svg"
import { Link } from "react-router-dom"

const OrdersMainTable = () => {
  return (
    <>
      <table className="orders-points-conteiner">
        <tr className="orders-points">
          <td className="orders-column-1" >Маршрут</td>
          <td className="orders-column-2" >Дата</td>
          <td className="orders-column-3" >Время</td>
          <td className="orders-column-4" >Пункт отправления</td>
        </tr>
      </table>

      <div className="main-table">
      <div className="orders-grid-fields">
        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields complete">
                {/* complete - стили для выполненного заказа */}
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>
          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                {/* complete - стили для выполненного заказа */}
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Москва</div>
                    <img src={arrow} alt="" />
                    <div>Санкт Петербург</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time red">
                    {/* red - красное время */}
                    <div>15:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>

        <div className="orders-table-conteiner">
          <Link to={"/details"}>
            <table className="orders-infofields-conteiner">
              <tr className="orders-infofields">
                <td className="orders-column-1" >
                  <div className="from-to">
                    <div>Оренбург</div>
                    <img src={arrow} alt="" />
                    <div>Самара</div>
                  </div>
                </td>
                <td className="orders-column-2" >
                  <div className="date">
                    <div>02.04.22</div>
                  </div>
                </td>
                <td className="orders-column-3" >
                  <div className="time">
                    <div>14:30</div>
                  </div>
                </td>
                <td className="orders-column-4" >
                  <div className="departure-point">
                    <div>г.Оренбург, ул Салмышская д36</div>
                  </div>
                </td>
              </tr>
            </table>
          </Link>

          <div className="line-between-tr"></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default OrdersMainTable