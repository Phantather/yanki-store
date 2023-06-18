import React from 'react';

const Card = ({item}) => {


    return (
        <div className="catalog__card">
            <img src={item.img[0]} alt="" className="catalog__card-img"/>
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