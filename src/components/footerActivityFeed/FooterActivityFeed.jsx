import "./footerActivityFeed.scss"
import iconHome from "../../assets/icons8-главная-50 1.png"
import iconPoint from "../../assets/icons8-главная-50 2.png"
import iconTimeList from "../../assets/icons8-главная-50 3.png"
import iconProfile from "../../assets/icons8-главная-50 4.png"
import iconExit from "../../assets/icons8-главная-50 5.png"
import { Link } from "react-router-dom"

const FooterActivityFeed = () => {
  return (
    <div className="footer-activity-feed-wrapper">
      <div className="icon-footer-conteiner">
        <Link to="#">
          {/* нужно вставить ссылку */}
          <div className="icon-footer">
            <img src={iconHome} alt="" />
          </div>
        </Link>

        <Link to="#">
          {/* нужно вставить ссылку */}
          <div className="icon-footer">
            <img src={iconPoint} alt="" />
          </div>
        </Link>

        <Link to="#">
          {/* нужно вставить ссылку */}
          <div className="icon-footer">
            <img src={iconTimeList} alt="" />
          </div>
        </Link>

        <Link to="/profile">
          <div className="icon-footer">
            <img src={iconProfile} alt="" />
          </div>
        </Link>

        <Link to="/login">
          <div className="icon-footer">
            <img src={iconExit} alt="" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FooterActivityFeed