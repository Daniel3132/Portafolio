import { useState } from 'react';
import avatar from '../../assets/avatar.png';
import { ProfileDescription } from '../../data/about';


const Intro: React.FC = () => {
    const [imagen, setImagen] = useState(true);

    return (
        <section id='intro'>
            <h1>Daniel Correa - Desarrollador Frontend</h1>
            <div className='introText'>
                {imagen ?
                    <img
                        onMouseOver={() => setImagen(!imagen)}
                        className='imgProfile'
                        src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1653346546/samples/yo/WhatsApp_Image_2020-11-07_at_17.29.56-modified_ljvdzi.png' alt=""
                    />
                    :
                    <img
                        onMouseOver={() => setImagen(!imagen)}
                        className='imgProfile avatar'
                        src={avatar} alt=""
                    />
                }
                <p>{ProfileDescription}</p>
            </div>
        </section>
    )
}

export default Intro