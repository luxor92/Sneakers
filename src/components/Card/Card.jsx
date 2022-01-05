import React, {useContext, useEffect, useState} from 'react';
import plusIcon from "../../img/button_plus.svg";
import addedIcon from "../../img/button_checked.svg"
import styles from "./Card.module.scss";
import Preloader from "../Preloader";
import {store} from "../../App";

// Добавление разрядности числу
function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Card = ({id, imageUrl, price, name, onFavoritesClick, onPlusClick, favorited = false, isLoading = false}) => {
    const { isItemAdded } = useContext(store)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const handleAddClickItem = () => {
        onPlusClick({name, imageUrl, price, id})
    }
    const onCLickFavorite = () => {
        onFavoritesClick({name, imageUrl, price, id})
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>

            {isLoading
                ? <Preloader/>
                : <>
                    <div className={styles.favorite} onClick={onCLickFavorite}>
                        <img src={isFavorite ? "/images/favorites_on.svg" : "/images/favorites_off.svg"} alt="Unliked"/>
                    </div>
                    <img src={imageUrl} alt={name} width={133} height={112}/>
                    <h5>{name}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{numberWithSpaces(price)} руб.</b>
                        </div>
                        <img className={styles.plus} src={isItemAdded(id) ? addedIcon : plusIcon}
                             alt="plus" onClick={handleAddClickItem}/>
                    </div>
                </>
            }
        </div>
    );
};

export default Card;