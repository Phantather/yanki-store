import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Checkout = () => {

    const {user, cart} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    console.log(user)
    const navigate = useNavigate()

    const addOrder = (data) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, {
            orders: [
                ...user.orders,
                {
                    ...data,
                    ...data,
                    clothes: cart,
                    price: cart.reduce((acc, rec) => {
                        return acc + rec.price * rec.count
                    },0)
                }
            ]
        }).then((res) => alert('Заказ оформлен'))
        reset()
        navigate('/')
    }

    return (
        <section className="checkout">
            <div className="container">
                <form
                    className="checkout__form"
                    onSubmit={handleSubmit(addOrder)}
                >
                    <div className="checkout__form-block">
                        <input
                            type="text"
                            placeholder="Имя заказчика"
                            {...register('name')}
                            className="checkout__form-flied"
                        />
                        <input
                            type="email"
                            placeholder="Email заказчика"
                            {...register('email')}
                            className="checkout__form-flied"
                        />
                        <input
                            type="text"
                            placeholder="Адрес заказчика"
                            {...register('address')}
                            className="checkout__form-flied"
                        />
                    </div>
                    <div className="checkout__form-block">
                        <ul className="checkout__form-list">
                            {
                                cart.map((item) => (
                                    <li className="checkout__form-item">
                                        <h2 className="catalog__card-title">
                                            {item.title}
                                        </h2>
                                        <p className="catalog__card-price">
                                            {item.price} $
                                        </p>
                                        <p className="catalog__card-count">
                                            {item.count}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <p>
                            Итого:
                            {
                                cart.reduce((acc,rec) => {
                                    return acc + rec.price * rec.count
                                },0)
                            }
                            $
                        </p>
                        <button className="checkout__form-btn" type={"submit"}>
                            Оформить
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;