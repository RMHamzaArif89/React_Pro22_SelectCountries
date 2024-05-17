import React, { useContext } from 'react'
import { ValContext } from './Context_Provider'
import './css/selected.css'
function Selected() {
    const { selectedData ,ShowModule} = useContext(ValContext)
    return (
        
         <>
            <h1 className='selected_heading'>Selected Countries</h1>
        
        
        <div className='selected_contries'>
            {
                selectedData.map((item) => {
                    return (
                        <div className="selected_card">
                            <img src={item.img} alt="" className="img" />
                            <div className="button" onClick={()=>{ShowModule(item)}}>Details</div>
                           
                        </div>
                    )
                })
            }

        </div>
         </>
    )
}

export default Selected
