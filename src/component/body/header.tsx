import { useState } from "react";
import logo from "./../../assets/logoNoBg2.png"
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { ThemeBtn } from "./themeBtn";
import { UseTheme } from "../context/useTheme";
const Header = () => {
    let context = UseTheme()
    const [menuOpen, setMenuOpen] = useState(false);
    let activelink: string = "text-primary font-bold"

    return (
        <header className={clsx("fixed top-0 w-full z-50 transition-all duration-300 border-b border-ftext/5 backdrop-blur-md bg-secondary", `${!context?.theme ? "dark": "light"}`)}>

            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex gap-[10px] items-center">
                    <NavLink to={"/"} className="flex items-center gap-1">
                        <h1 className="md:block hidden text-primary uppercase">Deexon Solutions</h1>
                        <img
                            src={logo}
                            alt="Deexon Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </NavLink>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-ftext">
                    {["Home", "Services", "About"].map(link => <li key={link}>
                        <NavLink
                            key={link}
                            onClick={() => setMenuOpen(false)}
                            to={link == "Home" ? "." : `${link.toLowerCase()}`}
                            className={({ isActive }) => clsx("block transition-colors duration-300", `${isActive ? activelink : ""}`, `${link == "Request Consultation" ? "text-primary " : "hover:text-primary "}`)}>
                            {link}
                        </NavLink>
                    </li>
                    )}
                </ul>

                {/* Right Side */}
                <div className="flex items-center space-x-6">
                    <NavLink
                        to="consultation"
                        className="hidden sm:block text-[11px] font-bold uppercase tracking-widest text-ftext border-b border-primary pb-1 hover:text-primary transition-all"
                    >
                        Request Consultation
                    </NavLink>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-ftext relative z-50"
                    >
                        <span
                            className={`block w-6 h-[1.5px] bg-ftext mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-[1.5px] bg-ftext mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-[1.5px] bg-ftext transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                }`}
                        ></span>
                    </button>
                    <ThemeBtn/>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-secondary/70 backdrop-blur-lg transition-all duration-300 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div
                    // onClick={(e) => e.stopPropagation()}
                    className={`absolute top-0 left-0 w-full bg-secondary border-t border-ftext/10 mt-20 py-10 px-6 transform transition-all duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-10"
                        }`}
                >
                    <ul className="space-y-8 text-sm font-bold uppercase tracking-widest text-ftext text-center">
                        {["Home", "Services", "About", "Request Consultation"].map(link => <li key={link}>
                            <NavLink
                                onClick={() => setMenuOpen(false)}
                                to={link == "Home" ? "." : `${link.toLowerCase()}` && link == "Request Consultation" ? "consultation" : `${link.toLowerCase()}`}
                                className={({isActive}) => clsx("block", `${isActive ? activelink : ""}`, `${link == "Request Consultation" ? "text-primary " : "hover:text-primary "}`)}>
                                {link}
                            </NavLink>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}
export { Header }
