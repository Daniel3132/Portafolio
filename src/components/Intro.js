import React from 'react'

const Intro = () => {

    const changeTheme = () => {
        const body = document.getElementById('body')

        if (body.classList.contains('dark')) {
            body.classList.remove('dark')
            body.classList.add('light')

        } else if (body.classList.contains('light')) {
            body.classList.remove('light')
            body.classList.add('dark')
        }
    }

    return (
        <section id='intro'>
            <div>
                <h1>Daniel Correa</h1>
                <img className='imgProfile' src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1653346546/samples/yo/WhatsApp_Image_2020-11-07_at_17.29.56-modified_ljvdzi.png' alt="" />
                <h3>Desarrollador Frontend</h3>
            </div>
            {/* <button onClick={() => changeTheme()}>O</button> */}
        </section>
    )
}

export default Intro