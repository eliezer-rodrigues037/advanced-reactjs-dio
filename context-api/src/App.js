import React, { useState, useEffect,useContext } from 'react'
import { ThemeContext } from './Theme' 
import {TokenContext} from './token'
import Card from './Card'

function App () {
  const [token, setToken] = useState();


  useEffect(() => {
    setTimeout(() => {
      setToken('34q4m4k3ak43ak4kak4')
    }, 4000)
  }, [])

  return (
    <TokenContext.Provider value={token}>
      <ThemeContext.Provider value={ThemeContext._currentValue}>
        <Card />
      </ThemeContext.Provider>
    </TokenContext.Provider>
  )
}

export default App
