import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function CardFetch() {

  const [respuesta, setRespuesta] = useState([])

  const execute = async () => {
    const json = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=%27Normal%20Monster%27')
    if (!json.ok){
        return alert(`Error al hacer la peticion`);
    }
    const data = await json.json()
    setRespuesta(data.data)
  }

  useEffect(() => {

    execute()
  }, [])

  return (
    <>
    {respuesta.map((respuesta2,key) => {
      if(!respuesta2.hidden){
        return (
        <>
            <div key={"respuesta" + key} className="card col-lg-3 col-md-4  align-items-stretch mt-4 mt-lg-0">
              <img className='imgCard' src={respuesta2.card_images[0].image_url}/>
                <div className='card-body'>
                    <div className="icon-box">
                      <div className="icon"><i className="fas fa-hospital-user "></i></div>
                      <h4 className="color: black;">{respuesta2.name}</h4>
                      <p className="color: black;">{respuesta2.desc}</p>
                      <button type='button' onClick={() => {
                        const refresh = respuesta
                        console.log(refresh[key])
                        refresh[key].hidden = true
                        setRespuesta(refresh)
                      }}>Sacar</button>
                    </div>
                </div>
            </div>
        </>)}
    })}
    </>
  )
}

export default CardFetch