import React, { useContext } from 'react'
import './css/countries.css'
import { ValContext } from './Context_Provider'


function Countries() {
  const{data}=useContext(ValContext)

  return (
    <div className='countries_con'>
     
      {
        data.map((item)=>{
         return(
          <div className="countries_card">
          <img src={item.img} alt="" className="img" />
          <div className="name">{item.name} </div>
         </div>
         )
        })
      }
      
    </div>
  )
}

export default Countries
