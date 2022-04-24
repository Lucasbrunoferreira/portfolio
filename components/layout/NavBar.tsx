import { styled } from '@stitches/react';
import Image from 'next/image';
import { files } from 'utils';

const NavBar = () => {
	const Wrapper = styled('div', {
		backgroundColor: '$backgroundPrimary',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	});

	const Option = styled('div', {
		padding: '12px',
		position: 'relative',

		variants: {
			state: {
				none: {},
				active: {
					backgroundColor: '$hover',

					'&::before': {
						content: '',
						display: 'block',
						width: '2px',
						height: '60px',
						backgroundColor: '$highlight',
						position: 'absolute',
						top: 0,
						left: 0,
					},
				},
			},
		},

		'&:hover': {
			backgroundColor: '$hover',
			cursor: 'pointer',

			'&::before': {
				content: '',
				display: 'block',
				width: '2px',
				height: '60px',
				backgroundColor: '$highlight',
				position: 'absolute',
				top: 0,
				left: 0,
			},
		},
	});

	return (
		<Wrapper>
			<div>
				{files.map((route, index) => (
					<Option key={index} state={index == 0 ? 'active' : 'none'}>
						<Image
							alt={route.alt}
							width={45}
							height={45}
							src={route.navBarIcon}
						/>
					</Option>
				))}
			</div>

			<div>
				<Option>
					<Image alt="About me" width={45} height={45} src="/icons/user.svg" />
				</Option>

				<Option>
					<Image
						alt="Settings"
						width={45}
						height={45}
						src="/icons/settings.svg"
					/>
				</Option>
			</div>
		</Wrapper>
	);
};

export default NavBar;
