import { contactArray } from '../data/data'
import { ContactItem } from '../types/types'


const Contact: React.FC = () => {
	return (
		<section id='contactSection'>
			<div className='redes'>
				{
					contactArray.map((c: ContactItem, index: number) => (
						<div key={index}>
							<h3>{c.name}</h3>
							<a href={c.url} target='_blank' rel="noreferrer">
								<img className='mediaImg' src={c.img} alt="" />
							</a>
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Contact