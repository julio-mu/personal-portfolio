import { useEffect, useRef } from 'react';
import Head from 'next/head';
import PortfolioV1 from './versions/v1/v1';
import PortfolioV2 from './versions/v2/v2';

// if (typeof document !== 'undefined') {
// 	<script>
// 		{(function (h, o, t, j, a, r) {
// 			h.hj =
// 				h.hj ||
// 				function () {
// 					(h.hj.q = h.hj.q || []).push(arguments);
// 				};
// 			h._hjSettings = { hjid: 2099858, hjsv: 6 };
// 			a = o.getElementsByTagName('head')[0];
// 			r = o.createElement('script');
// 			r.async = 1;
// 			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
// 			a.appendChild(r);
// 		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')}
// 	</script>;
// }

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
				<meta property="og:url" content="http://juliomu.com" />
				{/*Pinterest claim*/}
				<meta
					name="p:domain_verify"
					content="15087591809132734ab8aac326cbc607"
				/>
				<link rel="icon" href="https://i.imgur.com/I8CjsDS.png" />
				<link rel="stylesheet" href="style.css" type="text/css" />
				<title>Personal portfolio / Julio Mayorga Ubiría</title>
			</Head>
			<PortfolioV2/>
		</div>
	);
}
