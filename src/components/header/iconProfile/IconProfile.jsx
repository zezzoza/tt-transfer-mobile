import "./iconProfile.scss"
import iconT from "../../../assets/Т.svg"
import { Link, useNavigate } from "react-router-dom";

const IconProfile = () => {
  return (
    <Link to="/profile">
      <div className="icon-profile-wrapper" >
        <div className="icon-profile-conteiner">
          <img src={iconT} className="icon-profile-T" alt="" srcset="" />
        </div>
      </div>
    </Link>
  )
}

export default IconProfile