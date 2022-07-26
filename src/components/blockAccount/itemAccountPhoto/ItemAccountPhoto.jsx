import "./itemAccountPhoto.scss"
import profileAvatar from "../../../assets/выа.jpg" /* путь к аватарке */

const ItemAccountPhoto = () => {
  return (
    <div className="item-account-wrapper">
      <div className="profile-avatar">
        <img src={profileAvatar} alt="" />
        <p>Загрузить аватарку</p>
      </div>
    </div>
  )
}

export default ItemAccountPhoto