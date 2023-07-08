import React, {useContext, useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import Aside from "../../components/Aside/Aside";
import {CustomContext} from "../../utils/Context";

import {Pagination} from "antd";

const Catalog = () => {
    const {getAllClothes,setClothes,clothes,category,sort,setSort, gender, setGender} = useContext(CustomContext)


    const [page, setPage] = useState(1)

    const showCount = clothes
        .filter(item => category === "all" ? item : item.category === category)
        .filter(item => gender === "all" ? item : item.gender === gender)
        .filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9).length

    const showCountLength = clothes
        .filter(item => category === "all" ? item : item.category === category)
        .filter(item => gender === "all" ? item : item.gender === gender).length

    useEffect(() => {
        getAllClothes()
        console.log(page)
    },[page])


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
                                    .filter(item => category === "all" ? item : item.category === category)
                                    .filter(item => gender === "all" ? item : item.gender === gender)
                                    .filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9)
                                    .sort((a,b) => {
                                        if(sort === "top"){
                                            return a.price - b.price
                                        }else if(sort === "bottom"){
                                            return b.price - a.price
                                        }
                                    }).map((item,idx) => (
                                        <Card key={item.id || idx} item={item}/>
                                ))
                                :
                                clothes
                                    .filter(item => gender === "all" ? item : item.gender === gender)
                                    .sort((a,b) => {
                                        if(sort === "bottom"){
                                            return b.price - a.price
                                        }else if(sort === "top"){
                                            return a.price - b.price
                                        }
                                    })
                                    .map((item,idx) => (
                                        <Card key={item.id || idx} item={item}/>
                                    ))
                        }
                        <p>Показано {showCount} из {showCountLength} товаров</p>
                        {
                            showCountLength > 9 ?
                                <Pagination
                                    simple
                                    onChange={setPage}
                                    current={page}
                                    total={
                                        clothes
                                            .filter(item => category === "all" ? item : item.category === category)
                                            .filter(item => gender === "all" ? item : item.gender === gender).length
                                    }
                                    pageSize={9}
                                /> : ''
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;