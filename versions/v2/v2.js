import Link from "next/link";
import { useEffect, useRef } from "react";
import SecondaryButton from "./buttons/secondaryButton/secondaryButton";
import SecondaryButtonFullWidth from "./buttons/secondaryButton/secondaryButtonFullWidth";

export default function PortfolioV2() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <main className="min-w-full w-screen h-max min-h-screen text-[#E3D7FC] bg-black">
      <div className="flex flex-col w-full z-10">
        <div className="flex flex-row justify-between items-center px-40 md:px-20 sm:px-10 h-20 w-full animate-appear">
          <div className="flex flex-row justify-center items-center">
            <lottie-player
              ref={ref}
              src="https://assets7.lottiefiles.com/packages/lf20_a7v9qzxk.json"
              background="transparent"
              speed="1"
              style={{ width: "48px", height: "48px", marginRight: "16px" }}
              autoplay
              loop
            ></lottie-player>
            <Link
              href="https://drive.google.com/file/d/1Vh8OzQQEIdmN5mskHgZU3z6H5BT4kFHW/view?usp=sharing"
              passHref={true}
            >
              <a
                target="_blank"
                rel="noreferrer"
                className="font-normal text-base underline"
              >
                Download my curriculum
              </a>
            </Link>
          </div>
          <div className="flex flex-row">
            <a href="https://www.behance.net/juliomu" target="_blank">
              <lottie-player
                ref={ref}
                src="https://assets3.lottiefiles.com/packages/lf20_2nfv28q8.json"
                background="transparent"
                speed="1"
                style={{ width: "48px", height: "48px" }}
                hover
                mode="PlayMode.Bounce"
              ></lottie-player>
            </a>
            <a href="https://www.linkedin.com/in/juliomu/" target="_blank">
              <lottie-player
                ref={ref}
                src="https://assets8.lottiefiles.com/packages/lf20_u9ev9sub.json"
                background="transparent"
                speed="1"
                style={{ width: "48px", height: "48px" }}
                hover
              ></lottie-player>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start animate-appear pt-28 px-40 md:px-20 sm:px-10 ">
          <div className="flex flex-row items-center">
            <div className="flex flex-col">
              <div className="text-[#7928CA] font-extrabold text-8xl md:text-6xl sm:text-4xl sm:w-full">
                👋🏼 Hi, I'm Julio Mayorga
              </div>
              <div className="flex flex-row items-center sm:items-start sm:justify-between">
                <div className="font-semibold text-2xl sm:text-lg sm:pt-4">
                  Product designer based in Mendoza, Argentina
                </div>
				<div className="visible sm:hidden">
                <lottie-player
                  ref={ref}
                  src="https://assets8.lottiefiles.com/packages/lf20_xegjm3ug.json"
                  background="transparent"
                  speed=".5"
                  style={{ width: "84px", height: "84px" }}
                  autoplay
                  loop
                ></lottie-player>
				</div>
              </div>
              <div className="flex flex-row">
                <div className="font-normal text-base w-3/6 sm:w-full md:w-3/4 lg:w-3/4 sm:pt-4">
                  I’m a designer who loves stablishing practical strategies for
                  products and always gets passionate about making them clear
                  and easy to use 😍
                </div>
              </div>
              <div className="flex flex-row items-center pt-10 md:pb-40 lg:pb-40 sm:pb-40 w-full sm:flex-col">
                <div className="w-60 mr-4 sm:w-full sm:mr-0">
                  <SecondaryButtonFullWidth
                    icon="/email-24px.svg"
                    link={{
                      type: "external",
                      href: "mailto:juliomayorgaubiria@gmail.com",
                    }}
                    text="Send me an email"
                  />
                </div>
                <div className="w-70 sm:w-full sm:mt-4 ">
                  <SecondaryButtonFullWidth
                    icon="/linkedin-24px.svg"
                    link={{
                      type: "external",
                      href: "https://www.linkedin.com/in/juliomu/",
                    }}
                    text="Message me on LinkedIn"
                  />
                </div>
              </div>
            </div>
            {/* <lottie-player
              ref={ref}
              src="https://assets4.lottiefiles.com/packages/lf20_lftmi4os.json"
              background="transparent"
              speed="1"
              style={{ width: "180px", height: "180px", marginTop: "-84px" }}
              autoplay
            ></lottie-player> */}
          </div>
        </div>
      </div>
      <div className="animate-appear fixed bottom-0 right-40 lg:hidden md:hidden sm:hidden">
        <lottie-player
          ref={ref}
          src="https://assets10.lottiefiles.com/packages/lf20_3dNQ54.json"
          background="transparent"
          speed="1"
          style={{
            width: "600px",
            height: "600px",
            marginTop: "-148px",
          }}
          autoplay
          loop
        ></lottie-player>
      </div>
      <div className="fixed -bottom-1/4 -left-28 opacity-5">
        <lottie-player
          ref={ref}
          src="https://assets7.lottiefiles.com/packages/lf20_a7v9qzxk.json"
          background="transparent"
          speed=".5"
          style={{ width: "500px", height: "500px" }}
          autoplay
          loop
        ></lottie-player>
      </div>
      <div className="fixed top-20 left-0 z-0 rounded-full bg-[#7928CA] opacity-20 blur-3xl h-96 w-96"></div>
      <div className="fixed bottom-20 right-0 z-0 rounded-full bg-slate-200 opacity-10 blur-2xl h-96 w-96"></div>
    </main>
  );
}
