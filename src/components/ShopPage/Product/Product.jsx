import './Product.css'
export default function Product({name, price, description, image}){
    return (
        <section className="productContainer">
            <img src={image} alt={`${name} photo`} />
            <div className="title">
                <h2>{name}</h2>
                <h4>${price}</h4>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="buttonContainer">
                <button>Add to Cart</button>
            </div>

        </section>
    )
}