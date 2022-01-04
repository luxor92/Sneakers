import React from 'react';

const Drawer = ({onCloseCart, cartItems = [], onRemove}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-20 d-flex justify-between">Корзина
                    <img src="/images/button_remove.svg" alt="Close" className="removeItemBtn cu-p"
                         onClick={onCloseCart}/></h2>

                {cartItems.length > 0
                    ? <div>
                        <div className="items" style={{flex: 1}}>

                            {cartItems.map((item) =>
                                <div className="cartItem d-flex align-center mb-20" key={item.id}>
                                    <div className="cartItemImg"
                                         style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{item.name}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <img src="/images/button_remove.svg" alt="Remove" className="removeItemBtn"
                                         onClick={() => onRemove(item.id)}/>
                                </div>
                            )
                            }
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

                    :

                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width={120} height={120} src={"/images/empty-cart.jpg"} alt="Empty"/>
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте, хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className="greenButton" onClick={onCloseCart}>
                            <img src="/images/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>}

            </div>
        </div>
    );
};

export default Drawer;