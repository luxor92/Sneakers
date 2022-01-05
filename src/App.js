import React, {createContext, useEffect, useState} from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

/*const sneakers = [
    {
        "id": 1,
        "name": "Мужские кроссовки Nike Blazer Mid Suite",
        "price": 12299,
        "imageUrl": "/images/sneakers_01.jpg"
    },
    {
        "id": 2,
        "name": "Мужские кроссовки Nike Air Max 270",
        "price": 10500,
        "imageUrl": "/images/sneakers_02.jpg"
    },
    {
        "id": 3,
        "name": "Мужские кроссовки Puma Italy",
        "price": 8699,
        "imageUrl": "/images/sneakers_03.jpg"
    },
    {
        "id": 4,
        "name": "Мужские кроссовки Adidas Porsche Design",
        "price": 11999,
        "imageUrl": "/images/sneakers_04.jpg"
    },
    {
        "id": 5,
        "name": "Мужские кроссовки Nike Running Trail",
        "price": 10999,
        "imageUrl": "/images/sneakers_05.jpg"
    },
    {
        "id": 6,
        "name": "Мужские кроссовки New Balance P75",
        "price": 8999,
        "imageUrl": "/images/sneakers_06.jpg"
    },
    {
        "id": 7,
        "name": "Мужские кроссовки Le Coq Sportif High Sky",
        "price": 9999,
        "imageUrl": "/images/sneakers_07.jpg"
    },
]*/
export const store = createContext({})

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            // setIsLoading(true)
            const cartResponse = await axios.get("https://61d3322cb4c10c001712b857.mockapi.io/cart")
            const favoritesResponse = await axios.get("https://61d3322cb4c10c001712b857.mockapi.io/favorites")
            const itemsResponse = await axios.get("https://61d3322cb4c10c001712b857.mockapi.io/items")

            setIsLoading(false)
            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData()
        /*        axios.get("https://61d3322cb4c10c001712b857.mockapi.io/items")
                    .then(function (response) {
                        setItems(response.data)
                    });
                axios.get("https://61d3322cb4c10c001712b857.mockapi.io/cart")
                    .then((response) => {
                        setCartItems(response.data)
                    });
                axios.get("https://61d3322cb4c10c001712b857.mockapi.io/favorites")
                    .then((response) => {
                        setFavorites(response.data)*/
    }, [])
    const onAddItemToCart = (newSneakerInCart) => {
        try {
            if (cartItems.find(addedItem => Number(addedItem.id) === Number(newSneakerInCart.id))) {
                setCartItems((prev) => prev.filter((addedItem) => Number(addedItem.id) !== Number(newSneakerInCart.id)))
                axios.delete(`https://61d3322cb4c10c001712b857.mockapi.io/cart/${Number(newSneakerInCart.id)}`);
            } else {
                setCartItems((prev) => [...prev, newSneakerInCart])
                axios.post("https://61d3322cb4c10c001712b857.mockapi.io/cart", newSneakerInCart)
            }
        } catch (e) {
            alert("Не удалось добавить товар в корзину")
        }
    }
    const onRemoveItemFromCart = (id) => {
        try {
            setCartItems((prev) => prev.filter(item => item.id !== id))
            axios.delete(`https://61d3322cb4c10c001712b857.mockapi.io/cart/${id}`)
        }
        catch (e) {
            alert("Не удалось удалить элемент из корзины")
        }
    }
    const onAddFavoriteItem = async (item) => {
        try {
            if (favorites.find(favitem => Number(favitem.id) === Number(item.id))) {
                axios.delete(`https://61d3322cb4c10c001712b857.mockapi.io/favorites/${item.id}`)
                setFavorites((prev) => prev.filter((obj) => obj.id !== item.id))
            } else {
                const {data} = await axios.post("https://61d3322cb4c10c001712b857.mockapi.io/favorites", item);
                setFavorites((prev) => [...prev, data])
            }
        } catch (e) {
            alert('Не удалось добавить в избранное')
        }
    }
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id))
    }


    return (
        <store.Provider value={{items, cartItems, favorites, isItemAdded, onAddFavoriteItem, setCartOpened,
            setCartItems, onAddItemToCart}}>
            <div className="wrapper clear">
                <Drawer onCloseCart={() => setCartOpened(false)} cartItems={cartItems} onRemove={onRemoveItemFromCart}
                        opened={cartOpened}/>
                <Header onClickCart={() => setCartOpened(true)}/>
                <Routes>
                    <Route path="/"
                           element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue}
                                          onAddItemToCart={onAddItemToCart} cartItems={cartItems}
                                          onChangeSearchInput={onChangeSearchInput}
                                          onAddFavoriteItem={onAddFavoriteItem} isLoading={isLoading}/>}/>
                    <Route path="/favorites" element={<Favorites />}/>
                    <Route path="/orders" element={<Orders />}/>
                </Routes>
            </div>
        </store.Provider>
    );
}


export default App;
