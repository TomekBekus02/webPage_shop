import CartProductDisplay from './CartProductDisplay/CartProductDisplay';
import './CartDialog.css'
import { forwardRef, useImperativeHandle, useRef } from 'react';

const CartButton = forwardRef(function CartDialog({productsCart}, ref){
    const dialog = useRef();
    let displayCart = <p>You'r cart is empty</p>
    if(productsCart.length > 0){ displayCart = <CartProductDisplay/> }

    useImperativeHandle(ref, ()=>{
        return {
            openCart(){
                dialog.current.showModal();
            },
            closeCart(){
                dialog.current.closeModal();
            }
        }
    })
    let sum = productsCart.reduce((accumulator, cartProduct) => {
        const price = +cartProduct.product.price
        const quantity = cartProduct.quantity
        return accumulator + price * quantity
    }, 0)
    return (
        <dialog className="CartContainer" ref={dialog}>
            <h1>Your shopping cart</h1>
            <section>
                {displayCart}
            </section>
            <section className='price'>
                <p>{`Sum: ${sum.toFixed(2)}$`}</p>
            </section>
            <section className='footerCart'>
                <form method="dialog">
                    <button>Close cart</button>
                </form>
                <button>Checkout</button>
            </section>
        </dialog>
    )
})

export default CartButton