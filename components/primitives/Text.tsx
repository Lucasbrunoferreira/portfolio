import { CSSProperties, styled } from '@stitches/react';

type Props = {
	value: string;
	size: 'small' | 'regular';
	align?: 'center';
	style?: CSSProperties;
};

const Text = (props: Props) => {
	const Span = styled('span', {
		color: '$fontPrimary',

		variants: {
			align: {
				center: {
					marginLeft: '25%',
				},
			},
			size: {
				small: {
					fontSize: '$1',
				},
				regular: {
					fontSize: '$3',
				},
			},
		},
	});

	return (
		<Span style={props.style} align={props.align} size={props.size}>
			{props.value}
		</Span>
	);
};

export default Text;
