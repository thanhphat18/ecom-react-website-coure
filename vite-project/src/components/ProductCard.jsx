import { Link } from "react-router-dom"

export default function ProductCard({product}) {
    return (
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-card-image"></img>
                <div className="product-card-content">
                  <h3 className="product-card-name">{product.name}</h3>
                  <p className="product-card-price">${product.price}</p>
                  <div>
                    <Link className="btn btn-primary" to={`/products/${product.id}`}>View Details</Link>
                    <button className="btn btn-secondary">Add to Cart</button>
                  </div>
                </div>
              </div>
    )
}