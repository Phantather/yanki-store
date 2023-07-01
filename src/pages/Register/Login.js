import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {CustomContext} from "../../utils/Context";
import {useForm} from "react-hook-form";
import axios from "axios";

const Login = () => {
    const {user, setUser} = useContext(CustomContext)
    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const registerUser = (data) => {
        axios.post("http://localhost:8080/login", {...data, orders: []})
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
                            {...register('password')}
                            type="password"
                            className="register__form-field"
                            placeholder="Ваш пароль*"
                        />
                    </label>
                    <button className="register__form-btn" type="submit">
                        Войти
                    </button>
                    <div>
                        <Link className="register__form-link" to={"/register"}>
                            Создать аккаунт
                        </Link>
                    </div>


                </form>
            </div>
        </section>
    );
};

export default Login;