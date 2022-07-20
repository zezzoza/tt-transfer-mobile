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
                <div class="register-fields-title">Регистрация</div>
                <div class="register-fields-description">Создайте аккаунт Трансфер и получите все необходимые инструменты эффективного управления бизнесом! У вас уже есть аккаунт Трансфер?
                    <Link to="/login" style={{ textDecoration: "none", color: "#6d9bee" }}>
                        Войти в аккаунт
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration