import style from "./CarrinhoItem.module.css"

const CarrinhoItem = ({item, onUpdateCart, onDeleteCart}) => {
  return (
    <div className={style.cart_item}>
        <h3>{item.name}</h3>
        <p>R${item.price}</p>
        <div className={style.cart_button}>
            <input type="text" value={item.quantity} onChange={(e) => onUpdateCart(item, parseInt(e.target.value))} />
            <button onClick={(e) => onDeleteCart(item)}>Remover</button>            
        </div>
    </div>
  )
}

export default CarrinhoItem