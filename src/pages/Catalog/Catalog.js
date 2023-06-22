import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../../components/Card/Card";


const Catalog = () => {

    const [clothes, setClothes] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/clothes')
            .then(({data}) => setClothes(data))
            .catch((err) => console.log(err))
    },[])

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__row">
                    {
                        clothes.map((item,idx) => (
                            <Card key={item.id || idx} item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Catalog;