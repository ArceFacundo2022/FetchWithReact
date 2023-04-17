import React from 'react'
import CardFetch from '../components/CardFetch'
import { useState } from 'react'

function Home() {

  const [show, setShow] = useState(false)

  return (
    <div className='row'>
      <button type='button' hidden={show} onClick={() => {setShow(true)}}>Mostrar Cartas</button>
      { show && <CardFetch/>}
    </div>
  )
}

export default Home