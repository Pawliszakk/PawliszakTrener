import About from '@/components/About/About';
import Certificates from '@/components/Certificates/Certificates';
import Clients from '@/components/Clients/Clients';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Offer from '@/components/Offer/Offer';
import Reviews from '@/components/Reviews/Reviews';

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Clients />
			<Offer />
			<Certificates />
			<Reviews />
			<Contact />
		</main>
	);
}
