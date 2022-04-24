import type { NextPage } from 'next';
import { styled } from '@stitches/react';
import { TopBar, BottomBar, CodeArea, Explorer, NavBar } from 'components';
import Head from 'next/head';

const Index: NextPage = () => {
	const Container = styled('div', {
		height: '100vh',
	});

	const CenterWrapper = styled('div', {
		backgroundColor: '$backgroundPrimary',
		display: 'flex',
		height: 'calc(100% - 55px)',
	});

	return (
		<>
			<Head>
				<title>Lucas Bruno</title>
			</Head>

			<Container>
				<TopBar />

				<CenterWrapper>
					<NavBar />
					<Explorer />
					<CodeArea />
				</CenterWrapper>

				<BottomBar />
			</Container>
		</>
	);
};

export default Index;
