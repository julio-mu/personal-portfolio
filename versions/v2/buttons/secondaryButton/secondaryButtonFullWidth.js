import Link from "next/link";

export default function SecondaryButtonFullWidth({icon, link, text}) {

  if(link) {
  if(link.type === 'internal'){
    return (
      <Link href={link.href} passHref>
        <a target="_blank" rel="noreferrer">
          <div className="relative group">
            <div className="absolute bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur -inset-1 z-0 opacity-75 hover:blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>
            <button className="relative flex flex-row justify-center bg-black text-slate-200 text-base font-semibold py-2 px-8 w-full rounded-lg border-[#666666] border-[0.1px] hover:scale-[1.015] ease-in duration-300 z-10 sm:px-0">
              <img src={icon} className="pr-2" />
              <div className="group-hover:transition duration-200">
                {text}
              </div>
            </button>
          </div>
        </a>
      </Link>
    );
    } else if(link.type === 'external') {
      return (
          <a target="_blank" rel="noreferrer" href={link.href}>
            <div className="relative group">
              <div className="absolute bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur -inset-1 z-0 opacity-75 hover:blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>
              <button className="relative flex flex-row justify-center bg-black text-slate-200 text-base font-semibold py-2 px-8 w-full rounded-lg border-[#666666] border-[0.1px] hover:scale-[1.015] ease-in duration-300 z-10 sm:px-0">
                <img src={icon} className="pr-2" />
                <div className="group-hover:transition duration-200">
                  {text}
                </div>
              </button>
            </div>
          </a>
      );
    }
  }
}