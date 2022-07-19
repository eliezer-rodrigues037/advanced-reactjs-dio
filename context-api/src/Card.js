import React, { useContext } from 'react'
import { ThemeContext } from './Theme'
import Form from './Form'

function Card() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', height:'100vh', width:'350px', margin:'auto', justifyContent:'center' }}>
      <Form />
      <button style={{ background: theme.background, color: theme.color, marginTop:'15px'}} onClick={() => console.log(theme)} >Card Button</button>
    </div>
  )
}

export default Card
