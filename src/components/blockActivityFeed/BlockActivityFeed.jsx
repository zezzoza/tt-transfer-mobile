import "./blockActivityFeed.scss"
import ItemNews from "./itemNews/ItemNews"
import ItemSend from "./itemSend/ItemSend"

const BlockActivityFeed = () => {
  return (
    <div className="activity-feed-wrapper">
      <ItemSend />
      <ItemNews />
    </div>
  )
}

export default BlockActivityFeed