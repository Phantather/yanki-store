import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import {CustomContext} from "../../utils/Context";
import axios from "axios";

const AdminPanel = () => {
    const {getAllClothes, clothes} = useContext(CustomContext)

    useEffect(() => {
        getAllClothes()
    }, [])

    const [active, setActive] = useState(false)

    const categories = ['shoes','pants','sweatshirts','t-short']

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: 0,
        images: [],
        category: ""
    })

    const handleAdd = () => {
        axios.post(`http://localhost:8080/clothes`,{...newProduct})
            .then((res) => {
                setNewProduct({
                    title: "",
                    price: 0,
                    images: [],
                    category: ""
                })
                getAllClothes()
            })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/clothes/${id}`)
            .then((res) => {
                getAllClothes()
            })
    }

    return (
        <section className="admin">
            <div className="container__admin">
                <div className="admin__row">
                    {
                        clothes.map((item, idx) => (
                            <div className="admin__card">
                                <h2>{idx + 1} {item.title}</h2>
                                <div className='admin__btns'>
                                    <button className="admin__btn">
                                        update
                                    </button>
                                    <button className='admin__btn' onClick={() => handleDelete(item.id)}>
                                        delete
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="admin__add" onClick={() => setActive(!active)}>
                    Add product
                </button>
            </div>
            <div className="admin__form" style={{display: active ? 'flex' : ' none'}}>
                <input
                    type="text" placeholder="Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct(
                        {...newProduct, title: e.target.value}
                    )}
                />
                <input type="number" placeholder="Price"
                       value={newProduct.price}
                       onChange={(e) => setNewProduct(
                           {...newProduct, price: parseInt(e.target.value)}
                       )}
                />
                <input type="text" placeholder="Image"
                       value={newProduct.images}
                       onChange={(e) => setNewProduct(
                           {...newProduct, images: [e.target.value]}
                       )}
                />
                <select onChange={(e) => setNewProduct(
                    {...newProduct, category: e.target.value}
                )}>
                    <option selected disabled>Category</option>
                    {
                        categories.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
                <button className="admin__form-btn" onClick={() => handleAdd()}>
                    Add
                </button>
            </div>
        </section>
    );
};

export default AdminPanel;