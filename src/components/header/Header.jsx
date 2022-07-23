import Burger from "./burger/Burger"
import "./header.scss"
import IconProfile from "./iconProfile/IconProfile"
import SearchField from "./searchField/SearchField"

const Header = () => {
  return (
    <>
      <div className="header">
        <Burger />
        <SearchField />
        <IconProfile />
      </div>
    </>
  )
}

export default Header