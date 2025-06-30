import React from 'react'

const Banner = ({titulo}) => {

   if (!titulo)
        return;

  return (
    <figure className='banner'>
        <h1 className='titulo'>
            {titulo}
        </h1>
    </figure>
  )
}

export default Banner;