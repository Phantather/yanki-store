import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Card from "../../components/Card/Card";
import Aside from "../../components/Aside/Aside";
import {CustomContext} from "../../utils/Context";

const Catalog = () => {
    const {getAllClothes,setClothes,clothes,category,sort,setSort} = useContext(CustomContext)

    useEffect(() => {
        getAllClothes()
    },[])

    console.log(sort)

    return (
        <section className="catalog">
            <div className="container">

                <div className="catalog__between">
                    <Aside/>
                    <div className="catalog__row">
                        <ul className='catalog__filter'>
                            <li className="catalog__filter-item">
                                Размер
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z" fill="#E0BEA2"/>
                                </svg>

                            </li>
                            <li className="catalog__filter-item">
                                Цвет
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z" fill="#E0BEA2"/>
                                </svg>

                            </li>
                            <li className="catalog__filter-item">
                                Цена
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z" fill="#E0BEA2"/>
                                </svg>

                            </li>
                            <li className="catalog__filter-item">
                                <select onChange={(e) => console.log(e.target)} name="" id="">
                                    <option value="" disabled selected>Сортировать по</option>
                                    <option value="top">по возростанию</option>
                                    <option value="bottom">по убыванию</option>
                                </select>

                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z" fill="#E0BEA2"/>
                                </svg>

                            </li>

                        </ul>
                        {
                            category ? clothes.filter(item => item.category === category).sort((a,b) => {
                                if(sort === "top"){
                                    return a.price - b.price
                                }else if(sort === "bottom"){
                                    return b.price - a.price
                                }
                            }).map((item,idx) => (
                                <Card key={item.id || idx} item={item}/>
                            )) : clothes.sort((a,b) => {
                                if(sort === "bottom"){
                                    return b.price - a.price
                                }else if(sort === "top"){
                                    return a.price - b.price
                                }
                            }).map((item,idx) => (
                                <Card key={item.id || idx} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;