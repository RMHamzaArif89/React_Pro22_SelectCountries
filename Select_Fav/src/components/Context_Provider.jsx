import React from "react";
import { createContext, useState } from "react";
import { useContext } from "react";
import Data from "./Data";


export const ValContext=createContext(null)

function ProviderContext({children}){

const [data,setData]=useState(Data)
let[selectedData,setSelectedData]=useState([])
let [moduleData,setModuleData]=useState([])

const ShowModule=(item)=>{
  setModuleData(()=>({item}))

}



let selected=(item)=>{
setSelectedData((items)=>([...items,item]))
}



  return(
 <ValContext.Provider value={{data,selected,selectedData,ShowModule,moduleData}}>
 {children}
 </ValContext.Provider>
  )
}

export default ProviderContext