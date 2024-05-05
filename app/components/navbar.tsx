import Logo from "./svgs/logo";

export default function Navbar() {
  return (
    <div className="flex justify-between w-[100vw] z-40 px-[50px] items-center py-8 fixed top-0 right-0">
      <Logo />
      <button className="text-xl font-kenyan px-4 py-2 text-white bg-brand_primary">
        CHALLENGE LEADEARBOARD
      </button>
    </div>
  );
}
