import React from "react";
import { createContext, useState } from "react";
import { useContext } from "react";
import Data from "./Data";


export const ValContext=createContext(null)

function ProviderContext({children}){

const [data,setData]=useState(Data)
  return(
 <ValContext.Provider value={{data}}>
 {children}
 </ValContext.Provider>
  )
}

export default ProviderContext