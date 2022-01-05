import React, {useContext} from 'react';
import {store} from "../App";

const Info = ({ title, description, image  }) => {
    const { setCartOpened } = useContext(store)

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={120} height={120} src={ image } alt="Empty"/>
            <h2> { title } </h2>
            <p className="opacity-6"> {description} </p>
            <button className="greenButton" onClick={() => setCartOpened(false)}>
                <img src="/images/arrow.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    );
};

export default Info;