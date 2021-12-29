import React from 'react';
import plusIcon from "../img/plus.svg";

const Card = () => {
    return (
        <div className="d-flex">
            <div className="card">
                <div className="favorite">
                    <img src="/images/favorites_off.svg" alt="Unliked"/>
                </div>
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
    );
};

export default Card;