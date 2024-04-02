import React from 'react'
import { useCart } from '../context/CartContext'
import './UserCart.css'
const UserCart = () => {

    const { cartItems, removeCart } = useCart()

    return (
        <div className='bg-cart-container'>
            <h1>Cart</h1>
            <h3>Your Cart Items</h3>
            {cartItems.length === 0 ? 'Your Cart Empty' : ''}
            {cartItems.map((item) => {
                return (
                    <div className='card-cart'>
                        <div className='bg-card'>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                            <div>
                                <img src={item.imageUrl} alt='image' className='img' />
                            </div>
                        </div>
                        <button className='btn btn-primary' onClick={() => removeCart(item)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default UserCart
