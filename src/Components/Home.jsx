import faker from "faker"
import { useState } from "react"
import SingleProduct from "./Single_Product/SingleProduct"
import './styles.css'

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
                {products.map((prod, key) => (
                    <SingleProduct prod={prod} key={key} />))}
            </div>
        </div>
    )
}

export default Home