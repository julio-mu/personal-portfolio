import Head from 'next/head';
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>;

export default function Home() {
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
						<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
						<lottie-player
							src="https://assets2.lottiefiles.com/private_files/lf30_qbopezhr.json"
							background="transparent"
							speed="1"
							style={{ width: '48px', height: '48px' }}
							hover
						></lottie-player>
						<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
						<lottie-player
							src="https://assets7.lottiefiles.com/packages/lf20_nwvalyrc.json"
							background="transparent"
							speed="1"
							style={{ width: '48px', height: '48px' }}
							hover
						></lottie-player>
						<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
						<lottie-player
							src="https://assets4.lottiefiles.com/private_files/lf30_uxy2kzdu.json"
							background="transparent"
							speed="1"
							style={{ width: '48px', height: '48px' }}
							hover
						></lottie-player>
						<svg
							width="48"
							height="48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.625 2.625H3.375a.75.75 0 00-.75.75v17.25c0 .415.335.75.75.75h17.25a.75.75 0 00.75-.75V3.375a.75.75 0 00-.75-.75zM8.187 18.602H5.405V9.654h2.782v8.948zM6.797 8.43a1.612 1.612 0 110-3.224 1.612 1.612 0 010 3.224zm11.805 10.172h-2.78V14.25c0-1.038-.018-2.372-1.445-2.372-1.447 0-1.67 1.13-1.67 2.297v4.427H9.93V9.654h2.668v1.223h.037c.37-.703 1.277-1.446 2.632-1.446 2.817 0 3.335 1.854 3.335 4.264v4.907z"
								fill="#FCFCFC"
							/>
						</svg>
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
