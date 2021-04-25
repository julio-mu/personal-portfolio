import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

/* const AboutMe = () => (
	<div>
		<div>About Me</div>
		<div className="presentation">
			I'm an experienced product designer with three years of experience
			conceptualizing and crafting digital products. I work end to end from
			ideation to front-end development, provinding solid outcomes in terms of
			product strategy, facilitation and prototyping. Skilled and creative
			establishing products, content and experience strategy. I proud myself of
			being a long term thinker which always takes care of the details in the
			process. Passionate about finding ways to make a product clear and easy to
			use in order to achieve its goals. Proficient delivering user flows,
			information architecture, wireframes and prototypes.
		</div>
	</div>
);

const ProductDesigner = () => (
	<div>
		<div>Product design</div>
		<div className="presentation">lalalalalalalal</div>
	</div>
);
const FrontEndDevelopment = () => (
	<div>
		<div>Front end development</div>
		<div className="presentation">222222222222</div>
	</div>
);
const Linkedin = () => (
	<div>
		<div>Linkedin</div>
		<div className="presentation">3333333333333333</div>
	</div>
);
const Instagram = () => (
	<div>
		<div>Instagram</div>
		<div className="presentation">4444444444444</div>
	</div>
); */

export default function Home() {
	/* const [showGithub, setShowGithub] = useState(false);
	const [showBehance, setShowBehance] = useState(false);
	const [showInstagram, setShowInstagram] = useState(false);
	const [showAboutme, setShowAboutme] = useState(false);
	const [showLinkedin, setShowLinkedin] = useState(false);

	const onGithubClick = () => {
		setShowGithub(true);
		setShowInstagram(false);
		setShowBehance(false);
		setShowAboutme(false);
		setShowLinkedin(false);
	};
	const onBehanceClick = () => {
		setShowBehance(true);
		setShowInstagram(false);
		setShowGithub(false);
		setShowAboutme(false);
		setShowLinkedin(false);
	};
	const onAboutmeClick = () => {
		setShowAboutme(true);
		setShowInstagram(false);
		setShowGithub(false);
		setShowBehance(false);
		setShowLinkedin(false);
	};
	const onLinkedinClick = () => {
		setShowLinkedin(true);
		setShowInstagram(false);
		setShowGithub(false);
		setShowBehance(false);
		setShowAboutme(false);
	};
	const onInstagramClick = () => {
		setShowInstagram(true);
		setShowAboutme(false);
		setShowGithub(false);
		setShowBehance(false);
		setShowLinkedin(false);
	}; */
	const ref = useRef(null);
	useEffect(() => {
		import('@lottiefiles/lottie-player');
	});

	return (
		<div className="container">
			<Head>
				<title>Julio Mayorga Ubiría</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<div className="header">
					<div className="logo">JULIOMU_</div>
					<div className="headerIcons">
						<a href="https://www.behance.net/juliomu" target="_blank">
							<lottie-player
								ref={ref}
								src="https://assets2.lottiefiles.com/private_files/lf30_qbopezhr.json"
								background="transparent"
								speed="1"
								style={{ width: '48px', height: '48px' }}
								hover
							></lottie-player>
						</a>

						<a href="https://github.com/julio-mu" target="_blank">
							<lottie-player
								ref={ref}
								src="https://assets7.lottiefiles.com/packages/lf20_nwvalyrc.json"
								background="transparent"
								speed="1"
								style={{ width: '48px', height: '48px' }}
								hover
								mode="PlayMode.Bounce"
							></lottie-player>
						</a>

						<a href="http://instagram.com/juliomu_" target="_blank">
							<lottie-player
								ref={ref}
								src="https://assets4.lottiefiles.com/private_files/lf30_uxy2kzdu.json"
								background="transparent"
								speed="1"
								style={{ width: '48px', height: '48px' }}
								hover
							></lottie-player>
						</a>

						<a href="https://www.linkedin.com/in/juliomu/" target="_blank">
							<lottie-player
								ref={ref}
								src="https://assets3.lottiefiles.com/private_files/lf30_e2uywytr.json"
								background="transparent"
								speed="1"
								style={{ width: '48px', height: '48px' }}
								hover
							></lottie-player>
						</a>
					</div>
				</div>
				<div className="body">
					<div className="title">Hi, I'm Julio Mayorga</div>
					<div className="subtitle">UX Engineer at HOLOS Technology</div>
				</div>

				<div
					className="subtitle"
					/* 					style={{
						fontSize: '18px',
						lineHeight: '1.5',
						letterSpacing: '0.03rem',
						marginBottom: '24px',
					}} */
				>
					I'm an experienced product designer with three years of experience
					conceptualizing and crafting digital products. I work end to end from
					ideation to front-end development, provinding solid outcomes in terms
					of product strategy, facilitation and prototyping. Skilled and
					creative establishing products, content and experience strategy.
					Passionate about finding ways to make a product clear and easy to use
					in order to achieve its goals. Proficient delivering user flows,
					information architecture, wireframes and prototypes.
				</div>
				<div
					style={{
						marginTop: '24px',
						fontWeight: '400',
						fontSize: '1.1rem',
						marginLeft: '0.4rem',
						letterSpacing: '0.03rem',
					}}
				>
					juliomu.biz@gmail.com
				</div>
				{/* 				<div className="tabs">
					<div onClick={onBehanceClick}>
						<lottie-player
							ref={ref}
							src="https://assets2.lottiefiles.com/private_files/lf30_qbopezhr.json"
							background="transparent"
							speed="1"
							style={{ width: '250px', height: '250px' }}
							hover
						></lottie-player>
					</div>
					<div onClick={onGithubClick}>
						<lottie-player
							ref={ref}
							src="https://assets7.lottiefiles.com/packages/lf20_nwvalyrc.json"
							background="transparent"
							speed="1"
							style={{ width: '250px', height: '250px' }}
							hover
						></lottie-player>
					</div>

					<div onClick={onLinkedinClick}>
						<lottie-player
							ref={ref}
							src="https://assets4.lottiefiles.com/private_files/lf30_uxy2kzdu.json"
							background="transparent"
							speed="1"
							style={{ width: '250px', height: '250px' }}
							hover
						></lottie-player>
					</div>

					<div onClick={onInstagramClick}>
						<lottie-player
							ref={ref}
							src="https://assets3.lottiefiles.com/private_files/lf30_e2uywytr.json"
							background="transparent"
							speed="1"
							style={{ width: '250px', height: '250px' }}
							hover
						></lottie-player>
					</div>
					<div onClick={onAboutmeClick}>
						<lottie-player
							ref={ref}
							src="https://assets3.lottiefiles.com/private_files/lf30_e2uywytr.json"
							background="transparent"
							speed="1"
							style={{ width: '250px', height: '250px' }}
							hover
						></lottie-player>
					</div>
				</div>
				{showAboutme ? <AboutMe /> : null}
				{showBehance ? <ProductDesigner /> : null}
				{showGithub ? <FrontEndDevelopment /> : null}
				{showInstagram ? <Instagram /> : null}
				{showLinkedin ? <Linkedin /> : null} */}
			</main>
		</div>
	);
}
