import React, { useRef } from 'react'

const Imagen = ({ imagen, imagenSeleccionada, actualizaFavoritas, expandida = false }) => {

    const imageRef = useRef(null);

    const handleAcercar = () => {
        if (imageRef.current){
            imageRef.current.style.transform = 'scale(2)';
        }
    }

    const handleAlejar = () => {
        if (imageRef.current){
            imageRef.current.style.transform = 'scale(1)';
        }
        
    }

    return (
        <figure
            className="imagenGaleria"
            style={expandida ? { width: '100%' } : null}
        >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                    ref={imageRef}
                    onClick={() => imagenSeleccionada(imagen.id)}
                    src={imagen.archivoImagen}
                    alt="imagen"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <figcaption >
                {expandida && <div>
                    <button className='botonBuscar' onClick={handleAcercar}>Acercar</button>
                    <button className='botonBuscar' onClick={handleAlejar}>Alejar</button>
                </div>}
                <div className='tituloImagen'>
                    <h3>{imagen.titulo}</h3>
                    <div onClick={() => actualizaFavoritas(imagen.id)}>
                        {imagen.favorita ?
                            <img src="img/favorito-activo.png" /> :
                            <img src="img/favorito.png" />
                        }
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default Imagen;