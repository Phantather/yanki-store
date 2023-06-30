import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Card from "../../components/Card/Card";
import Aside from "../../components/Aside/Aside";
import {CustomContext} from "../../utils/Context";

const Catalog = () => {
    const {getAllClothes,setClothes,clothes,category,sort,setSort, gender, setGender} = useContext(CustomContext)

    useEffect(() => {
        getAllClothes()
    },[])


    console.log(gender)
    return (
        <section className="catalog">
            <div className="container">

                <div className="catalog__between">
                    <Aside/>
                    <div className="catalog__row">
                        <ul className='catalog__filter'>
                            <li className="catalog__filter-item">
                                <select onChange={(e) => setGender(e.target.value)}>
                                    <option value="all" selected>{gender === 'all' ? "Пол" : "По умолчанию"}</option>
                                    <option value="woman">Женский</option>
                                    <option value="men">Мужской</option>
                                </select>
                            </li>
                            <li className="catalog__filter-item">
                                <select onChange={(e) => setSort(e.target.value)} name="" id="">
                                    <option value="" disabled selected>Цена по</option>
                                    <option value="top">по возростанию</option>
                                    <option value="bottom">по убыванию</option>
                                </select>
                            </li>

                        </ul>
                        {
                            category ?
                                clothes
                                    .filter(item => item.category === category)
                                    .filter(item => {
                                        if (gender === "all") {
                                            return item
                                        } else if(gender === 'men') {
                                            return item.gender === 'men'
                                        } else if(gender === 'woman') {
                                            return item.gender === 'woman'
                                        }
                                    })
                                    .sort((a,b) => {
                                        if(sort === "top"){
                                            return a.price - b.price
                                        }else if(sort === "bottom"){
                                            return b.price - a.price
                                        }
                                    }).map((item,idx) => (
                                        <Card key={item.id || idx} item={item}/>
                                )) :
                                clothes
                                    .filter(item => {
                                    if (gender === "all") {
                                        return item
                                    } else if(gender === 'men') {
                                        return item.gender === 'men'
                                    } else if(gender === 'woman') {
                                        return item.gender === 'woman'
                                    }
                                }).sort((a,b) => {
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