import {useRef} from 'react'

const Busqueda = () => {
 
  const cajaBusqueda = useRef(null);
  const parrafoValor = useRef(null);

  const handleBuscar = () => {
    parrafoValor.current.textContent = cajaBusqueda.current.value;
  }
  
  return (
    <>
      <div className='busqueda'>
        <input ref={cajaBusqueda} type='text' className='cajaBusqueda'/>
        <button className='botonBuscar' onClick={handleBuscar}>Buscar</button>
      </div>    
      <p style={{color: 'white'}} ref={parrafoValor}></p> 
    </>
  )
}

export default Busqueda;