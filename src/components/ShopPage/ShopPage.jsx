import {Products} from '../../ProducuctsData'
import Product from './Product/Product'
import './ShopPage.css'

export default function ShoPage(){

    return (
        <div className="shopePageContainer">
            <section className="featuresContainer">
                <p>There will be features</p>
                <button>Cart</button>
            </section>
            <section className="mainProductsContainer">
                <h1>Everything For Everyone</h1>
                <div className="ProductsContainer">
                    {Products.map(
                        (product) => {
                            return (
                                <Product key={product.id} {...product}/>
                            )
                        }
                    )}
                </div>
            </section>
        </div>
    )
}