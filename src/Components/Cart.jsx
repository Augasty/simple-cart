import { useEffect, useState } from "react"
import SingleProduct from "./Single_Product/SingleProduct"
import { useContext } from "react"
import { CartContext } from "../Context"


const Cart = () => {
  const {cart,setCart} = useContext(CartContext)
  const [total,setTotal] = useState()
  useEffect(()=>{setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price),0)
  )},[cart])
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>total: Rs {total}</span>

      <div className="prodCont">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />))}
      </div>
    </div>
  )
}

export default Cart