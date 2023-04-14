import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function CardFetch() {

    const [respuesta, setRespuesta] = useState([])

  const execute = async () => {
      const json = await fetch('https://swapi.dev/api/people')
      if (!json.ok){
          return alert(`Error al hacer la peticion`);
      }
      const data = await json.json()
      console.log(data.results)
      setRespuesta(data.results)
  }

  useEffect(() => {
      console.log("johnson")
    }, [respuesta])
  return (
    <>
    <button></button>
    {respuesta.map((respuesta2,key) => {
        return (
        <>
            <div key={"respuesta" + key} className="card col-lg-4 col-md-6  align-items-stretch mt-4 mt-lg-0">
                <div className='card-body'>
                    <div className="icon-box">
                      <div className="icon"><i className="fas fa-hospital-user "></i></div>
                      <h4 className="color: black;">{respuesta2.name}</h4>
                      <p className="color: black;">{"Altura : " + respuesta2.height}</p>
                      <button type='button' onClick={() => {
                        const refresh = respuesta
                        refresh.splice(key-1 ,1)
                        console.log(refresh)
                        setRespuesta(refresh)
                        console.log(respuesta)
                      }}>Sacar</button>
                    </div>
                </div>
            </div>
        </>)
    })}
    </>
  )
}

export default CardFetch