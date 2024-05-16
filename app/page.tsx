import About from '@/components/About/About';
import Clients from '@/components/Clients/Clients';
import Hero from '@/components/Hero/Hero';
import Offer from '@/components/Offer/Offer';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Clients />
			<Offer />
		</main>
	);
}
