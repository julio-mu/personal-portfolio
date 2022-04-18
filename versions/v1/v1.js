import { useEffect, useRef } from 'react';

export default function PortfolioV1() {
	const ref = useRef(null);
	useEffect(() => {
		import('@lottiefiles/lottie-player');
	});

	return (
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
              style={{ width: "48px", height: "48px" }}
              hover
            ></lottie-player>
          </a>

          <a href="https://github.com/julio-mu" target="_blank">
            <lottie-player
              ref={ref}
              src="https://assets7.lottiefiles.com/packages/lf20_nwvalyrc.json"
              background="transparent"
              speed="1"
              style={{ width: "48px", height: "48px" }}
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
              style={{ width: "48px", height: "48px" }}
              hover
            ></lottie-player>
          </a>

          <a href="https://www.linkedin.com/in/juliomu/" target="_blank">
            <lottie-player
              ref={ref}
              src="https://assets3.lottiefiles.com/private_files/lf30_e2uywytr.json"
              background="transparent"
              speed="1"
              style={{ width: "48px", height: "48px" }}
              hover
            ></lottie-player>
          </a>
        </div>
      </div>
      <div className="body">
        <div className="title">Hi, I'm Julio Mayorga</div>
        <div className="subtitle">
          Product designer based in Mendoza, Argentina
        </div>
      </div>

      <div className="subtitle">
        I’m skilled and creative stablishing simple and practical products and
        experience strategies. Passionate about finding ways to make a product
        clear and easy to use in order to achieve its goals. Proficient
        delivering user flows, information architecture, wireframes and
        prototypes.
      </div>
      <div
        style={{
          marginTop: "24px",
          fontWeight: "400",
          fontSize: "1.1rem",
          marginLeft: "0.4rem",
          letterSpacing: "0.03rem",
        }}
      >
        juliomu.biz@gmail.com
      </div>
    </main>
  );
}
