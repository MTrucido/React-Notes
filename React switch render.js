
import React from 'react'
import IconoLLuvia from './IconoLLuvia'
import IconoNuboso from './IconoNuboso'
import IconoParcialmenteNuboso from './IconoParcialmenteNuboso'
import IconoSoleado from './IconoSoleado'

function Weather ({ status }) {
  switch (status) {
    case 'lluvioso':
      return <IconoLLuvia />
    case 'nuboso':
      return <IconoNuboso />
    case 'parcialmente nuboso':
      return <IconoParcialmenteNuboso />
    case 'soleado':
      return <IconoSoleado />
    default:
      return <h1>Cargando...</h1>
  }
}

Weather()
