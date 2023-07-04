import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import {Link} from "react-router-dom";
import {BiTrash} from "react-icons/bi"

const Cart = () => {

    const {cart, deleteCart} = useContext(CustomContext)
    setInterval(() => {
        console.log(cart)
    },3000)
    return (
        <section style={{paddingTop: '100px', paddingBottom: '100px'}}>
            <div className="container">
                {
                    cart.length ?
                    cart.map(item => (
                        <div className="catalog__card">
                            <Link to={`/product/${item.id}`}>
                                <img src={item.img[0]} alt="" className="catalog__card-img"/>
                            </Link>
                            <h2 className="catalog__card-title">{item.title}</h2>
                            <p className="catalog__card-price">{item.price}</p>
                            <div className="catalog__card-sizes">
                                <p className="catalog__card-size">{item.size}</p>
                            </div>
                            <div className="catalog__card-colors">
                                <p className="catalog__card-color" style={{background: item.color}}></p>
                            </div>
                            <p className='catalog__count'>кол-во: {item.count}</p>
                            <button className='catalog__card-btn' onClick={() => deleteCart(item.id)}><BiTrash/></button>
                        </div>

                    )) :
                        <h2 className="catalog__fav">Cart is empty</h2>
                }
            </div>
        </section>
    );
};

export default Cart;