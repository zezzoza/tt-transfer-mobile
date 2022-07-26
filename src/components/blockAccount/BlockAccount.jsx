import "./blockAccount.scss"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/Arrow 3.svg"
import ItemAccountData from "./itemAccountData/ItemAccountData";
import ItemAccountChange from "./itemAccountChange/ItemAccountChange";
import ItemAccountPhoto from "./itemAccountPhoto/ItemAccountPhoto";
import activeSettings from "../../assets/icons8-настройки-50.png"
import notActiveSettings from "../../assets/icons8-настройки-50 (1).png"
import activeCastle from "../../assets/icons8-частный-замок-50.png"
import notActiveCastle from "../../assets/icons8-частный-замок-50 (1).png"
import activeCamera from "../../assets/icons8-камера-50.png"
import notActiveCamera from "../../assets/icons8-камера-50 (1).png"
import exit from "../../assets/icons8-выход-50 (1).png"

const BlockAccount = () => {
  const [activeLink, setActiveLink] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="orders-account-wrapper">
      <div className="back-orders header-table">
        <img src={arrow} alt="" />
        <Link to="#" >Вернуться назад</Link>
        {/* нужно вставить ссылку */}
      </div>

      <div className="main-table">
        <div className="profile-tabs">
          <div
            className={`profile-link-item ${activeLink === 0 && "active-1"}`}
            onClick={() => setActiveLink(0)}
          >
            <div className="icon" >
              <img src={activeLink === 0 ? activeSettings : notActiveSettings} alt="" />
            </div>
            <div className="profile-link-item-text">Аккаунт</div>
          </div>

          <div
            className={`profile-link-item ${activeLink === 1 && "active-1"}`}
            onClick={() => setActiveLink(1)}
          >
            <div className="icon">
              <img src={activeLink === 1 ? activeCastle : notActiveCastle} alt="" />
            </div>
            <div className="profile-link-item-text">Изменение пароля</div>
          </div>

          <div
            className={`profile-link-item ${activeLink === 2 && "active-1"}`}
            onClick={() => setActiveLink(2)}
          >
            <div className="icon">
              <img src={activeLink === 2 ? activeCamera : notActiveCamera} alt="" />
            </div>
            <div className="profile-link-item-text">Фотография</div>
          </div>

          <div
            className="profile-link-item"
            onClick={() => navigate("/login")}
          >
            <div className="icon">
              <img src={exit} alt="" />
            </div>
            <div className="profile-link-item-text">Выход из системы</div>
          </div>

          <div className="profile-data">
            {activeLink === 0 && <ItemAccountData />}
            {activeLink === 1 && <ItemAccountChange />}
            {activeLink === 2 && <ItemAccountPhoto />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockAccount