import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import {Link} from "react-router-dom";
import {BiTrash} from "react-icons/bi"

const Favorites = () => {

    const {favorites, setFavorites, deleteFavorites} = useContext(CustomContext)

    return (
        <section style={{paddingTop: '100px', paddingBottom: '100px'}}>
            <div className="container">

                {
                    favorites.length ?
                        favorites.map(item => (
                            <div className="catalog__card">
                                <Link to={`/product/${item.id}`}>
                                    <img src={item.img[0]} alt="" className="catalog__card-img"/>
                                </Link>
                                <h2 className="catalog__card-title">{item.title}</h2>
                                <p className="catalog__card-price">{item.price}</p>
                                <div className="catalog__card-sizes">
                                    {
                                        item.sizes.map((el) => (
                                            <p key={el.id} className="catalog__card-size">{el.size}</p>

                                        ))
                                    }
                                </div>
                                <div className="catalog__card-colors">
                                    {
                                        item.colors.map((el) => (
                                            <p key={el.id} className="catalog__card-color" style={{background: el.color}}></p>
                                        ))
                                    }
                                </div>
                                <button className="catalog__card-btn" onClick={() => deleteFavorites(item.id)}><BiTrash/></button>
                            </div>
                        )) :
                        <h2 className="catalog__fav">Favorites are empty</h2>
                }
            </div>
        </section>
    );
};

export default Favorites;

// <div className="catalog__card">
//     <Link to={`/product/${item.id}`}>
//         <img src={item.img[0]} alt="" className="catalog__card-img"/>
//     </Link>
//     <h2 className="catalog__card-title">{item.title}</h2>
//     <p className="catalog__card-price">{item.price}</p>
//     <div className="catalog__card-sizes">
//         {
//             item.sizes.map((el) => (
//                 <p key={el.id} className="catalog__card-size">{el.size}</p>
//
//             ))
//         }
//     </div>
//     <div className="catalog__card-colors">
//         {
//             item.colors.map((el) => (
//                 <p key={el.id} className="catalog__card-color" style={{background: el.color}}></p>
//             ))
//         }
//     </div>
// </div>