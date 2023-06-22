import {createContext, useState} from "react";



export const CustomContext = createContext()



export const Context = (props) => {
    const [data,setData] = useState()




    const value = {}
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}