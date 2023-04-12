import React from 'react'
import Mensaje from '../components/Mensaje'
import Padre from '../components/Padre'
import CardFetch from '../components/CardFetch'

function Home() {
  return (
    <div>
      <div className='row'>
        <CardFetch/>
      </div>
    </div>
  )
}

export default Home