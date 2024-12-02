import React from 'react'
import './Navegacion.css'


function Navegacion() {
    return (
        <nav className='barra'>
            <img src="imagenes/logo.png" alt="" className='logo'/>
            <a href="">Inicio</a>
            <a href="">Soporte</a>
            <a href="">Contacto</a>
            <div className='contenedor-carro'>
                <img src="imagenes/carrito.png" alt="" className='carro' />
            </div>
        </nav>
    )
}
export default Navegacion