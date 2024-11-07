import { useState } from 'react'
import {Products} from '../../ProducuctsData'
import Product from './Product/Product'
import CartButton from './CartButton/CartButton'
import './ShopPage.css'

export default function ShopPage(){

    const [productsCart, setProductsCart] = useState([
        {
            id: undefined,
            quantity: 0,
            product: {}
        }
    ])
    const [productsQuantity, setProductsQuantity] = useState(0);
    function handleAddProductCart(ProductID){
        setProductsQuantity(prevQuantity => prevQuantity+1);
        setProductsCart(prevCart =>{
            const AddedProduct = Products.find(product => product.id === ProductID);
            const newProduct = prevCart.find(product => product.id === ProductID);
            if(newProduct){
                console.log(newProduct);
                return prevCart.map(
                    product => product.id === ProductID ? {...product, quantity: product.quantity + 1} : product
                )
            }
            else{
                console.log(prevCart);
                return [...prevCart, {id: ProductID, quantity: 1, product: AddedProduct}]
            }
        })
    }
    function handleRemoveProductCart(){

    }

    return (
            <div className="shopePageContainer">
                <section className="featuresContainer">
                    <p>There will be features</p>
                    <CartButton>{`Cart (${productsQuantity})`}</CartButton>
                </section>
                <section className="mainProductsContainer">
                    <h1>Everything For Everyone</h1>
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
    )
}