import { styled } from '@stitches/react';
import Image from 'next/image';
import { Text } from 'components';

const BottomBar = () => {
	const Wrapper = styled('div', {
		backgroundColor: '$backgroundHighlight',
		width: '100%',
		paddingTop: 5,
		paddingBottom: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	});

	const Row = styled('div', {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	});

	const Item = styled('div', {
		display: 'flex',
		alignItems: 'center',

		variants: {
			space: {
				small: {
					marginLeft: '10px',
				},
				double: {
					marginLeft: '10px',
					marginRight: '10px',
				},
			},
		},
	});

	return (
		<Wrapper>
			<Row>
				<Item space="double">
					<Image
						alt="Branch icon"
						src="/icons/branch.svg"
						width={14}
						height={14}
					/>

					<Text size="small" value="main" />
				</Item>

				<Row>
					<Item space="small">
						<Image
							alt="Error icon"
							src="/icons/error.svg"
							width={14}
							height={14}
						/>

						<Text size="small" value="0" />
					</Item>

					<Item>
						<Image
							alt="Alert icon"
							src="/icons/alert.svg"
							width={14}
							height={14}
						/>

						<Text size="small" value="0" />
					</Item>
				</Row>
			</Row>

			<Row>
				<Item space="small">
					<Image
						alt="Developed by icon"
						src="/icons/developed.svg"
						width={14}
						height={14}
					/>

					<Text size="small" value="Typescript React" />
				</Item>

				<Item space="double">
					<Image
						alt="Notification icon"
						src="/icons/checked.svg"
						width={14}
						height={14}
					/>

					<Text size="small" value="Prettier" />
				</Item>

				<Image alt="Branch icon" src="/icons/bell.svg" width={14} height={14} />
			</Row>
		</Wrapper>
	);
};

export default BottomBar;
