import style from "./TotalGeral.module.css"

const TotalGeral = ({items}) => {

    const totalGeral = items.reduce((total, item) => (total + (item.price * item.quantity)), 0); 

  return(
  <div className={style.total}>
      <p>Total:${totalGeral.toFixed(2)}</p>    
  </div> )
}

export default TotalGeral