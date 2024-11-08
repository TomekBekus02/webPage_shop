import { useContext } from 'react'
import './CartProductDisplay.css'
import {CartContext} from '../../ShopPage'
export default function CartProductDisplay({}){
    const {productsCart, handleAddProductCart, handleRemoveProductCart} = useContext(CartContext);
    return (
        <ul>
            {productsCart.map(cartProduct => {
                return(
                    <li key={cartProduct.id}>
                        <h3> {cartProduct.product.name} </h3>
                        <p> {cartProduct.product.price} </p>
                        <button onClick={() => handleRemoveProductCart(cartProduct.id)}>-</button>
                        <p>{cartProduct.quantity}</p>
                        <button onClick={() => handleAddProductCart(cartProduct.id)}>+</button>
                    </li>
                )
            })}
        </ul>
    )
}