import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Card from './Components/Card'
import data from './data'


export default function App() {

	const cards = data.map(item => {
		return(
			<Card 
				key = {item.key}
				{...item} // passes all the components as a list of all properties
				// We could also have passed the item as an object to the prop
				// img = {item.coverImg}
				// rating = {item.stats.rating}
				// reviewCount = {item.stats.reviewCount}
				// location = {item.location}
				// title = {item.title}
				// price = {item.price}
				// openSpots = {item.openSpots}
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

