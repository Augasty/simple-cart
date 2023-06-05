/* eslint-disable react/prop-types */


const SingleProduct = ({prod,key}) => {
  return (
    <div className='products'>
      <img src={prod.image} alt={prod.name}></img>
      <div className="productDesc">
        <span style={{fontWeight:700}}>{prod.name}</span>
        <span>$ {prod.price.substring(0,3)}</span>
      </div>
      <button className="add">Add to cart</button>
    </div>
  )
}

export default SingleProduct

