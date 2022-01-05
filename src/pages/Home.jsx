import React from 'react';
import Card from "../components/Card/Card";

const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddItemToCart, onAddFavoriteItem, isLoading}) => {

    const renderItems = () => {
        const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? Array(8).fill(0) : filteredItems).map((item) =>
                <Card name={item.name} imageUrl={item.imageUrl} price={item.price} id={item.id} key={item.id}
                      onPlusClick={onAddItemToCart} isLoading={isLoading} onFavoritesClick={onAddFavoriteItem}/>
        )
    }

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
                {renderItems()}
            </div>
        </div>
    );
};

export default Home;