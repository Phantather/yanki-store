import {createContext, useState} from "react";
import {useEffect} from "react";
import axios from "axios";



export const CustomContext = createContext()



export const Context = (props) => {
    const [clothes, setClothes] = useState([])
    const [category,setCategory] = useState("")
    const [sort,setSort] = useState("")
    const getAllClothes = () => {
        axios(`http://localhost:8080/clothes`)
            .then(({data}) => setClothes(data))
            .catch((err) => console.log(err))
    }




    const value = {
        sort,
        setSort,
        setClothes,
        clothes,
        setCategory,
        category,
        getAllClothes
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}