import React from 'react'

const NavBar = ({ setContent }) => {

	const handleCont = (name) => {
		setContent(name);

		const active = document.querySelectorAll('.active');
		active.forEach(
			e => e.classList.remove('active')
		);

		const element = document.getElementById(name);
		element.classList.add('active');
	}

	return (
		<section id='navbar'>
			<div>
				<h4 id='lang' onClick={() => handleCont('lang')}>Languages</h4>
				<h4 id='projects' className='active' onClick={() => handleCont('projects')}>Projects</h4>
				<h4 id='contact' onClick={() => handleCont('contact')}>Contact</h4>
			</div>
		</section>
	)
}

export default NavBar