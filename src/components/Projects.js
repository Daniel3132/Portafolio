import React, { useState } from 'react';
import { projectsArray } from '../data/data';

const Projects = () => {

	const [visibleProjects, setVisibleProjects] = useState([]);

	const handleCont = (id) => {
		if (visibleProjects.includes(id)) {
			setVisibleProjects(visibleProjects.filter(p => p !== id));
		} else {
			setVisibleProjects([...visibleProjects, id]);
		}
	}

	return (
		<section id='projectsSection'>
			<div className='projectsCont'>
				{projectsArray.map((p, index) =>
					<div className='pCont' key={index} >
						<h4>{p.name}</h4>
						<div className='content'>
							<p className={visibleProjects.includes(index) ? "" : "invisible"} onClick={() => handleCont(index)}>{p.description}</p>
							<img className={visibleProjects.includes(index) ? "invisible" : ""} onClick={() => handleCont(index)} src={p.photo} alt="" />
						</div>
						<div>
							<a href={p.repositorie} target="_blank" rel='noreferrer'>GitHub</a>|
							<a href={p.deployment} target="_blank" rel='noreferrer'>Demo</a>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Projects;
