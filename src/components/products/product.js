import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
    const [loading, setLoading] = useState();
    const [data, setData] = useState();
    const { id } = useParams();

    const fetchProductData = async () => {
        setLoading(true);
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setData(res.data);
        setLoading(false)
    }

    useEffect(() => {
        fetchProductData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>

            {
                loading ? <h2>Loading ... </h2> :
                    data &&
                    <>
                        <h2>{data?.title}</h2>
                        <img src={data?.image} alt={data?.title} className="h-48 group-hover:opacity-75" />
                    </>

            }

        </>

    )
}

export default Product