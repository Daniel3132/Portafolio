import React, { useState } from 'react'
import avatar from '../assets/avatar.png'

const Intro = () => {

    const [imagen, setImagen] = useState(true);

    return (
        <section id='intro'>
            <h1>Daniel Correa - Desarrollador Frontend</h1>
            <div className='introText'>
                {imagen ?
                    <img onMouseOver={() => setImagen(!imagen)} className='imgProfile' src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1653346546/samples/yo/WhatsApp_Image_2020-11-07_at_17.29.56-modified_ljvdzi.png' alt="" />
                    :
                    <img onMouseOver={() => setImagen(!imagen)} className='imgProfile avatar' src={avatar} alt="" />
                }
                <p>Hola, soy un apasionado de la tecnología, la música y los videojuegos, estudio programación y hago proyectos como desarrollador Frontend con: Javascript, HTML y CSS, React - Redux...</p>
            </div>
        </section>
    )
}

export default Intro