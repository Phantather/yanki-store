import React, {useEffect} from 'react';
import {useContext} from "react";
import {CustomContext} from "../../utils/Context";

const AdminPanel = () => {
    const {getAllClothes,clothes} = useContext(CustomContext)

    useEffect(() => {
        getAllClothes()
    },[])

    return (
        <section className="admin">
            <div className="container__admin">
                <div className="admin__row">
                    {
                        clothes.map((item,idx) => (
                            <div className="admin__card">
                                <h2>{idx+1} {item.title}</h2>
                                <div className='admin__btns'>
                                    <button className="admin__btn">
                                        update
                                    </button>
                                    <button className='admin__btn'>
                                        delete
                                    </button>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <button className="admin__add">
                    Add product
                </button>
            </div>
        </section>
    );
};

export default AdminPanel;