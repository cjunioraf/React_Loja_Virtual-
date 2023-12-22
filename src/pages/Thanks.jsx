import { useLocation, useNavigate } from "react-router-dom"
import style from "./Thanks.module.css"
import TotalGeral from "../Components/TotalGeral";

const Thanks = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const items = location.state.cartItems;

  //const totalGeral = items.reduce((total, item) => (total + (item.price * item.quantity)), 0); 
  
  return (
    <div className={style.thanks}>
        <ul>{items.map((item) => (
          //<p key={item.id}>{item.name}</p>
          <li key={item.id}>{item.name} - {item.quantity} X ${item.price}</li>
          ))}
        </ul>
        <TotalGeral items={items}/> 
        {/* <p>Total:${totalGeral.toFixed(2)}</p>   */}
        <button onClick={() => navigate("/")}>Voltar ao Catálogo</button>

    </div>
  )
}

export default Thanks