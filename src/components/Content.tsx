import { useState } from 'react'
import Contact from './Contact'
import Languages from './Languages'
import NavBar from './NavBar'
import Projects from './Projects'


const Content: React.FC = () => {
    const [content, setContent] = useState<string>('projects')
    return (
        <section id='content'>
            <NavBar setContent={setContent} />
            <div className='contentCont'>
                {
                    content === 'lang' ? <Languages />
                        : content === 'projects' ? <Projects />
                            : content === 'contact' ? <Contact />
                                : null
                }
            </div>
        </section>
    )
}

export default Content
