import "./formRegistrationReset.scss"
import { Link, useNavigate } from "react-router-dom";
import arrowRight from "../../assets/arrow-right.png";

const FormRegistrationReset = () => {
  return (
    <div className="wrap-of-login wrap-of-login-conteiner">
      <div className="login-fields">
        <h1 className="login-title">Введите свой e-mail от аккаунта</h1>
        <div className="login-sub-tittle">
          На указанный адрес мы вышлем код для подтверждения восстановления пароля.
        </div>

        <form className="reset-form" action="">
          <div className="reset-input-wrapper">
            <input type="text" className="input" placeholder="E mail" name="email" />
          </div>
          <div className="arrowRightConteiner">
            <img src={arrowRight} alt="" srcset="" />
          </div>
        </form>

        <div className="entry-button">
          <Link to="/login">
            <div className="reset-password">Страница входа</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormRegistrationReset