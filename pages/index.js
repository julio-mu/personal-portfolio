import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>;
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
								src="https://assets2.lottiefiles.com/private_files/lf30_qbopezhr.json"
								background="transparent"
								speed="1"
								style={{ width: '32px', height: '32px' }}
								hover
							></lottie-player>
						</a>
						<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
						<a href="https://github.com/julio-mu" target="_blank">
							<lottie-player
								src="https://assets7.lottiefiles.com/packages/lf20_nwvalyrc.json"
								background="transparent"
								speed="1"
								style={{ width: '32px', height: '32px' }}
								hover
							></lottie-player>
						</a>
						<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
						<a href="http://instagram.com/juliomu_" target="_blank">
							<lottie-player
								src="https://assets4.lottiefiles.com/private_files/lf30_uxy2kzdu.json"
								background="transparent"
								speed="1"
								style={{ width: '32px', height: '32px' }}
								hover
							></lottie-player>
						</a>
						<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
						<a href="https://www.linkedin.com/in/juliomu/" target="_blank">
							<lottie-player
								src="https://assets3.lottiefiles.com/private_files/lf30_e2uywytr.json"
								background="transparent"
								speed="1"
								style={{ width: '32px', height: '32px' }}
								hover
							></lottie-player>
						</a>
					</div>
				</div>
				<div className="body">
					<div className="title">Hi, I'm Julio Mayorga</div>
					<div className="subtitle">UX Engineer at HOLOS Technology</div>
				</div>
				<div></div>
				<div className="presentation">
					I'm an experienced product designer with three years of experience
					conceptualizing and crafting digital products. I work end to end from
					ideation to front-end development, provinding solid outcomes in terms
					of product strategy, facilitation and prototyping. Skilled and
					creative establishing products, content and experience strategy. I
					proud myself of being a long term thinker which always takes care of
					the details in the process. Passionate about finding ways to make a
					product clear and easy to use in order to achieve its goals.
					Proficient delivering user flows, information architecture, wireframes
					and prototypes.
				</div>
			</main>
		</div>
	);
}
