import { styled } from '@stitches/react';
import Image from 'next/image';
import { Text } from 'components';

const TopBar = () => {
	const Wrapper = styled('div', {
		backgroundColor: '$backgroundHighlight',
		width: '100%',
		display: 'flex',
		paddingTop: 5,
		paddingBottom: 5,
	});

	const Menu = styled('div', {
		minWidth: '420px',
		display: 'flex',
		justifyContent: 'space-around',
	});

	const menuOptions = [
		'File',
		'Edit',
		'Selection',
		'View',
		'Go',
		'Run',
		'Terminal',
		'Help',
	];

	return (
		<Wrapper>
			<Menu>
				<Image
					alt="Visual Studio Code icon"
					src="/icons/vscode.svg"
					width={16}
					height={16}
				/>
				{menuOptions.map((option, index) => (
					<Text size="regular" key={index} value={option} />
				))}
			</Menu>

			<Text
				align="center"
				size="small"
				value="Lucas Bruno - Visual Studio Code"
			/>
		</Wrapper>
	);
};

export default TopBar;
