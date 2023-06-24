import React from 'react'
import ProductList from './ProductList'



const Home = (list) => {
  return (
    <div>
      <h1>This is a home page</h1>

      <ProductList Items={list}/>
    
    </div>
  )
}

export default Home