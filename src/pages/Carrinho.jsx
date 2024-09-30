import CarrinhoItem from "../Components/CarrinhoItem"
import FinalizarCompra from "../Components/FinalizarCompra";
import TotalGeral from "../Components/TotalGeral";
import style from "./Carrinho.module.css"

const Carrinho = ({cartItems, onUpdateCart, onDeleteCart, setCartItems}) => {

  //calcular o total dos ítens do carrinho
  //console.log(cartItems); 
  let totalGeral = 0

  if(cartItems.length > 0)
  {
    totalGeral = cartItems.reduce((total, item) => (total + (item.price * item.quantity)), 0);
  }

  return (
    <div>
      <h1>Carrinho</h1>      
      {cartItems.length == 0 ? (<p>Não há item no carrinho!</p>) : (
        <>
          {cartItems.map((item) => (
            // <div key={item.id}>
            //   <h3 >Produto: {item.name}</h3>    
            //   <p>Quantidade: {item.quantity}</p>                    
            // </div>
            <CarrinhoItem key={item.id} item={item} onUpdateCart={onUpdateCart} onDeleteCart={onDeleteCart}/>
          ))}
          <div className={style.total}>
            {/* toFixed(2) corrige as casas decimais para 2*/}
            {/* <p>Total: ${totalGeral.toFixed(2)}</p> */}
            <TotalGeral items={cartItems}/>
            {/* <FinalizarCompra onFinalizar={onFinalizar} /> */}
            <FinalizarCompra cartItems={cartItems} setCartItems={setCartItems}/>
          </div>          
        </>)}
    </div>
  )
}

export default Carrinho