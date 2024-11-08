import {Products} from '../../../ProducuctsData'
import './CartButton.css'
import { useContext } from 'react';
import CartProductDisplay from './CartProductDisplay/CartProductDisplay';
export default function CartButton({productsCart}){

    let displayCart = <p>You'r cart is empty</p>
    if(productsCart.length > 0){
        displayCart = <CartProductDisplay/>
    }

    return (
        <dialog className="CartContainer" open>
            <h1>Your shopping cart</h1>
            <section>
                {displayCart}
            </section>
            <form method="dialog">
                <button>Close cart</button>
            </form>
        </dialog>
    )
}