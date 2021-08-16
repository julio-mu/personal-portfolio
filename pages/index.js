import { useEffect, useRef } from 'react';
import Head from 'next/head';

if (typeof document !== 'undefined') {
	<script>
		{(function (h, o, t, j, a, r) {
			h.hj =
				h.hj ||
				function () {
					(h.hj.q = h.hj.q || []).push(arguments);
				};
			h._hjSettings = { hjid: 2099858, hjsv: 6 };
			a = o.getElementsByTagName('head')[0];
			r = o.createElement('script');
			r.async = 1;
			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
			a.appendChild(r);
		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')}
	</script>;
}

export default function Home() {
	const ref = useRef(null);
	useEffect(() => {
		import('@lottiefiles/lottie-player');
	});

	return (
		<div className="container">
			<Head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Julio Mayorga Ubiría" />
				<meta
					property="og:title"
					content="Julio Mayorga Ubiría - Personal Portfolio"
				/>
				<meta
					property="og:description"
					content="I’m a Product designer skilled and creative stablishing products, content and experience strategies. I work end to end from research and strategy ideation to prototyping and facilitation with a solid UI design skillset and a front-end development background."
				/>
				<meta property="og:image" content="https://i.imgur.com/7obssea.jpg" />
				<meta property="og:url" content="http://juliomu.netlify.com" />
				<link rel="icon" href="https://i.imgur.com/oidfUae.png" />
				<link rel="stylesheet" href="style.css" type="text/css" />
				<title>Personal portfolio - Julio Mayorga Ubiría</title>
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
					<div className="subtitle">Product designer</div>
				</div>

				<div className="subtitle">
					I'm an experienced product designer with three years of experience
					conceptualizing and crafting digital products. I work end to end from
					ideation to front-end development, providing solid outcomes in terms
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
			</main>
		</div>
	);
}
