import faker from "faker"
import { useState } from "react"
import SingleProduct from "./Single_Product/SingleProduct"
import './styles.css'

faker.seed(100)
const Home = ({cart,setCart}) => {
    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }))
    // console.log(productsArray)
    console.log(cart)

    const [products] = useState(productsArray)
    return (
        <div>
            <>Home</>
            <div className="prodCont">
                {products.map((prod) => (
                    <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>))}
            </div>
        </div>
    )
}

export default Home