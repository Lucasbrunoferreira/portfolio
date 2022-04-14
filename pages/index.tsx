import type { NextPage } from 'next';
import { styled } from '@stitches/react';
import Head from 'next/head';

const Home: NextPage = () => {
	const H1 = styled('h1', {
		color: '$highlight',
	});

	return (
		<div>
			<Head>
				<title>Lucas Bruno</title>
			</Head>

			<H1>Home</H1>
		</div>
	);
};

export default Home;
