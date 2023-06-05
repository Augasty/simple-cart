import { useEffect, useState } from "react"
import SingleProduct from "./Single_Product/SingleProduct"


const Cart = ({ cart, setCart }) => {
  let [total,setTotal] = useState()
  useEffect(()=>{setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price),0)
  )},[cart])
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>total: rs {total}</span>

      <div className="prodCont">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />))}
      </div>
    </div>
  )
}

export default Cart