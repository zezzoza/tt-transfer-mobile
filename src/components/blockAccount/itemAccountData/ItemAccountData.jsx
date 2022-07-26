import "./itemAccountData.scss"

const ItemAccountData = () => {
  return (
    <form className="item-account-wrapper">
      <div className="item-account-field">
        <p>Логин (e-mail)</p>
        <input type="text" name="" id="" />
      </div>

      <div className="item-account-field">
        <p>Номер телефона</p>
        <input type="text" name="" id="" />
      </div> 

      <div className="item-account-field">
        <p>Фамилия</p>
        <input type="text" name="" id="" />
      </div>
       
      <div className="item-account-field">
        <p>Имя</p>
        <input type="text" name="" id="" />
      </div>
       
      <div className="item-account-field">
        <p>Отчество</p>
        <input type="text" name="" id="" />
      </div>
    </form>
  )
}

export default ItemAccountData