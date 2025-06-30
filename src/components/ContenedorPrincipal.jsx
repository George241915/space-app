import React from 'react'
import BarraLateral from './BarraLateral'
import Galeria from './Galeria'

const ContenedorPrincipal = () => {
  return (
    <div className='mainContainer'>
        <BarraLateral></BarraLateral>
        <Galeria></Galeria>
    </div>
  )
}

export default ContenedorPrincipal;