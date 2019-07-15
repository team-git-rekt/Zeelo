<<<<<<< HEAD
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




=======
import React, { Component } from 'react'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}; 
    }
    render() {
        return (
            <p> hi </p>
        )
    }
}

export default App
>>>>>>> 347a057b90341581e8c9e5f1e7a39588e935e45c
