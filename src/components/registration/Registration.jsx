import "./registration.scss"
import { Link } from "react-router-dom";
import CustomSelect from "../customSelect/CustomSelect";
import { useRef, useState } from "react";
import downArrowSelect from "../../assets/downArrowSelect.svg";
import useOutside from "../../hooks/useOutside";

const Registration = () => {
	const { isShow, setIsShow, ref } = useOutside(false);
	const items = ["Клиент", "Менеджер"];
	const [activeItem, setActiveItem] = useState("Клиент");

	return (
		<div className="register-wrap">
			<div className="header-line"></div>
			<div className="register-fields-wrap">
				<div className="register-fields-title">Регистрация</div>
				<div className="register-fields-description">Создайте аккаунт Трансфер и получите все необходимые инструменты эффективного управления бизнесом! У вас уже есть аккаунт Трансфер?
					<Link to="/login" style={{ textDecoration: "none", color: "#6d9bee" }}>
						&nbsp;Войти в аккаунт
					</Link>
				</div>
				<div className="register-fields-inputs">
					<form action="" className="reg-form">
						<div className="" ref={ref}>
							<div>
								<div
									className="role-class-select"
									onClick={() => setIsShow(!isShow)}
								>
									<div>{activeItem}</div>
									<img src={downArrowSelect} alt="" />
								</div>
							</div>
							<CustomSelect
								items={items}
								isVisible={isShow}
								setVisible={setIsShow}
								setItem={setActiveItem}
								showAll={false}
							/>
						</div>

						<div className="input-wrapper margin-top-15">
							<input
								type={"text"}
								className={"input"}
								placeholder={"Ваша фамилия"} />
						</div>

						<div className="input-wrapper">
							<input
								type={"text"}
								className={"input"}
								placeholder={"Ваше имя"} />
						</div>

						<div className="input-wrapper">
							<input
								type={"text"}
								className={"input"}
								placeholder={"Ваше отчество"} />
						</div>

						<div className="input-wrapper">
							<input
								type={"email"}
								className={"input"}
								placeholder={"E mail"} />
						</div>

						<div className="input-wrapper">
							<input
								type={"text"}
								className={"input"}
								placeholder={"Телефон"} />
						</div>

						<div className="input-wrapper">
							<input
								type={"password"}
								className={"input"}
								placeholder={"Пароль"} />
						</div>

						<div className="input-wrapper">
							<input
								type={"password"}
								className={"input"}
								placeholder={"Повторите пароль"} />
						</div>
						<div className="login-button">
							<input type="submit" value="Регистрация" className="submit-button" />
						</div>
					</form>

					<div className={"accept"}>
						Регистрируясь, вы принимаете{" "}
						<Link to="/" style={{ textDecoration: "none", color: "#6d9bee" }}>
							лицензионное соглашение
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Registration