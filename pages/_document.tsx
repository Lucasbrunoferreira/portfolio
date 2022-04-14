import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<style
						id="stitches"
						dangerouslySetInnerHTML={{ __html: getCssText() }}
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
						rel="stylesheet"
					/>
					<meta name="title" content="Lucas Bruno Ferreira" />
					<meta name="description" content="Lucas Bruno - Portfolio" />
					<link rel="icon" href="/favicon.png" type="image/png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
