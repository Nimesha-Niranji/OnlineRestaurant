import React, {createContext, useState} from 'react'
import ProductsAPI from './api/ProductsAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)

    ProductsAPI()
    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        //userAPI: UserAPI(token),
        //categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}