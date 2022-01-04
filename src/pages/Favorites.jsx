import React from 'react';
import Card from "../components/Card/Card";

const Favorites = ({ items, onAddFavoriteItem }) => {
    return (
        <div>
            <h1>Мои закладки</h1>
            <div className="d-flex flex-wrap">
                {items
                    .map((obj) =>
                        <Card name={obj.name} imageUrl={obj.imageUrl} price={obj.price} id={obj.id}
                              key={obj.id} favorited={true} onFavoritesClick={onAddFavoriteItem}/>
                    )}
            </div>
        </div>
    );
};

export default Favorites;