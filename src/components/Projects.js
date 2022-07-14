import React from 'react';
import { projectsArray } from '../data/data';

const Projects = () => {

	const handleCont = (id) => {
		const description = document.getElementById("description" + id)
		const photo = document.getElementById("photo" + id)

		if (description.classList.contains("invisible")) {
			description.classList.remove("invisible")
			photo.classList.add("invisible")
		} else {
			photo.classList.remove("invisible")
			description.classList.add("invisible")
		}
	}

	return (
		<section id='projectsSection'>
			<div className='projectsCont'>
				{projectsArray.map((p, index) =>
					<div className='pCont' key={index} >
						<h4>{p.name}</h4>
						<div className='content'>
							<p id={"description" + index} className="invisible" onClick={() => handleCont(index)}>{p.description}</p>
							<img id={"photo" + index} onClick={() => handleCont(index)} src={p.photo} alt="" />
						</div>
						<div>
							<a href={p.repositorie} target="_blank" rel='noreferrer'>GitHub</a>|
							<a href={p.deployment} target="_blank" rel='noreferrer'>URL</a>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Projects