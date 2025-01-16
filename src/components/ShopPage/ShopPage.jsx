import { useEffect, useRef, useState } from 'react'
import { useContext, createContext } from 'react'
import {Products} from '../../ProducuctsData'
import Product from './Product/Product'
import CartDialog from './CartButton/CartDialog'
import ThemeButton from './ThemeButton/themeButton'
import './ShopPage.css'

export const CartContext = createContext(null);

export default function ShopPage({setLoginSuccess}){

    const [productsCart, setProductsCart] = useState([]);
    const [productsQuantity, setProductsQuantity] = useState(0);

    function handleAddProductCart(productID){
        setProductsQuantity(prevQuantity => prevQuantity+1);
        setProductsCart(prevCart =>{
            const AddedProduct = Products.find(product => product.id === productID);
            const newProduct = prevCart.find(product => product.id === productID);
            
            if(newProduct){

                return prevCart.map(
                    product => product.id === productID ? {...product, quantity: product.quantity + 1} : product
                )
            }
            else{

                return [...prevCart, {id: productID, quantity: 1, product: AddedProduct}]
            }
        })
        
    }
    function handleRemoveProductCart(productID){
        setProductsQuantity(prevQuantity => { return prevQuantity > 1 ? prevQuantity - 1 : 0;})
        setProductsCart(prevCart => {
            const removedProduct = prevCart.find(product => product.id === productID);
            if(removedProduct.quantity > 1){
                return prevCart.map(
                    product => product.id === productID ? {...product, quantity: product.quantity - 1} : product
                )
            }else{
                return prevCart.filter(product => product.id !== productID)
            }
        })    
        
    }
    const dialogRef = useRef();
    return (
        <CartContext.Provider value={{productsCart, handleAddProductCart, handleRemoveProductCart}}>
            <div className="shopePageContainer">
                <div className='mainshopePage'>
                    <CartDialog 
                        productsCart={productsCart} 
                        ref={dialogRef}
                    />
                    <div className="shopHeader">
                        <h1>Everything For Everyone</h1>
                        <section className="featuresContainer">
                            <ThemeButton/>
                            <button 
                                onClick={() =>dialogRef.current.openCart()}
                                className="cartButton userButton"
                            >{`Cart (${productsQuantity})`}</button>
                            <button className='logOutButton userButton' onClick={() => setLoginSuccess(loginStatus => !loginStatus)}>Log out</button>
                        </section>
                    </div>        
                    <section className="mainProductsContainer">
                        <div className="ProductsContainer">
                            {Products.map(
                                (product) => {
                                    return (
                                        <Product key={product.id} AddProductCart={() => handleAddProductCart(product.id)}{...product}/>
                                    )
                                }
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </CartContext.Provider>
    )
}