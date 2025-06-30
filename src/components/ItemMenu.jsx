import React from 'react'

const ItemMenu = ({textoMenu, seleccionada, seleccionarOpcion}) => {
  return (
    <li onClick={() => seleccionarOpcion(textoMenu)} 
        className='opcionMenu' style={seleccionada ? 
        {backgroundColor: 'black' } : null}>
        {textoMenu}
    </li>
  )
}

export default ItemMenu