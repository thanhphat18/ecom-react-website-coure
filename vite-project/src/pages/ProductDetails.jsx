import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products';

export default function ProductDetails() {

  const {id} = useParams();
  const [product, setProduct] = useState(null);

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
            <button className='btn btn-primary'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}