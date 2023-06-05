import { Link } from "react-router-dom"
import './styles.css'
import { useContext } from "react"
import { CartContext } from "../Context"


const Header = () => {
    
  const {cart} = useContext(CartContext)
    return (
        <>
            <div className="header">Simple Cart</div>
            <div className="nav">
                <Link to='/'><button type="button"  className="button">Home Page</button></Link>
                <Link to='/cart'><button type="button"  className="button">Cart {cart.length}</button></Link>
            </div>

        </>
    )
}

export default Header