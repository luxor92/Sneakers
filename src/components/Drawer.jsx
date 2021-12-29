import React from 'react';

const Drawer = () => {
    return (
        <div className="overlay" style={{display: 'none'}}>
            <div className="drawer">
                <h2 className="mb-20 d-flex justify-between">Корзина
                    <img src="/images/button_remove.svg" alt="Remove" className="removeItemBtn cu-p"/></h2>

                <div className="items" style={{flex: 1}}>
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg"
                             style={{backgroundImage: "url('/images/sneakers_01.jpg')"}}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки Nike Airmax 720</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/images/button_remove.svg" alt="Remove" className="removeItemBtn"/>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg"
                             style={{backgroundImage: "url('/images/sneakers_02.jpg')"}}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки Adidas Crossover N75</p>
                            <b>15 699 руб.</b>
                        </div>
                        <img src="/images/button_remove.svg" alt="Remove" className="removeItemBtn"/>
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex align-end mb-20">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 598 руб.</b>
                        </li>
                        <li className="d-flex align-end mb-20">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1 075 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ
                        <img src="/images/arrow.svg" alt="payment"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;