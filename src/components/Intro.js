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
            <h1>Daniel Correa - Desarrollador Frontend</h1>
            <div className='introText'>
                <img className='imgProfile' src='https://res.cloudinary.com/dcyn2bjb9/image/upload/v1653346546/samples/yo/WhatsApp_Image_2020-11-07_at_17.29.56-modified_ljvdzi.png' alt="" />

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores tempore, porro molestias nam quae, tempora dicta recusandae
                    reprehenderit quia id numquam repudiandae facilis, sequi sunt incidunt cumque?
                    Perspiciatis, praesentium distinctio.</p>
            </div>


            {/* <button onClick={() => changeTheme()}>O</button> */}
        </section>
    )
}

export default Intro