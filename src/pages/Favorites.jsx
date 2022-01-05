import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import {store} from "../App";

const Favorites = () => {
    const { favorites, onAddFavoriteItem } = useContext(store)
    return (
        <div>
            <div className="content p-40 mb-40">
            <h1>Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {favorites
                    .map((obj) =>
                        <Card name={obj.name} imageUrl={obj.imageUrl} price={obj.price} id={obj.id}
                              key={obj.id} favorited={true} onFavoritesClick={onAddFavoriteItem}/>
                    )}
            </div>
        </div>
    );
};

export default Favorites;