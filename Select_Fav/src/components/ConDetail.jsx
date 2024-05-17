import React, { useContext } from 'react'
import { ValContext } from './Context_Provider'
import './css/condetail.css'
function ConDetail() {
    let{moduleData,cross}=useContext(ValContext)
  return (

        <div className='module'>
          <div className="cross_btn" onClick={()=>{cross()}}>X</div>
        <div className="module_heading">{moduleData.name}</div>
        <div className="module_heading_2">Cities in {moduleData.name}</div>
        <div className="module_cities">
         {
            moduleData.cities.map((innerItem)=>{
              return(
                <div className="city_card">
                <img src={innerItem.img} alt="" className="city_img" />
                  <div className="city_name">{innerItem.name}</div>
              </div>
              )

            })
         }
            
        </div>
        
      </div>
  

  )
}

export default ConDetail
