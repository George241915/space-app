import React, { useState } from 'react'
import ItemMenu from './ItemMenu'

const BarraLateral = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");


  const opcionesMenu = [
    'Inicio',
    'Mas Vistas',
    'Favoritas',
    'Nuevas',
    'Sorprendeme'];



  return (
    <aside>
      <nav>
        <ul className='listaMenu'>
          {opcionesMenu.map((opcion, index) => {
            const seleccionada = opcion === opcionSeleccionada;
            return <ItemMenu
              key={index}
              seleccionarOpcion={setOpcionSeleccionada}
              textoMenu={opcion} seleccionada={seleccionada}
            ></ItemMenu>
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default BarraLateral;