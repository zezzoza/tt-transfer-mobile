import "./newPassword.scss"

const NewPassword = () => {
  return (
    <div className="wrap-of-login wrap-of-login-conteiner">
      <div className="login-fields login-fields-conteiner">
        <h1 className="login-title">Новый пароль отпавлен на Ваш e-mail</h1>

        <div className="login-button">
          <input type="submit" className="submit-button" value="Страница входа" />
        </div>
      </div>
    </div>
  )
}

export default NewPassword