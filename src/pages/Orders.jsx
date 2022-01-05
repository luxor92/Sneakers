import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import axios from "axios";
import {store} from "../App";

const Orders = () => {
    const {onAddItemToCart, onAddFavoriteItem} = useContext(store)
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get("https://61d3322cb4c10c001712b857.mockapi.io/orders")
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (e) {
                alert('Ошибка при запросе заказа')
            }
        })()
    }, [])

    return (
        <div>
            <div className="content p-40 mb-10">
                <h1>Мои заказы</h1>
            </div>

            <div className="d-flex flex-wrap ml-40">
                { (isLoading ? [...Array(8)] : orders).map((item) =>
                    <Card name={item.name} imageUrl={item.imageUrl} price={item.price} id={item.id} key={item.id}
                          isLoading={isLoading}/>
                )}
            </div>
        </div>
    );
};

export default Orders;