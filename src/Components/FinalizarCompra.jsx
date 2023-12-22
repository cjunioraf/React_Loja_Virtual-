import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const FinalizarCompra = ({cartItems, setCartItems}) => {

    const navigate = useNavigate();
    
    const handleFinalizar = () => {

        if(cartItems.length > 0){
            toast.success("Compra finalizada com sucesso!"); 
            navigate("/thanks", {state: {cartItems}});
            setCartItems([]);                
        }  
    }  

  return <button 
            onClick={handleFinalizar} 
            className='btt_finalizar'>Finalizar Compra
        </button>

}

export default FinalizarCompra