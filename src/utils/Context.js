import {createContext, useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



export const CustomContext = createContext()



export const Context = (props) => {

    const [clothes, setClothes] = useState([])
    const [category,setCategory] = useState("all")
    const [sort,setSort] = useState("")
    const [gender, setGender] = useState("all")
    const [product, setProduct] = useState({})
    const [cart, setCart] = useState([])
    const [favorites, setFavorites] = useState([])
    const userL = localStorage.getItem("user")
    const [user, setUser] = useState(userL ? userL : {login: ''})

    const getAllClothes = () => {
        axios(`http://localhost:8080/clothes`)
            .then(({data}) => setClothes(data))
            .catch((err) => console.log(err))
    }

    const getOneProduct = (id) => {
      axios(`http://localhost:8080/clothes/${id}`)
          .then(({data}) => setProduct(data))
          .catch((err) => console.log(err))
    }


    const addCart = (item) => {

        if(cart.length && cart.some(el => el.id == item.id) &&  cart.map(el => el.size === item.size && el.color === item.color ? true : false)){
            setCart(cart.map(el => el.id == item.id && el.size === item.size && el.color === item.color  ? {...el,count:el.count + 1}: el))
        }
        else{
            item = {...item,count: 1}
            setCart([...cart,item])
        }

    }

    const deleteCart = (id,color,size) => {
        return setCart(cart.filter(item => {
            return item.id !== id || item.color !== color || item.size !== size
        }))
    }


    const addFavorites = (item) => {
        if (favorites.some(el => el.id === item.id)) {
            setFavorites(favorites)
        } else {
            setFavorites([...favorites, {...item}])
        }
    }

    const deleteFavorites = (id) => {
        return setFavorites(favorites.filter(item => {
            return item.id !== id
        }))
    }



    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    },[])


    const value = {
        sort, setSort,
        setClothes, clothes,
        setCategory, category,
        gender, setGender,
        getAllClothes, getOneProduct,
        product,
        cart, setCart,
        addCart, deleteCart,
        favorites, setFavorites,
        addFavorites, deleteFavorites,
        user, setUser
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}