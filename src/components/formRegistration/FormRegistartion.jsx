import "./formRegistration.scss"
import { Link, useNavigate } from "react-router-dom";

const FormRegistration = () => {
  return (
    <div className="wrap-of-login">
      <div className="login-fields">
        <h1 className="login-title">Войдите в свой аккаунт</h1>
        <div className="login-sub-tittle">
          У вас еще нет аккаунта Трансфер?
          <Link to="/register" style={{ textDecoration: "none", color: "#6d9bee", display: "block" }}>
            Создайте аккаунт
          </Link>
        </div>

        <form action="">
          <div className="input-wrapper">
            <input type="text" class="input" placeholder="E mail" name="email" />
          </div>
          <div className="input-wrapper">
            <input type="password" class="input" placeholder="Пароль" name="password" />
          </div>
          <div className="login-button">
            <input type="submit" class="submit-button" value="Войти" />
            <Link to="/reset-password">
              <div class="reset-password">Забыли пароль?</div>
            </Link>
          </div>
        </form>

        <div class="save-auth">
          <input type="checkbox" />
          <label>Запомнить меня?</label>
        </div>
      </div>
    </div>
  )
}

export default FormRegistration