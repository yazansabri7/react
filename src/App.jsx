import React, { useState } from 'react'

export default function App() {
 

  const[counter , setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  }
  const [product, setProduct] = [
    {
      name:"iphone",
      price: 1000000,
      color: "black",
    }
  ]
  const showProduct = () => {
    document.querySelector(".view").classList.toggle("d-none");
  }
  
  return (
    <>

    <h1>Counter : {counter}</h1>
    <button onClick={increase} className='btn btn-success'>Increase</button>
    <button onClick={showProduct} className="btn btn-danger">Show Products</button>
    <div className='d-none view'>
      <h3>name : {product.name}</h3>
      <h3>price : {product.price}</h3>
      <h3>color: {product.color}</h3>
    </div>
    
    </>


  )
}
