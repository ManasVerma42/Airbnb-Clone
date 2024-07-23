import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Card from './Components/Card'
import data from './data'


export default function App() {

	const cards = data.map(item => {
		return(
			<Card 
				img = {item.coverImg}
				rating = {item.stats.rating}
				reviewCount = {item.stats.reviewCount}
				location = {item.location}
				title = {item.title}
				price = {item.price}
			/>
		)
	});

	return (
		<div>
			<Navbar />
			<Hero />
			<section className='cards-container'>
				{cards}
			</section>
		</div>
	);
}

