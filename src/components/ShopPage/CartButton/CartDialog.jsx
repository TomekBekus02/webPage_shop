import CartProductDisplay from './CartProductDisplay/CartProductDisplay';
import './CartDialog.css'
import { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import ThemeButton from '../ThemeButton/themeButton';
import { ThemeContext } from '../../../App';


const CartButton = forwardRef(function CartDialog({productsCart}, ref){

    const dialog = useRef();
    const {currentTheme} = useContext(ThemeContext);

    let displayCart = <p className='cartInfo'>You'r cart is empty</p>
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
        <dialog className={`CartContainer ${currentTheme}`} ref={dialog}>
            <h1>Your shopping cart</h1>
            <section>
                {displayCart}
            </section>
            <section className='price'>
                <p>{`Sum: ${sum.toFixed(2)}$`}</p>
            </section>
            <section className='footerCart'>
                <form method="dialog">
                    <button className='CloseCartButton'>Close</button>
                </form>
                <button className='CheckoutButton'>Checkout</button>
            </section>
        </dialog>
    )
})

export default CartButton