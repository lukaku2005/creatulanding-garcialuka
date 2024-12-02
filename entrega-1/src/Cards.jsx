import './Cards.css'
import React from 'react'


function Cards() {
    return(
    <div className='contenedor'>
        <div className='card'>
            <img src="imagenes/carta-pokemon.jpg" alt="" className='imgcard'/>
            <div className='info'>
                <div className='boton'><button className='boton'>Comprar</button></div>
            </div>
        </div>
        <div className='card'>
            <img src="imagenes/carta-pokemon.jpg" alt="" className='imgcard'/>
            <div className='info'>
                <div className='boton'><button className='boton'>Comprar</button></div>
            </div>
        </div>
        <div className='card'>
            <img src="imagenes/carta-pokemon.jpg" alt="" className='imgcard'/>
            <div className='info'>
                <div className='boton'><button className='boton'>Comprar</button></div>
            </div>
        </div>
        <div className='card'>
            <img src="imagenes/carta-pokemon.jpg" alt="" className='imgcard'/>
            <div className='info'>
                <div className='boton'><button className='boton'>Comprar</button></div>
            </div>
        </div>
    </div>
    )
}


export default Cards
