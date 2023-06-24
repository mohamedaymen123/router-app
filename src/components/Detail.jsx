import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = (list) => {
    const {id}=useParams()
    console.log(id)
    const  item=list.find(el=>el.id==id)
  return (
    <div>
        <img src={item.pic}alt=""/>
        <h1> {item.name} </h1>
        <p> {item.price} </p>
    </div>
  )
}

export default Detail