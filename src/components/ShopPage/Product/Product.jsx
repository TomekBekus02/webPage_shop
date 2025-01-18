import { useContext } from 'react'
import './Product.css'
import { ThemeContext } from '../../../App'

export default function Product({name, price, description, image, AddProductCart}){ 
    const {currentTheme} = useContext(ThemeContext)
    return (
        <div className={`${currentTheme}`}>
            <section className='productContainer'>
                <div className="productStyle">
                    <img src={image} alt={`${name} photo`} />
                    <div className="title">
                        <h2>{name}</h2>
                        <h4>${price}</h4>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <div className="buttonContainer">
                        <button className='addProductButton' onClick={AddProductCart}>Add to Cart</button>
                    </div>
                </div>
            </section>
        </div>
        
        
    )
}