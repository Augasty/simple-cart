import faker from "faker"
import { useContext, useState } from "react"
import SingleProduct from "./Single_Product/SingleProduct"
import './styles.css'

faker.seed(100)
const Home = () => {
    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }))
    // console.log(productsArray)

    const [products] = useState(productsArray)
    return (
        <div>
            <>Home</>
            <div className="prodCont">
                {products.map((prod) => (
                    <SingleProduct prod={prod} key={prod.id}/>))}
            </div>
        </div>
    )
}

export default Home