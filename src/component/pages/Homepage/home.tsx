import { useRef, useEffect } from "react";
import logo from "./../../../assets/logoNoBg2.png"
import clsx from "clsx";
import bg1 from "./bg4.jpeg"
import bg5 from "./bg5.jpeg"
import { NavLink } from "react-router-dom";
import { Testimonials } from "./homePageInfo";

export const Home = () => {

    const trackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const scrollAmount = () => window.innerWidth * 0.82;
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        const onPrev = () => track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
        const onNext = () => track.scrollBy({ left: scrollAmount(), behavior: "smooth" });

        prevBtn?.addEventListener("click", onPrev);
        nextBtn?.addEventListener("click", onNext);

        return () => {
            prevBtn?.removeEventListener("click", onPrev);
            nextBtn?.removeEventListener("click", onNext);
        };
    }, []);


    return (
        <>

            {/* HERO */}
            <section style={{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
                className={clsx("relative min-h-screen flex items-center overflow-hidden max-[800px]:pt-30 max-[800px]:pb-20  ")}>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-wrap max-[1024px]:flex-col-reverse items-center justify-center">
                        <div className="lg:col-span-7 space-y-10 flex-1 min-w-[200px]">
                            <div className="flex items-center gap-4 animate-reveal">
                                <div className="h-px w-10 bg-yellow-400"></div>
                                <p className="text-[13px] font-bold uppercase tracking-[0.5em] text-yellow-400">Welcome to Deexon Solutions</p>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase leading-[0.85] text-white animate-reveal delay-1">
                                Digital Solutions That <br /> <span className="text-white uppercase">Help You Grow.</span>
                            </h1>
                            <p className="text-xl text-white/100 leading-relaxed max-w-xl font-semi animate-reveal delay-2">
                                We help businesses, startups, and individuals build strong digital foundations through modern websites, ICT training, and practical technology solutions designed for real-world success.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-reveal delay-3">
                                <a href="consultation" className="px-10 py-5 bg-yellow-400 text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 text-center uppercase">REQUEST CONSULTATION</a>
                                <a href="services" className="px-10 py-5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-500 text-center uppercase">Our Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Philosophy */}
            <section className="py-40 bg-[#0C0C10] border-y border-white/20">
                <div className="container mx-auto px-6 max-w-5xl text-center md:text-left">
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-4"><h2 className="text-[10px] font-bold uppercase md:text-xl tracking-[0.5em] text-yellow-400">Core Philosophy</h2></div>
                        <div className="md:col-span-8">
                            <h3 className="text-4xl md:text-5xl font-bold uppercase text-white mb-10 tracking-tighter leading-tight">Technology Made <br /> Simple & Powerful.</h3>
                            <p className="text-white/70 italic text-xl leading-relaxed font-semi">At Deexon Solutions, we combine creativity, innovation, and practical knowledge to deliver high-quality digital services. Whether you are a growing business or someone looking to build a tech career, we provide the tools and support you need to move forward with confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-40 bg-[#08080A] relative overflow-hidden">
                <div className="absolute md:top-24 t right-24 z-0 max-[768px]:left-24 max-[556px]:left-1 max-[556px]:top-0 opacity-[0.2] pointer-events-none select-none">
                    <img src={logo} alt="" width={400} />
                </div>
                <div className="w-full px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tightest">What We Do.</h2>
                            <p className="text-white text-lg uppercase tracking-widest font-light">Engineered for Progress.</p>
                        </div>
                        <p className="text-white max-w-xs text-sm border-l border-white/10 pl-6 italic">Practical digital services designed to support businesses and individuals.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
                        <div className="bg-black p-12 group hover:bg-white/[0.02] transition-colors duration-500">
                            <div className="mb-12 h-px w-12 bg-yellow-400"></div>
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Web Development</h3>
                            <p className="text-white leading-relaxed font-semi text-xl">Your business deserves a professional website that turns visitors into customers. We build modern, responsive websites designed to grow your brand and increase sales.</p>
                        </div>
                        <div className="bg-black p-12 group hover:bg-white/[0.02] transition-colors duration-500">
                            <div className="mb-12 h-px w-12 bg-yellow-400"></div>
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase">ICT Hubs</h3>
                            <p className="text-white leading-relaxed font-semi text-xl">Power your next tech project with our ICT hubs — perfect for startups, developers, and tech professionals who need a reliable environment to build and collaborate.</p>
                        </div>
                        <div className="bg-yellow-400/70 text-black p-12 flex flex-col justify-between group">
                            <div>
                                <div className="mb-12 h-px w-12 bg-black"></div>
                                <h3 className="text-2xl font-bold text-black mb-6 uppercase">Academy</h3>
                                <p className="text-black/80 leading-relaxed font-medium text-xl">Want to learn tech? Our academy provides hands-on training that helps you gain real skills and start building your next dream project.</p>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black pt-12">Enrollment Open →</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-40 bg-white/8 border-t border-white/5 overflow-hidden relative">
                <div className="container mx-auto px-6 mb-20 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                        <div className="h-px w-10 bg-yellow-400"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-yellow-400 font-mono uppercase">Client Intelligence</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tightest text-white leading-none uppercase">Feedback From <br /> <span className="text-yellow-400 italic">Clients.</span></h2>
                </div>

                <div className="relative flex items-center justify-center">
                    <button id="prevBtn" className="md:hidden absolute left-2 z-20 h-12 w-12 rounded-full border border-white/10 bg-[#0C0C10]/80 backdrop-blur-md flex items-center justify-center text-yellow-400 text-2xl font-light">‹</button>
                    <button id="nextBtn" className="md:hidden absolute right-2 z-20 h-12 w-12 rounded-full border border-white/10 bg-[#0C0C10]/80 backdrop-blur-md flex items-center justify-center text-yellow-400 text-2xl font-light">›</button>

                    <div className="relative flex overflow-x-hidden w-full">
                        <div ref={trackRef} className="animate-marquee-slow flex gap-6 md:gap-8">
                            {Testimonials.map((item, idx) => (
                                <div key={idx} className="testimonial-card bg-white/[0.02] border border-white/5 p-10 md:p-12 rounded-[2rem] backdrop-blur-sm transition-all duration-700 hover:border-yellow-400/30 flex flex-col justify-between h-auto min-h-[350px] w-full md:w-[500px]">
                                    <div>
                                        <div className="flex justify-between items-start mb-10">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`text-lg ${i < item.rating ? "text-yellow-400" : "text-white/10"}`}>★</span>
                                                ))}
                                            </div>
                                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest italic uppercase">Verified Client</span>
                                        </div>
                                        <blockquote className="text-white text-lg md:text-xl leading-relaxed font-light italic mb-10 whitespace-normal">"{item.feedback}"</blockquote>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-yellow-400 text-xs font-bold uppercase">{item.name.charAt(0)}</div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase tracking-widest uppercase">{item.name}</h4>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-400/60 mt-1 uppercase">{item.service}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-40 bg-[#08080A]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-5">
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tightest leading-none uppercase">Our Mission <br /> & Values.</h2>
                        </div>
                        <div className="lg:col-span-7 grid gap-16 border-l-4 border-white/50 pl-12 text-white/60">
                            <div>
                                <h4 className="text-yellow-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-mono uppercase">Our Mission</h4>
                                <p className="text-white/100 text-xl leading-relaxed font-semi">To provide affordable, high-quality digital and ICT services that empower individuals and businesses to succeed in a technology-driven world.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-white font-bold mb-4 uppercase text-xl tracking-widest uppercase">Innovation</h4>
                                    <p className="text-white/60 leading-relaxed">We continuously improve and create better ways to deliver effective technology solutions.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-4 uppercase text-xl tracking-widest uppercase">Integrity</h4>
                                    <p className="text-white/60 leading-relaxed">We build trust through transparency and help people unlock their potential through learning and digital growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="py-48 bg-[#0C0C10] text-center border-t border-white/5 relative">
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div> */}
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <h2 className="text-5xl md:text-9xl font-bold text-white mb-12 tracking-tightest leading-none uppercase">LET'S BUILD <br /> <span className="text-yellow-400 italic">TOGETHER.</span></h2>
                    <p className="text-white/80 text-xl mb-16 font-semibold max-w-2xl mx-auto">Whether you are a business, a startup, or an individual, we provide the digital foundation you need to grow and succeed.</p>
                    <NavLink to="consultation" className="px-7 py-5 bg-yellow-400 text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 uppercase">Request Consultation</NavLink>
                </div>
            </section>

        </>
    )
}