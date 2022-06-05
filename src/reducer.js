
export const initialState = {
    cart: []
}


const reducer = (state, action) => {
    console.log(state, action)
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case "REMOVE_FROM_CART":
            const updateCart = state.cart.filter(item => item.id !== action.id)
            return {
                ...state,
                cart: updateCart
            }

        case "PLUS_QUANTITY_IN_CART":
            const plusCart = state.cart.map(item => {
                if (item.id === action.id) return { ...item, quantity: item.quantity + 1 }
                return item
            })
            return {
                ...state,
                cart: plusCart
            }

        case "MINUS_QUANTITY_IN_CART":
            const minusCart = state.cart.map(item => {
                if (item.id === action.id) {
                    if (item.quantity === 1) {
                        return null
                    } else {
                        return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                    }

                }

                return item
            })
            return {
                ...state,
                cart: minusCart.filter(Boolean)
            }


    }

}

export default reducer;