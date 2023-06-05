import { Link } from "react-router-dom"
import './styles.css'
const Header = () => {
    return (
        <>
            <div className="header">Simple Cart</div>
            <div className="nav">
                <Link to='/'><button type="button"  className="button">Home Page</button></Link>
                <Link to='/cart'><button type="button"  className="button">Cart</button></Link>
            </div>

        </>
    )
}

export default Header