'use client';
import Image from 'next/image';
import classes from './ReviewsSlider.module.scss';
import { TbStarFilled } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import useEmblaCarousel from 'embla-carousel-react';
const ReviewsSlider = () => {
	const [emblaRef] = useEmblaCarousel();

	const reviews = [
		{
			image: '/assets/google/users/kamil.png',
			name: 'Kamil Marucha',
			date: '22 Luty 2024',
			content: `
            Polecam bardzo serdecznie efekty po prawie 3 miesiącach współpracy
            są naprawdę super trener dostępny 24/7h jeśli jest jakiś problem lub
            zapytanie jest to w...
        `,
		},
		{
			image: '/assets/google/users/pawel.png',
			name: 'Paweł Knap',
			date: '22 Luty 2024',
			content: `
            Polecam bardzo Oskara, plan został idealnie rozpisany pod moje oczekiwania. Super trener zawsze pomoże jeśli są jakieś problemy czy pytania, posiada bardzo wielka wiedzę w kwestii tych spraw, w skrócie bardzo dobry...
        `,
		},
		{
			image: '/assets/google/users/mazurek.png',
			name: 'Michał Mazurek',
			date: '22 Luty 2024',
			content: `
            Polecam z całego serca, na własnej skórze się przekonałem, że ma sporą wiedzę i potrafi ją przekazać
        `,
		},
		{
			image: '/assets/google/users/duda.png',
			name: 'Bartłomiej "Karbownik" Duda',
			date: '22 Luty 2024',
			content: `
            Podczas współpracy z Oskarem w okresie pół roku zobaczyłem znaczący postęp w swojej sylwetce. W razie potrzeby od razu odpisywał treningi personalne na najwyższym poziomie.
        `,
		},
		{
			image: '/assets/google/users/12ha.png',
			name: '12ha ;]',
			date: '22 Luty 2024',
			content: `
            polecam bardzo, bardzo miła oraz pomocna osoba ze wszystkim pomoże
        `,
		},
		{
			image: '/assets/google/users/jakup.png',
			name: 'Pan Jakup',
			date: '22 Luty 2024',
			content: `
            Polecam Oskara, jako trenera z pasją, ogromną wiedzą i indywidualnym podejściem do klienta. Z Oskarem naprawdę dużo można się nauczyć, a także poznać swój organizm i mądrze kontrolować jego rozwój. Właściwy...
        `,
		},
		{
			image: '/assets/google/users/marcel.png',
			name: 'marcelkolaja1',
			date: '22 Luty 2024',
			content: `
            Polecam serdecznie, mega rozpisany plan pod hipertrofie. Ćwiczenia dopasowane do wygody klienta. Spora wiedza ze strony Oskara na wszystkie tematy sportowo siłowe. I do tego mega w porządku ziomek z...
        `,
		},
		{
			image: '/assets/google/users/niedzwiedz.png',
			name: 'niedźwiedź',
			date: '22 Luty 2024',
			content: `
            Jestem zadowolony z prowadzenia, wszystko przebiegało pod kontrolą Oskara, posiada on również bardzo dużą wiedzę, potrafi ją przekazać, plan dobierany jest idealnie pod ciebie. Polecam!
        `,
		},
		{
			image: '/assets/google/users/raily.png',
			name: 'Raily92',
			date: '22 Luty 2024',
			content: `
            Mega polecam, człowiek z pojęciem i wspaniałym podejściem do podopiecznego, stały kontakt oraz jasne i dokładne porady w celu poprawienia osiągów na siłowni, plany treningowe rozpisane w czytelny sposób...
        `,
		},
		{
			image: '/assets/google/users/jakub.png',
			name: 'jakub _',
			date: '22 Luty 2024',
			content: `
            Plan idealnie rozpisany, z założonym celem wyrobilismy sie idealnie. Widac ze oskar zna sie na tym, duzo dopytywal pamietal o podopiecznym staral sie jak najwiecej dawac podpowiedzi co do techniki i ogolnie...
        `,
		},
	];

	return (
		<div className={classes.box} ref={emblaRef}>
			<div className={classes.slider}>
				{reviews.map((review) => (
					<div key={review.name} className={classes.review}>
						<div className={classes.userBar}>
							<div className={classes.user}>
								<div className={classes.avatar}>
									<Image
										src={review.image}
										width={30}
										height={30}
										alt="Zdjęcie użytkownika"
									/>
								</div>
								<div>
									<span className={classes.name}>{review.name}</span>
									<span className={classes.date}>{review.date}</span>
								</div>
							</div>
							<div className={classes.google}>
								<FcGoogle />
							</div>
						</div>
						<div className={classes.stars}>
							<TbStarFilled />
							<TbStarFilled />
							<TbStarFilled />
							<TbStarFilled />
							<TbStarFilled />
						</div>
						<p>{review.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReviewsSlider;
