import React from 'react';

const NavBar = ({ setContent }) => {
	const sections = [
		{ id: 'lang', label: 'Tecnologías' },
		{ id: 'projects', label: 'Proyectos' },
		{ id: 'contact', label: 'Contacto' },
	];

	const handleCont = (name) => {
		setContent(name);
		sections.forEach((section) => {
			const element = document.getElementById(section.id);
			element.classList.toggle('active', section.id === name);
		});
	};

	return (
		<section id='navbar'>
			<div>
				{sections.map((section) => (
					<h4
						key={section.id}
						id={section.id}
						className={section.id === 'projects' ? 'active' : ''}
						onClick={() => handleCont(section.id)}
					>
						{section.label}
					</h4>
				))}
			</div>
		</section>
	);
};

export default NavBar;
