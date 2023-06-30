import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {CustomContext} from "../../utils/Context";
import axios from "axios";

const Register = () => {


    const {user, setUser} = useContext(CustomContext)
    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const registerUser = (data) => {
        axios.post("http://localhost:8080/register", {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
    }

    return (
        <section className="register">
            <div className="container">
                <form className="register__form"
                      onSubmit={handleSubmit(registerUser)}
                >
                    <h2 className="register__title">
                        Регистрация
                    </h2>
                    <label className="register__form-label">
                        <input
                            {...register('email')}
                            type="email"
                            className="register__form-field"
                            placeholder="Ваш e-mail*"
                        />
                    </label>
                    <label className="register__form-label">
                        <input
                            {...register('login')}
                            type="text"
                            className="register__form-field"
                            placeholder="Ваш логин"
                        />
                    </label>
                    <label className="register__form-label">
                        <input
                            {...register('password')}
                            type="password"
                            className="register__form-field"
                            placeholder="Ваш пароль*"
                        />
                    </label>
                    <button className="register__form-btn" type="submit">
                        Продолжить
                    </button>
                    <Link to={'/'} className="register__form-link">
                        Вернуться на главную страницу
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default Register;