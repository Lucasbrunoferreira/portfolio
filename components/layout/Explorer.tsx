import { styled } from '@stitches/react';
import { Text } from 'components';
import Image from 'next/image';

const Explorer = () => {
	const routes = [
		{
			icon: '/icons/html.svg',
			path: '',
			alt: 'About me',
			text: 'index.html',
		},
		{
			icon: '/icons/js.svg',
			path: '',
			alt: '',
			text: 'projects.js',
		},
		{
			icon: '/icons/json.svg',
			path: '',
			alt: '',
			text: 'contacts.json',
		},
		{
			icon: '/icons/css.svg',
			path: '',
			alt: '',
			text: 'articles.css',
		},
	];

	const Wrapper = styled('div', {
		backgroundColor: '$backgroundHighlight',
		width: '320px',
		paddingTop: '5px',
	});

	const Item = styled('div', {
		display: 'flex',
		alignItems: 'center',
		marginTop: '5px',
		padding: '3px 0px 3px 20px',

		'&:hover': {
			backgroundColor: '$hover',
			cursor: 'pointer',
		},
	});

	return (
		<Wrapper>
			<Text size="small" style={{ marginLeft: '25px' }} value="EXPLORER" />

			<Item>
				<Image alt="About me" width={20} height={20} src="/icons/chevron.svg" />
				<Text size="regular" value="LUCASBRUNO" />
			</Item>

			{routes.map((route, index) => (
				<Item key={index}>
					<Image alt={route.alt} width={20} height={20} src={route.icon} />

					<Text style={{ marginLeft: 5 }} size="regular" value={route.text} />
				</Item>
			))}
		</Wrapper>
	);
};

export default Explorer;
