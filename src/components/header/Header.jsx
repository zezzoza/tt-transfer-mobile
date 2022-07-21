import Burger from "./burger/Burger"
import "./header.scss"

const Header = () => {
  return (
    <>
      <div className="header">
        <Burger />
      </div>
      <div className="header-wrapper"></div>
    </>
  )
}

export default Header