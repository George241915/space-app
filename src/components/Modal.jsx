import React from 'react'
import Imagen from './Imagen'

const Modal = ({ imagen, setImgSeleccionada }) => {
    return (
        <dialog className='modal'>
            <Imagen imagen={imagen} expandida={true}></Imagen>
            <form method='dialog'>
                <button className='botonCerrar' onClick={() => setImgSeleccionada(0)}>
                    <img src="iconos/cerrar.png" alt="boton de cerrar" width={32} />
                </button>
            </form>
        </dialog>
    )
}

export default Modal;