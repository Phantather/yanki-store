import React from 'react';
import {Link} from "react-router-dom";

const Card = ({item}) => {


    return (
        <div className="catalog__card">
            <Link to={`/product/${item.id}`}>
                <img src={item.img[0]} alt="" className="catalog__card-img"/>
            </Link>
            <h2 className="catalog__card-title">
                {item.title}
            </h2>
            <p className="catalog__card-price">
                {item.price} $
            </p>
            <div className="catalog__card-sizes">
                {
                    item.sizes.map((el) => (
                        <p key={el.id} className="catalog__card-size">
                            {el.size}
                        </p>
                    ))
                }
            </div>
            <div className="catalog__card-colors">
                {
                    item.colors.map((el) => (
                        <p
                            key={el.id}
                           className="catalog__card-color"
                           style={{background: el.color}}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default Card;