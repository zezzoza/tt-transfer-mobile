import "./itemAccountChange.scss"

const ItemAccountChange = () => {
  return (
    <form className="item-account-wrapper">
      <div className="item-account-field ">
        <p>Старый пароль</p>
        <input className="padding-right" type="password" name="" id="" />
        <div className="show-password">Показать</div>
      </div>

      <div className="item-account-field">
        <p>Новый пароль</p>
        <input type="password" name="" id="" />
      </div> 

      <div className="item-account-field">
        <p>Повторите пароль</p>
        <input type="password" name="" id="" />
      </div>
    </form>
  )
}

export default ItemAccountChange