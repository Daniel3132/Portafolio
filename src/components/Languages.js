import React from 'react'
import { LanguagesArray } from '../data/data'

const Languages = () => {
	return (
		<section id='languages'>
			<div className='cardCont'>
				{
					LanguagesArray.map((lang, index) =>
						<div key={index} className='langCont'>
							<img src={lang.url} alt="" />
							<strong>{lang.name}</strong>
						</div>
					)
				}
			</div>
		</section>
	)
}

export default Languages