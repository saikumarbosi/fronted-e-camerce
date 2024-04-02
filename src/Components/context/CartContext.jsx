const { createContext, useState, useContext } = require("react");


const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const addCart = (item) => {
        setCartItems([...cartItems, item])
    }

    const removeCart = (item) => {
        setCartItems(cartItems.filter((i)=> i !== item))
    }

    return(
        <CartContext.Provider value={{cartItems, addCart, removeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}