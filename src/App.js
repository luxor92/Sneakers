import './App.css';
import React from "react";
import logo from "./img/logo.png";
import cartIcon from "./img/cart.svg";
import profileIcon from "./img/profile.png";
import plusIcon from "./img/plus.svg";

function App() {
    return (
        <div className="wrapper clear">

            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img src={logo} width={40} height={40}/>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-1">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img src={cartIcon} width={18} height={18}/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src={profileIcon} width={18} height={18}/>
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <h1 className="mb-40">Все кроссовки</h1>

                <div className="d-flex">
                    <div className="card">
                        <img src="/images/sneakers_01.jpg" alt="Nike Blazer Mid Suite" width={133} height={112}/>
                        <h5>Мужские кроссовки Nike Blazer Mid Suite</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={plusIcon} alt="plus" width={11} height={11}/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/sneakers_02.jpg" alt="Nike Blazer Mid Suite" width={133} height={112}/>
                        <h5>Мужские кроссовки Nike Blazer Mid Suite</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={plusIcon} alt="plus" width={11} height={11}/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/sneakers_03.jpg" alt="Nike Blazer Mid Suite" width={133} height={112}/>
                        <h5>Мужские кроссовки Nike Blazer Mid Suite</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={plusIcon} alt="plus" width={11} height={11}/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/sneakers_04.jpg" alt="Nike Blazer Mid Suite" width={133} height={112}/>
                        <h5>Мужские кроссовки Nike Blazer Mid Suite</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img src={plusIcon} alt="plus" width={11} height={11}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
