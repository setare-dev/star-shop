import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider';

const ProductItem = ({ productData }) => {
    const [state, dispatch] = useStateValue()
    const addToCardHandeler = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                ...productData
                , quantity: 1
            }
        })
    }
    return (

        <div className="group  p-5 rounded-xl dark:border-0 border-2 border-gray-200">
            <Link to={`/product/${productData.id}`} >
                <div className="w-full aspect-w-1 aspect-h-1 bg-white  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  h-96 flex items-center justify-center">
                    <img src={productData.image} alt={productData.title} className="h-52 group-hover:opacity-75 object-scale-down" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 dark:text-white h-14">{productData.title}</h3>


            </Link>
            <div className='flex justify-between'>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">${productData.price}</p>
                {
                    state.cart.findIndex(item => item.id === productData.id) === -1 && <button onClick={addToCardHandeler} className=" text-white  border-2 border-red-400 rounded-lg p-1 bg-red-400 px-3">Add to cart</button>
                }

            </div>

        </div >
    )
}

export default ProductItem