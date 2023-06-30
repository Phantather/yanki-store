import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {CustomContext} from "../../utils/Context";

const OneProduct = () => {

    const {id} = useParams()

    const {getOneProduct, product, addCart, favorites, addFavorites, deleteFavorites} = useContext(CustomContext)

    useEffect(() => {
        getOneProduct(id)
    },[])



    return (
        <section className="product">
            <div className="container">
                <div className="product__row">
                    <div className="product__left">
                        <img src={product.img && `.${product.img[0]}`} alt="" className="product__left-img"/>
                    </div>
                    <div className="product__right">
                        <h2 className="product__title">{product.title}</h2>
                        <p className="product__price">{product.price}$</p>
                        <div className="product__colors">
                            {
                                product.colors &&
                                product.colors.map((el) => (
                                    <p
                                        key={el.id}
                                        className="catalog__card-color"
                                        style={{background: el.color}}
                                    />
                                ))
                            }
                        </div>
                        <select className="product__select">
                            <option disabled value="all">Выберите размер</option>
                            {
                                product.sizes &&
                                product.sizes.map((item,idx) => (
                                        <option value={item.size}>
                                            {item.size}
                                        </option>
                                    )
                                )
                            }
                        </select>
                        <div className="product__btns">
                            <button className="product__btn"
                                    onClick={() => addCart(product)}
                            >
                                В КОРЗИНУ
                            </button>
                            <button className="product__btn"
                                    onClick={() => {
                                        favorites.some(el => el.id === product.id)
                                            ?
                                            deleteFavorites(product.id)
                                            :
                                            addFavorites(product)
                                    }}
                            >
                                В ИЗБРАННОЕ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneProduct;