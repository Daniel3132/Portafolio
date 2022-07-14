import React, { useState } from 'react'
import Contact from './Contact'
import Languages from './Languages'
import NavBar from './NavBar'
import Projects from './Projects'

const Content = () => {
    const [content, setContent] = useState('projects')
    return (
        <section id='content'>
            <NavBar content={content} setContent={setContent} />
            <div className='contentCont'>
                {
                    content === 'lang' ? <Languages />
                        : content === 'projects' ? <Projects />
                            : content === 'contact' ? <Contact />
                                : ''
                }
            </div>
        </section>
    )
}

export default Content