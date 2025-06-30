import React, { useState } from 'react'
import Banner from './Banner'
import Imagen from './Imagen'
import Modal from './Modal';

const Galeria = () => {
  const [imgSeleccionada, setImgSeleccionada] = useState(0);
  const [listaImagenes, setListaImagenes] = useState([
    {
      id: 1,
      archivoImagen: "img/Card_1.png",
      titulo: "Imagen 1",
      favorita: false,
    },
    {
      id: 2,
      archivoImagen: "img/Card_2.png",
      titulo: "Imagen 2",
      favorita: false,
    },
    {
      id: 3,
      archivoImagen: "img/Card_3.png",
      titulo: "Imagen 3",
      favorita: false,
    },
    {
      id: 4,
      archivoImagen: "img/Card_4.png",
      titulo: "Imagen 4",
      favorita: false,
    },
    {
      id: 5,
      archivoImagen: "img/Card_5.png",
      titulo: "Imagen 5",
      favorita: false,
    },
    {
      id: 6,
      archivoImagen: "img/Card_6.png",
      titulo: "Imagen 6",
      favorita: false,
    },
    {
      id: 7,
      archivoImagen: "img/Card_7.png",
      titulo: "Imagen 7",
      favorita: false,
    },
    {
      id: 8,
      archivoImagen: "img/Card_8.png",
      titulo: "Imagen 8",
      favorita: false,
    }
  ]);

  const actualizaFavoritas = (id) => {
    const index = listaImagenes.findIndex((img) => img.id === id);
    listaImagenes[index].favorita = !listaImagenes[index].favorita;

    setListaImagenes([...listaImagenes]);
  }


  const fraseAplicacion = "La galeria mas completa e interesante de fotos del espacio";

  return (
        <section className="galeria">
            <Banner titulo={fraseAplicacion}></Banner>
            <h2 className="subtitulo">Navega por la galería</h2>
            <section className="imagenes">
                {listaImagenes.map((imagen) => <Imagen
                    imagen={imagen}
                    key={imagen.id}
                    imagenSeleccionada={setImgSeleccionada}
                    actualizaFavoritas={actualizaFavoritas}
                ></Imagen>)}
            </section>
            {imgSeleccionada > 0 && <Modal
                imagen={listaImagenes.find((img) => img.id === imgSeleccionada)}
                setImgSeleccionada={setImgSeleccionada}
            ></Modal>}
        </section>
    )
}

export default Galeria;