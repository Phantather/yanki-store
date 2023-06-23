import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {CustomContext} from "../../utils/Context";

const Aside = () => {

    const {getAllClothes,setClothes,clothes,setCategory,category} = useContext(CustomContext)


    console.log(category)
    let categories = clothes.map(item => item.category)
    return (
        <aside className="aside">
            <p className="aside__title">
                Католог
            </p>
            <ul className="aside__menu">
                {
                    Array.from(new Set(categories)).map((item,idx) => (
                        <li onClick={() => setCategory(item)} key={idx} className="aside__menu-item">{item}</li>
                    ))
                }

            </ul>
        </aside>
    );
};

export default Aside;