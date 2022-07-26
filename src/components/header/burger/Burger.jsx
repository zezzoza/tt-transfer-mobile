import "./burger.scss"
import logo from "../../../assets/ЛогоБургер.svg"
import burger from "../../../assets/Бургер.svg"
import iconNews from "../../../assets/icons8-rss-news.svg"
import iconOrders from "../../../assets/icons8-rss-orders-green.svg"
import iconWheel from "../../../assets/icons8-руль.svg"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"

const Burger = () => {

  const [isVisibleBurger, setVisibleBurger] = useState(false)
  const handleVisibilityBurger = () => setVisibleBurger(!isVisibleBurger)

  return (
    <div className="burger-wrapper">
      <AnimatePresence>
        {
          isVisibleBurger && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              exit={{ width: 0 }}
              style={{ overflow: 'hidden' }}
              transition={{ duration: 0.2 }}
            >
              <div className="burger-list">
                <img src={logo} alt="" srcset="" className="burger-logo" />

                <Link to="/activity-feed">
                  <div className="burger-item-conteiner">
                    <div className="burger-icon-conteiner">
                      <img src={iconNews} className="burger-icon-point" alt="" srcset="" />
                    </div>

                    <div className="burger-point">Лента активности</div>
                  </div>
                </Link>

                <Link to="/orders">
                  <div className="burger-item-conteiner active-burger-item-list">
                    {/* active-burger-item-list это активная менюшка у бургера */}
                    <div className="burger-icon-conteiner">
                      <img src={iconOrders} className="burger-icon-point" alt="" srcset="" />
                    </div>

                    <div className="burger-point">Заказать</div>
                  </div>
                </Link>

                <Link to="/history">
                  <div className="burger-item-conteiner">
                    <div className="burger-icon-conteiner">
                      <img src={iconWheel} className="burger-icon-point" alt="" srcset="" />
                    </div>

                    <div className="burger-point">Список заказов</div>
                  </div>
                </Link>

                <div className="CRMsystem">
                  @ CRM система TT-transfer
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>

      <div className="icon-burger-conteiner"
        onClick={handleVisibilityBurger}>
        <img src={burger} className="icon-burger" alt="" srcset="" />
      </div>
    </div>
  )
}

export default Burger