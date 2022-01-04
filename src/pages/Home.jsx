import React from 'react';
import Card from "../components/Card/Card";

const Home = ({ items, searchValue, setSearchValue, onChangeSearchInput, onAddItemToCart, onAddFavoriteItem }) => {
    return (
        <div className="content p-40">
            <div className="d-flex justify-between align-center mb-40">
                <h1>{searchValue ? `Поиск по "${searchValue}"` : "Все кроссовки"}</h1>
                <div className="search-block d-flex">
                    <img src="/images/search.svg" alt="Search"/>
                    {searchValue && <img src="/images/button_remove.svg" alt="Clear" className="clear cu-p"
                                         onClick={() => setSearchValue('')}/>}
                    <input placeholder="Поиск" onChange={onChangeSearchInput} value={searchValue}/>
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {items
                    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((obj) =>
                        <Card name={obj.name} imageUrl={obj.imageUrl} price={obj.price} id={obj.id}
                              key={obj.id}
                              onPlusClick={onAddItemToCart}
                              onFavoritesClick={onAddFavoriteItem}/>
                    )}
            </div>
        </div>
    );
};

export default Home;