import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const sneakers = [
    {id: 1, name: "Мужские кроссовки Nike Blazer Mid Suite", price: 12299, imageUrl: '/images/sneakers_01.jpg'},
    {id: 2, name: "Мужские кроссовки Nike Air Max 270", price: 10500, imageUrl: '/images/sneakers_02.jpg'},
    {id: 3, name: "Мужские кроссовки Puma Italy", price: 8699, imageUrl: '/images/sneakers_03.jpg'},
    {id: 4, name: "Мужские кроссовки New Balance N90", price: 11999, imageUrl: '/images/sneakers_04.jpg'}
]

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/images/search.svg" alt="Search"/>
                        <input placeholder="Поиск"/>
                    </div>
                </div>

                <div className="d-flex">
                    {sneakers.map((obj) =>
                        <Card name={obj.name} imageUrl={obj.imageUrl} price={obj.price}
                              key={obj.id} onClick={() => console.log(obj)}/>
                        )}
                </div>
            </div>
        </div>
    );
}


export default App;
