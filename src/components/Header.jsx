import React from 'react';
import logo from "../img/logo.png";
import cartIcon from "../img/cart.svg";
import profileIcon from "../img/profile.png";

function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img src={logo} width={40} height={40}/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img src={cartIcon} width={18} height={18}/>
                    <span>{numberWithSpaces(1205)} руб.</span>
                </li>
                <li>
                    <img src={profileIcon} width={18} height={18}/>
                </li>
            </ul>
        </header>
    );
};

export default Header;