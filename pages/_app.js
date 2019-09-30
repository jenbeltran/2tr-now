import React from 'react';
import App from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<div>
				<Head>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<link href="https://fonts.googleapis.com/css?family=Pontano+Sans&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet" />
					<link href="/static/all.css" rel="stylesheet" />
					<link href="/static/navbar.css" rel="stylesheet" />
					<link href="/static/index.css" rel="stylesheet" />
				</Head>
				<body>
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</body>
			</div>
		);
	}
}

export default MyApp;
