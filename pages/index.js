import Head from 'next/head'
import Header from './../components/navigation/Header';
import NavBar from './../components/navigation/NavBar';
import Results from '../components/movies/Results';
import requests from '../utils/requests';

export default function Home({results}) {
	return (
		<div>
			<Head>
				<title>Hulu 2.0</title>
				<link rel="icon" href="/hulu.ico" />
			</Head>

			<Header />
			<NavBar/>
			<Results results={results} />

		</div>
	)
}

export async function getServerSideProps(context) {
	const genre = context.query.genre
	console.log(genre)
	console.log(requests[genre])
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	).then(res => res.json())
	return {
		props: {
			results: request.results
		}
	}
}