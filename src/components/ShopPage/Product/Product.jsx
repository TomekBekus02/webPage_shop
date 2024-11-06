import './Product.css'
export default function Product({name, price, description, image}){
    return (
        <section className="productContainer">
            <img src={image} alt={`${name} photo`} />
            <h2>{name}</h2>
            <p>${price}</p>
            <p>{description}</p>
        </section>
    )
}