import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from './productItem';
import ProductListSkeleton from './productListSkeleton';
const Products = () => {
    const [loading, setLoading] = useState();
    const [prodoctState, setProductState] = useState([]);

    const getProducts = async () => {
        setLoading(true)
        const res = await axios.get('https://fakestoreapi.com/products');
        setProductState(res.data)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {
                loading ? <ProductListSkeleton /> : <div className="bg-white dark:bg-slate-800">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {prodoctState.map(productData => <ProductItem key={productData.id} productData={productData} />)}


                        </div>
                    </div>
                </div>
            }
        </>





    )
}

export default Products