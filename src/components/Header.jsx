import React, {useContext} from 'react';
import logo from "../img/logo.png";
import cartIcon from "../img/cart.svg";
import profileIcon from "../img/profile.png";
import {Link} from "react-router-dom";
import {store} from "../App";

function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Header = (props) => {
    const { cartItems } = useContext(store)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return (
        <header className="d-flex justify-between align-center p-40">

            <Link to="/">
            <div className="d-flex align-center">
                <img src={logo} width={40} height={40}/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            </Link>

            <ul className="d-flex align-center">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img src={cartIcon} width={18} height={18} alt="Cart"/>
                    <span>{numberWithSpaces(totalPrice)} руб.</span>
                </li>
                <li className="mr-10 cu-p">
                    <Link to="/favorites">
                    <img src="/images/favorites.svg" width={18} height={18} alt="Favorites"/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img src={profileIcon} width={18} height={18} alt="Orders"/>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;