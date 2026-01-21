import clsx from "clsx";
import { logo } from "../../assets/iconExports/index.js";
import NavMenu from "./NavMenu.jsx";

const Navbar = () => {
  return (
    <nav
      className={clsx(
        "absolute top-8 left-1/2 -translate-x-1/2 z-50 bg-header-overlay",
        "max-w-7xl w-full",
        "flex items-center justify-start mx-4",
        "border-slate-700 px-6 py-4 rounded-full text-white text-sm",
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-start gap-4">
        <img src={logo} alt="Logo" />
        <p className="font-extrabold text-2xl text-secondary">PiligrimTales</p>
      </div>
      <div className="items-center justify-center grow">
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
