import BlockActivityFeed from "../../components/blockActivityFeed/BlockActivityFeed"
import FooterActivityFeed from "../../components/footerActivityFeed/FooterActivityFeed"
import Header from "../../components/header/Header"
import "./activityFeed.scss"

const ActivityFeed = () => {
  return (
    <div className="page-view">
      <div className="header-table">
        <Header />
      </div>

      <div className="main-table">
        <BlockActivityFeed />
      </div>

      <div className="footer-table">
        <FooterActivityFeed />
      </div>
    </div>
  )
}

export default ActivityFeed