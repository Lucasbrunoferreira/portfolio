import { styled } from '@stitches/react';

const CodeArea = () => {
	const Wrapper = styled('div', {
		backgroundColor: '$backgorundSecundary',
		width: '100%',
	});

	return (
		<Wrapper>
			<span>CodeArea</span>
		</Wrapper>
	);
};

export default CodeArea;
