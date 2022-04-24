import { styled } from '@stitches/react';
import { Text } from 'components';
import Image from 'next/image';
import { files } from 'utils';

const Explorer = () => {
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

			{files.map((route, index) => (
				<Item key={index}>
					<Image
						alt={route.alt}
						width={20}
						height={20}
						src={route.explorerIcon}
					/>

					<Text style={{ marginLeft: 5 }} size="regular" value={route.text} />
				</Item>
			))}
		</Wrapper>
	);
};

export default Explorer;
