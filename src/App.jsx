import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import Thanks from './pages/Thanks'
import { useState } from 'react'
//
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  //função
  const handleAddCart = (produtc, quantity) => {
    //array das informações do produto[]
    setCartItems((prevItems) => {      
      //se não existir => adiciona item
      //se existir incrementa a quantidade
      const itemExists = prevItems.find((item) => item.id === produtc.id)

      if(itemExists){
        toast.info(`Quantidade do ${produtc.name} atualizada!`);
        return prevItems.map((item) => item.id === produtc.id ? {...item, quantity: item.quantity + quantity } : item)
      }
      else{
        toast.success(`${produtc.name} adicionado com sucesso!`);  
        return [...prevItems, {...produtc, quantity}];         
      }

    });
  } 
  //função que atualiza o DB
  const handleUpdateCart = (produtc, quantity) => {
    setCartItems((prevItems) => {   
      toast.info(`Quantidade do ${produtc.name} atualizada!`);
      return prevItems.map((item) => item.id === produtc.id ? ({...item, quantity: +quantity}) : (item));
    })
  }
  //função para deletar
  const handleDeleteCart = (product) => {

    console.log(product)

    setCartItems((prevItems) => {
      toast.error(`${product.name} removido com sucesso!`);
      return prevItems.filter((item) => item.id !== product.id);
    })
  }

  // const handleFinalizaCompra = (product) => {

  //   if(cartItems.length = 0){
  //     toast.error("Seu carrinho está vazio!");
  //     return null;      
  //   }  
    
  //   toast.success("Compra finalizada com sucesso!");  
  //   setCartItems([]); 

  // } 

  return (    
    <>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>        
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home onAddToCar={handleAddCart}/>} />
          <Route path="/cart" element={<Carrinho cartItems={cartItems} 
                                                 onUpdateCart={handleUpdateCart} 
                                                 onDeleteCart={handleDeleteCart}
                                                 //onFinalizar={handleFinalizaCompra}
                                                 setCartItems={setCartItems}
                                                 />}/>                                                  
          <Route path="/thanks" element={<Thanks />} />
        </Routes>          
      </div>
       
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnFocusLoss pauseOnHover/>
    </> 
  )
}

export default App
