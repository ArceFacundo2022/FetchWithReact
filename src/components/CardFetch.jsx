import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function CardFetch() {

  const [respuesta, setRespuesta] = useState([])
  const [reload, setReload] = useState(false)

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
            <div key={"respuesta" + key} className="card col-lg-3 col-md-4 bg-danger align-items-stretch mt-4 mt-lg-0" >
              {/* <img className='header-video' src="https://ms.yugipedia.com//9/94/Back-Anime-2.png" alt="" /> */}
              <img className='imgCard' src={respuesta2.card_images[0].image_url}/>
                <div className='card-body bg-dark p-2 text-white'>
                    <div className="icon-box">
                      <h4 className="color: black;">{respuesta2.name}</h4>
                      <p className="color: black;">{respuesta2.desc}</p>
                      <button type='button' className='btn btn-outline-danger' onClick={() => {
                        const refresh = respuesta
                        refresh[key].hidden = true
                        setRespuesta(refresh)
                        setReload(!reload)
                      }}>Sacar</button>
                    </div>
                </div>
            </div>
        </>)}else {
        }
    })}
    </>
  )
}

export default CardFetch