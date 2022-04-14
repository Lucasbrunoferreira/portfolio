import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
	theme: {
		fonts: {
			source: 'Source Sans Pro, sans-serif',
		},
		colors: {
			fontPrimary: '#FAFAFA',
			fontSecundary: '#596E93',
			backgroundPrimary: '#272A35',
			backgorundSecundary: '#333845',
			backgroundHighlight: '#191A21',
			hover: 'rgba(255, 126, 198, 0.05)',
			highlight: '#FF7EC6',
		},
		fontSizes: {
			1: '12px',
			2: '14px',
			3: '16px',
			4: '20px',
		},
	},
});
