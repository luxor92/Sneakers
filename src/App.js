import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


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

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])


    useEffect(() => {
        axios.get("https://61d3322cb4c10c001712b857.mockapi.io/items")
            .then(function (response) {
                setItems(response.data)
            });
        axios.get("https://61d3322cb4c10c001712b857.mockapi.io/cart")
            .then((response) => {
                setCartItems(response.data)
            });
        axios.get("https://61d3322cb4c10c001712b857.mockapi.io/favorites")
            .then((response) => {
                setFavorites(response.data)
            })
    }, [])

    const onAddItemToCart = (NewSneakerInCart) => {
        axios.post("https://61d3322cb4c10c001712b857.mockapi.io/cart", NewSneakerInCart);
        setCartItems((prev) => [...prev, NewSneakerInCart])
    }
    const onRemoveItemFromCart = (id) => {
        console.log(id)
        axios.delete(`https://61d3322cb4c10c001712b857.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddFavoriteItem = async (item) => {
        try {
            if (favorites.find(favitem => favitem.id === item.id)) {
                axios.delete(`https://61d3322cb4c10c001712b857.mockapi.io/favorites/${item.id}`)
                // setFavorites((prev) => prev.filter((obj) => obj.id !== item.id))
            } else {
                const {data} = await axios.post("https://61d3322cb4c10c001712b857.mockapi.io/favorites", item);
                setFavorites((prev) => [...prev, data])
            }
        }
        catch (e) {
            alert('Не удалось добавить в избранное')
        }
    }
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)} cartItems={cartItems}
                                   onRemove={onRemoveItemFromCart}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <Routes>
                <Route path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue}
                                               onAddItemToCart={onAddItemToCart}
                                               onChangeSearchInput={onChangeSearchInput}
                                               onAddFavoriteItem={onAddFavoriteItem}/>}/>
                <Route path="/favorites" element={<Favorites items={favorites} onAddFavoriteItem={onAddFavoriteItem}/>}/>
            </Routes>

        </div>
    );
}


export default App;
