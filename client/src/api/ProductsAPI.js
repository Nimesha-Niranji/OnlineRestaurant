import {useState, useEffect} from 'react'
import axios from 'axios'

function ProductsAPI() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios.get(`/api/products`)
        //setProducts(res.data.products)
        //setResult(res.data.result)
        console.log(res.data.products)
    }

    useEffect(() => {
        getProducts()
    },[])

    
  return {

  }
}

export default ProductsAPI
