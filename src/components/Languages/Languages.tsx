import { LanguagesArray } from "../../data/data";
import { Language } from "../../types/types";


const Languages: React.FC = () => {
	return (
		<section id='languages'>
			<div className='cardCont'>
				{LanguagesArray.map((lang: Language, index: number) => (
					<div key={index} className='langCont'>
						<img src={lang.url} alt='' />
						<strong>{lang.name}</strong>
					</div>
				))}
			</div>
		</section>
	);
};

export default Languages;
