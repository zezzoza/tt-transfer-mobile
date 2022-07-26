import "./itemSend.scss"
import  iconInvestment from "../../../assets/icons8-вложение-50 1.png"
import  iconDog from "../../../assets/@.png"
import  iconUppercase from "../../../assets/Аа.png"

const ItemSend = () => {
  return (
    <div className="item-send-wrapper">
      <p className="send-title">Лента новостей</p>

      <div className="send-textarea-conteiner">
        <textarea name="" id="" cols="30" rows="10" />
        <div className="message active">Сообщение</div>
        {/* active - активное меню */}
        <div className="important-message">Важное сообщение</div>
        <div className="icon-investment">
          <img src={iconInvestment} alt="" />
        </div>
        <div className="icon-uppercase">
          <img src={iconUppercase} alt="" />
        </div>
        <div className="icon-dog">
          <img src={iconDog} alt="" />
        </div>
      </div>

      <div className="send-button">
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default ItemSend