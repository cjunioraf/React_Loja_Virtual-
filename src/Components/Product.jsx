import style from "./Product.module.css"
import { useState } from "react"

const Product = ({product, onAddToCar}) => {

  const [quantity, setQuantity] = useState(1)

  return (

    <div className={style.product}>

        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>R${product.price}</p>

        <div className={style.cart_button}>
        
            <select onChange={(e) => setQuantity(parseInt(e.target.value))} >                
                {/* criar um array de 1 a 10 para o usuário escolher a quantidade */}
                {[...Array(10).keys()].map((x) => ( <option key={x + 1} value={x + 1}>{x + 1}</option>))}
            </select>
            <button onClick={() => onAddToCar(product, quantity)}>Adicionar no carrinho</button>
        </div>

    </div>
  )
}

export default Product