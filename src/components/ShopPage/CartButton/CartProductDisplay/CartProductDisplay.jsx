import { useContext } from 'react'
import './CartProductDisplay.css'
import {CartContext} from '../../ShopPage'
import { ThemeContext } from '../../../../App';

export default function CartProductDisplay({}){
    const {productsCart, handleAddProductCart, handleRemoveProductCart} = useContext(CartContext);
    const {currentTheme} = useContext(ThemeContext)
    return (
        <ul className={`${currentTheme}`}>
            {productsCart.map(cartProduct => {
                return(
                    <li key={cartProduct.id}>
                        <div className="productInfoContainer">
                            <h3> {cartProduct.product.name} </h3>
                            <p> {`${cartProduct.product.price}$`} </p>
                        </div>
                        <div className="productQuantityContainer">
                            <button onClick={() => handleRemoveProductCart(cartProduct.id)}>-</button>
                            <p>{cartProduct.quantity}</p>
                            <button onClick={() => handleAddProductCart(cartProduct.id)}>+</button>
                        </div>

                    </li>
                )
            })}
        </ul>
    )
}