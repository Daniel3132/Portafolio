import { Dispatch, FC, SetStateAction } from 'react';

type NavBarProps = {
	setContent: Dispatch<SetStateAction<string>>;
}

const NavBar: FC<NavBarProps> = ({ setContent }) => {
	const sections = [
		{ id: 'lang', label: 'Tecnologías' },
		{ id: 'projects', label: 'Proyectos' },
		{ id: 'contact', label: 'Contacto' },
	];

	const handleCont = (name: string) => {
		setContent(name);
		sections.forEach((section) => {
			const element = document.getElementById(section.id);
			if (element) {
				element.classList.toggle('active', section.id === name);
			}
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
