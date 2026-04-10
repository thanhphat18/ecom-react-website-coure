import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {

  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const Navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const productInCart = 
      cartItems.find(
          item => item.id === product.id
      );
  
  const productQuantityLabel = productInCart 
      ? `(${productInCart.quantity})` 
      : '';
  

  useEffect(() => {
    const foundProduct = getProductById(id);
    
    if(!foundProduct){
      Navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id]);

  if(!product){
    return <h1>Loading...</h1>
  }
  
  return (
    <div className='page'>
      <div className='container'>
        <div className='product-detail'>
          <div className='product-detail-image'>
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className='product-detail-content'>
            <h1 className='product-detail-name'>{product?.name}</h1>
            <p className='product-detail-description'>{product?.description}</p>
            <h3 className='product-detail-price'>${product?.price}</h3>
            <button className='btn btn-primary' onClick={() => addToCart(product.id)}>
              Add to Cart {productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}