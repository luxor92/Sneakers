import React, {useContext, useState} from 'react';
import Info from "../Info";
import {store} from "../../App";
import axios from "axios";
import styles from "./Drawer.module.scss"

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))
function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Drawer = ({onCloseCart, onRemove, opened}) => {
    const { cartItems, setCartItems } = useContext(store)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)
    const tax = Math.floor(totalPrice * 0.13)
    const [orderId, setOrderId] = useState(null)
    const [isOrderComplete, setIsOrderCompleted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post("https://61d3322cb4c10c001712b857.mockapi.io/orders", {items: cartItems})
            setOrderId(data.id)
            setIsOrderCompleted(true)
            setCartItems([])
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete("https://61d3322cb4c10c001712b857.mockapi.io/cart/" + item.id)
                await delay()
            }
        }
        catch (e) {
            alert("Ошибка при создании заказа")
        }
        setIsLoading(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="mb-20 d-flex justify-between">Корзина
                    <img src="/images/button_remove.svg" alt="Close" className="removeItemBtn cu-p"
                         onClick={onCloseCart}/></h2>

                {cartItems.length > 0
                    ? <div className="d-flex flex-column flex">
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
                                    <b>{numberWithSpaces(totalPrice)} руб.</b>
                                </li>
                                <li className="d-flex align-end mb-20">
                                    <span>Налог 13%:</span>
                                    <div></div>
                                    <b>{numberWithSpaces(tax)} руб.</b>
                                </li>
                            </ul>
                            <button className="greenButton" onClick={onClickOrder} disabled={isLoading}>Оформить заказ
                                <img src="/images/arrow.svg" alt="payment"/>
                            </button>
                        </div>
                    </div>

                    :
                    <Info title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
                          description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан в службу доставки` :"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"}
                          image={isOrderComplete ? "images/completed_order.jpg" : "/images/empty-cart.jpg"}/>
                    }

            </div>
        </div>
    );
};

export default Drawer;