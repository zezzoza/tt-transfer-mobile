import BlockAccount from "../../components/blockAccount/BlockAccount"
import FooterSave from "../../components/footerSave/FooterSave"
import Header from "../../components/header/Header"
import "./driverPageProfile.scss"

const DriverPageProfile = () => {
  return (
    <div className="page-view">
      <div className="header-table">
        <Header />
      </div>

      <div className="main-table">
        <BlockAccount />
      </div>

      <div className="footer-table">
        <FooterSave />
      </div>
    </div>
  )
}

export default DriverPageProfile