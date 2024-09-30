
import productsData from "../DB/products_mock.json"
import Product from "../Components/Product"
import style from "./Home.module.css"

const Home = ({onAddToCar}) => {

  return (    
    <div>
        <h1>Catálogo de Produtos</h1>
        
        <div className={style.products_Container}>
            {productsData.map((product) => (
                <Product key={product.id} product={product} onAddToCar={onAddToCar} />
            ))}
        </div>

    </div>
  )
}

export default Home