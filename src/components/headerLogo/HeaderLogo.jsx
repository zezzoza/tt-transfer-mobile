import React from 'react'
import logo from "../../assets/Логотип.svg"
import "./headerLogo.scss"

const HeaderLogo = () => {
	return (
		<header>
			<img src={logo} className="headerlogo"/>
		</header>
	)
}

export default HeaderLogo