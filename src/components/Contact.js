import React from 'react'
import { contactArray } from '../data/data'

const Contact = () => {
	return (
		<section id='contactSection'>
			<div className='redes'>
				{
					contactArray.map( (c, index ) => 
					<div key={index}>
						<h3>{c.name}</h3>
						<a href={c.url} target='_blank' rel="noreferrer">
							<img className='mediaImg' src={c.img} alt="" />
						</a>
					</div>
				)}
			</div>
		</section>
	)
}

export default Contact