import React, { useState } from 'react'
import Overview from './components/Overview.jsx'
import Dropdown from './components/Dropdown.jsx'
import UseStateEx from './components/UseStateEx.jsx'  
import Pricing from './components/Pricing.jsx'

const App = () => {
  return (
    <div>
      <Pricing/>
      <Overview/>
      <Dropdown/>
    </div>
  )
}

export default App




