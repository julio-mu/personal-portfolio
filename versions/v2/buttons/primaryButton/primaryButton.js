export default function PrimaryButton({icon}) {
  return (
    <button className="flex flex-row justify-center bg-gradient-to-r from-[#4158D000] via-[#FFCC5050] to-[#FFCC5080] hover:bg-[#FFCC5050] text-white text-base font-semibold py-2 px-8 rounded-lg border-[#666666] border-[0.1px] hover:scale-105 ease-in duration-300">
      <img src={icon} className="pr-2"/>
      <div>Join our discord</div>
    </button>
  );
}