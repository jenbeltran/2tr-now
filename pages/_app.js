import React from 'react';
import App from 'next/app';
import Navbar from '../components/navbars/Navbar';
import StudentNavbar from '../components/navbars/StudentNavbar';
import TutorNavbar from '../components/navbars/TutorNavbar';
import Footer from '../components/Footer';
import Head from 'next/head';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		console.log('session from app.js');
		console.log(ctx.req.session.studentId);
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<div>
				<Head>
					{/* Bootstrap */}
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossOrigin="anonymous"
					/>
					{/* Fonts */}
					<link href="https://fonts.googleapis.com/css?family=Pontano+Sans&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet" />
					{/* CSS */}
					<link href="/static/all.css" rel="stylesheet" />
					<link href="/static/navbar.css" rel="stylesheet" />
					<link href="/static/index.css" rel="stylesheet" />
					<link href="/static/login.css" rel="stylesheet" />
					<link href="/static/register.css" rel="stylesheet" />
					<link href="/static/dashboard.css" rel="stylesheet" />
					<link href="/static/profile.css" rel="stylesheet" />
					<link href="/static/modal.css" rel="stylesheet" />
					<link href="/static/requestdetails.css" rel="stylesheet" />
					{/* Date picker */}

					<link rel="stylesheet" href="https://unpkg.com/react-day-picker/lib/style.css" />
				</Head>
				<StudentNavbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		);
	}
}

export default MyApp;
