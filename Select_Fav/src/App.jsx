import React, { useContext } from 'react'
import './App.css'
import Countries from './components/Countries'
import Selected from './components/Selected'
import { ValContext } from './components/Context_Provider'
function App() {
  let {moduleData}=useContext(ValContext)

  return (
  <>
  <Selected/>
  <Countries/>
  {moduleData.length!=0?'okay':'blank'}
  </>
  )
}

export default App
