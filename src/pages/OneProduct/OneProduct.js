import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CustomContext} from "../../utils/Context";

const OneProduct = () => {

    const {id} = useParams()

    const {getOneProduct, product, addCart, favorites, addFavorites, deleteFavorites} = useContext(CustomContext)
    const [data,setData] = useState({
        title: "",
        price: "",
        size: "",
        color:"",
        id: "",
        img:[

        ]
    })
    useEffect(() => {
        getOneProduct(id)
    },[data])


    const handlerChangeSize = (e) => {
        setData({...data,size: e.target.value,title: product.title,price: product.price,img:[...product.img]})

    }
    const handlerChangeColor = (color) => {
        setData({...data,color: color,id:product.id + data.size + color})
    }
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
                                        onClick={() => handlerChangeColor(el.color)}

                                        key={el.id}
                                        className="catalog__card-color"
                                        style={{background: el.color,width:`${data.color === el.color ? "25px" : "20px"}`,height: `${data.color === el.color ? "25px" : "20px"}`}}
                                    />
                                ))
                            }
                        </div>
                        <select onChange={handlerChangeSize} value={product.size}  className="product__select">
                            <option disabled  value="all">Выберите размер</option>
                            {
                                product.sizes &&
                                product.sizes.map((item,idx) => (
                                        <option key={item.id}  value={item.size}>
                                            {item.size}
                                        </option>
                                    )
                                )
                            }
                        </select>
                        <div className="product__btns">
                            <button disabled={data?.size?.length && data?.color?.length ? false : true} className="product__btn"
                                    onClick={() => addCart(data)}
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