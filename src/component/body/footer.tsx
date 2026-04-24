import { Link, NavLink } from "react-router-dom"
import logo from "./../../assets/logoNoBg2.png"
import fblogo from "./../../assets/facebook.svg"
import instalogo from "./../../assets/instagram.svg"
import Tglogo from "./../../assets/telegram.svg"
import Xlogo from "./../../assets/twitter-original.svg"
import Whatlogo from "./../../assets/whatsapp.svg"


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">

                {/* Decorative Background */}
                <div className="absolute -bottom-24 -right-24 opacity- pointer-events-none select-none">
                    <h2 className="text-[20rem] text-white/10 font-bold leading-none">DXS</h2>
                </div>

                <div className="px-6 relative z-10">

                    {/* Top Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">

                        {/* Brand */}
                        <div className="col-span-2 md:col-span-4 space-y-8">
                            <div className="flex items-center gap-3">
                                <img
                                    src={logo}
                                    alt="Deexon Logo"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                                <span className="text-xs font-bold tracking-[0.4em] uppercase text-white">
                                    Deexon Solutions
                                </span>
                            </div>

                            <p className="text-white text-sm leading-relaxed max-w-xs">
                                Engineering high-performance technology ecosystems and elite engineering talent for the global frontier.
                            </p>

                            {/* Socials */}
                            <div className="flex gap-4">

                                <a href="https://whatsapp.com/channel/0029VbBGY3z89inh2GZ2KN19" target="_blank" rel="noopener noreferrer">
                                    <img src={Whatlogo} alt="WhatsApp" width={20} height={20} />
                                </a>

                                <a href="https://t.me/deexonsolutions" target="_blank" rel="noopener noreferrer">
                                    <img src={Tglogo} alt="Telegram" width={20} height={20} />
                                </a>

                                <a href="https://www.instagram.com/deexonsolutions" target="_blank" rel="noopener noreferrer">
                                    <img src={instalogo} alt="Instagram" width={20} height={20} />
                                </a>

                                <a href="https://www.facebook.com/profile.php?id=61581882894227" target="_blank" rel="noopener noreferrer">
                                    <img src={fblogo} alt="Facebook" width={20} height={20} />
                                </a>

                                <a href="https://x.com/deexonsolutions" target="_blank" rel="noopener noreferrer">
                                    <img src={Xlogo} alt="Twitter" width={20} height={20} />
                                </a>

                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-400">
                                Navigation
                            </h4>
                            <ul className="space-y-4">
                                {["Home", "Services", "About"].map((link) => (
                                    <li key={link}>
                                        <NavLink
                                            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                            className="text-sm text-white hover:text-yellow-400 transition-colors"
                                        >
                                            {link}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div className="col-span-1 md:col-span-3 space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-400">
                                Solutions
                            </h4>
                            <ul className="space-y-4">
                                {["Web Development", "Network Installation", "Digital Branding",].map((service) => (
                                    <li key={service}>
                                        <span className="text-sm text-white hover:text-yellow-400 transition-colors cursor-pointer">
                                            {service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="col-span-2 md:col-span-3 space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-400">
                                Quick Links
                            </h4>
                            <ul className="space-y-4">
                                {["Support", "Contact"].map((link) => (
                                    <li key={link}>
                                        <div
                                            id="/consultation"
                                            className="text-sm text-white hover:text-yellow-400 transition-colors"
                                        >
                                            {link}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

                        <p className="text-[10px] font-mono text-white uppercase tracking-widest">
                            &copy; {currentYear} Deexon Solutions. All rights reserved.
                        </p>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white hover:text-white transition-colors cursor-pointer">
                            SLA Status
                        </span>

                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[9px] font-mono text-white uppercase tracking-widest">
                                Systems Operational
                            </span>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
export { Footer }