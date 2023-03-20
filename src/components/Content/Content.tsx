import { useState } from 'react'
import Contact from '../Contact/Contact'
import Languages from '../Languages/Languages'
import NavBar from '../NavBar/NavBar'
import Projects from '../Projects/Projects'


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
