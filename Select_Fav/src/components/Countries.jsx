import React, { useContext } from 'react'
import './css/countries.css'
import DataContext from './Context_Provider'


function Countries() {
  let {data}=useContext(DataContext)
  return (
    <div className='contries_con'>
      {
        data.map((item)=>{
         <div className="contries_cart">
          <img src={item.img} alt="" className="img" />
          <div className="name">{item.name}</div>
         </div>
        })
      }
      
    </div>
  )
}

export default Countries
