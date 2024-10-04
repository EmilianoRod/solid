import React, { useState, useEffect } from 'react'
import Product from './Product'


const ProductContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getProductsFromRemote())
    })

    return (
        <div>
            {
                products.map(product => {
                    <Product

                    />
                })
            }
        </div>
    )
}

export default ProductContainer;