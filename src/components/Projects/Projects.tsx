import { useState } from 'react';
import { projectsArray } from '../../data/data';
import { Project } from '../../types/types';


const Projects: React.FC = () => {

	const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

	const handleCont = (id: number) => {
		if (visibleProjects.includes(id)) {
			setVisibleProjects(visibleProjects.filter(p => p !== id));
		} else {
			setVisibleProjects([...visibleProjects, id]);
		}
	}

	return (
		<section id='projectsSection'>
			<div className='projectsCont'>
				{projectsArray.map((p: Project, index: number) =>
					<div className='pCont' key={index} >
						<h4>{p.name}</h4>
						<div className='content'>
							<p
								className={visibleProjects.includes(index) ? "" : "invisible"}
								onClick={() => handleCont(index)}
							>
								{p.description}
							</p>
							<img
								className={visibleProjects.includes(index) ? "invisible" : ""}
								onClick={() => handleCont(index)} src={p.photo} alt="" />
						</div>
						<div>
							<a
								href={p.repository}
								target="_blank"
								rel='noreferrer'>
								GitHub
							</a>
							|
							<a
								href={p.deployment}
								target="_blank"
								rel='noreferrer'>
								Demo
							</a>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Projects;
