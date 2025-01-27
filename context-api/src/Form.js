import React, { useContext } from 'react'
import { ThemeContext } from './Theme'
import {TokenContext} from './token'

function Form() {

  const context = useContext(ThemeContext)
  const token = useContext(TokenContext)
  const renderForm = (
    <form style={{display:'flex', flexDirection:'column'}}>
      <label>Nome:</label>
      <input />
      <label>E-mail:</label>
      <input />
      <label>Idade:</label>
      <input />
      <label>Telefone:</label>
      <input />
    </form>
  )

  const renderNotLogged = (
    <h1>
      É necessário realizar o login!
    </h1>
  )

  return (
    <div>
      {!token ? renderNotLogged : renderForm}
    </div>
  )
}

export default Form