import React from 'react';
import plusIcon from "../../img/plus.svg";
import styles from "./Card.module.scss";

// Добавление разрядности числу
function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Card = (props) => {

    return (
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src="/images/favorites_off.svg" alt="Unliked"/>
                </div>
                <img src={props.imageUrl} alt={props.name} width={133} height={112}/>
                <h5>{props.name}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{numberWithSpaces(props.price)} руб.</b>
                    </div>
                    <button className="button" onClick={props.onClick}>
                        <img src={plusIcon} alt="plus" width={11} height={11}/>
                    </button>
                </div>
        </div>
    );
};

export default Card;