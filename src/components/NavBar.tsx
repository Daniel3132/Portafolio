import { Dispatch, FC, SetStateAction } from 'react';
import { sections } from '../data/data';


type NavBarProps = {
	setContent: Dispatch<SetStateAction<string>>;
}

const NavBar: FC<NavBarProps> = ({ setContent }) => {

	const handleCont = (name: string) => {
		setContent(name);
		sections.forEach(({id}) => {
			const element = document.getElementById(id);
			if (element) {
				element.classList.toggle('active', id === name);
			}
		});
	};

	return (
		<section id='navbar'>
			<div>
				{sections.map(({ id, label }) => (
					<h4
						key={id}
						id={id}
						className={id === 'projects' ? 'active' : ''}
						onClick={() => handleCont(id)}
					>
						{label}
					</h4>
				))}
			</div>
		</section>
	);
};

export default NavBar;
