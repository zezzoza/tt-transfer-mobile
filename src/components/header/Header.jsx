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
      <div className="header-wrapper"></div>
    </>
  )
}

export default Header