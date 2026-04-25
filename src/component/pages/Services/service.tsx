// import React, { useState, Component } from "react"
// import clsx from "clsx"
import { NavLink } from "react-router-dom"
import bg1 from "./bgService1.jpeg"
import bg2 from "./bgService2.jpeg"
import { websiteItems, features, workspaceItems } from "./serviceInfo"
import web from "./web-dev.jpg"
import academy from "./academy.jpg"
import ict from "./ict-hub.jpg"
import logo from "./../../../assets/logoNoBg.png"
import logo2 from "./../../../assets/logoNoBg2.png"

export const ServicesPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="relative pt-30 md:pt-40 pb-32 overflow-hidden h-[100%] border-b border-white/5">
                <div className="absolute md:right-24 opacity-[0.6] pointer-events-none select-none">
                    <img src={logo2} alt="" width={400} />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-1 w-1 rounded-full bg-yellow-400 animate-ping"></div>
                        <span className="text-[15px] font-bold uppercase tracking-[0.5em] text-yellow-400">
                            Solutions for Your Success
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl uppercase font-bold leading-[0.9] tracking-tighter mb-10 max-w-4xl">
                        Digital Tools to <br />
                        <span className="text-yellow-400 italic">Grow Your Brand.</span>
                    </h1>
                    <p className="text-white max-w-xl text-xl leading-relaxed mb-12">
                        From professional websites to hands-on training, we provide everything you need to succeed in today’s digital world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <NavLink
                            to="consultation"
                            className="px-10 py-5 bg-yellow-400 text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 text-center"
                        >
                            Free Consultation
                        </NavLink>
                        <NavLink
                            to="."
                            className="px-10 py-5 border border-white text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 text-center"
                        >
                            Explore What We Do
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Section 01: Websites */}
            <section id="services" className="py-32 border-b border-white/20 bg-[#0A0A0F]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="group relative overflow-hidden rounded-3xl border border-white/10 p-1 bg-white/5">
                            <img
                                src={web}
                                alt="Professional Website Design"
                                width={1200}
                                height={675}
                                className="rounded-[calc(1.5rem-4px)] w-full object-cover aspect-video"
                            />
                        </div>
                        <div className="space-y-8">
                            <span className="text-yellow-400 font-mono text-[10px] tracking-widest uppercase italic">01 // Websites</span>
                            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">Professional <br /> Web Design.</h2>
                            <p className="text-white text-lg leading-relaxed font">
                                Your website is your 24/7 salesperson. We create beautiful, fast, and easy-to-use sites that turn visitors into loyal customers.
                            </p>
                            <ul className="grid gap-4 pt-4">
                                {websiteItems.map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-sm font text-white">
                                        <div className="h-1 w-1 rounded-full bg-yellow-400"></div> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 02: Workspace */}
            <section className="py-32 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <span className="text-yellow-400 font-mono text-[10px] tracking-widest uppercase italic">02 // Workspace</span>
                            <h2 className="text-5xl font-bold tracking-tight text-white leading-tight">Reliable <br /> Tech Hubs.</h2>
                            <p className="text-white text-lg leading-relaxed font">
                                Need a place to work or better tools for your office? We set up the perfect environment for businesses and professionals to thrive.
                            </p>
                            <ul className="grid gap-4 pt-4">
                                {workspaceItems.map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-sm font text-white">
                                        <div className="h-1 w-1 rounded-full bg-yellow-400"></div> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 group relative overflow-hidden rounded-3xl border border-white/10 p-1 bg-white/5">
                            <img
                                src={ict}
                                alt="Modern Tech Workspace"
                                width={1200}
                                height={675}
                                className="rounded-[calc(1.5rem-4px)] w-full object-cover aspect-video"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 03: Academy */}
            <section className="py-32 border-b border-white/20 bg-[#0A0A0F]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="group relative overflow-hidden rounded-3xl border border-white/10 p-1 bg-white/5">
                            <img
                                src={academy}
                                alt="Tech Skills Training"
                                width={1200}
                                height={675}
                                className="rounded-[calc(1.5rem-4px)] w-full object-cover aspect-video"
                            />
                        </div>
                        <div className="space-y-8 bg-yellow-400 p-5 md:p-12 rounded-3xl text-black shadow-[0_0_50px_-12px_rgba(212,175,55,0.2)]">
                            <span className="text-black/50 font-mono text-[10px] tracking-widest uppercase italic font-bold">03 // Learning</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">The Tech <br /> Academy.</h2>
                            <p className="text-black text-lg leading-relaxed font-medium">
                                Start your career in tech with confidence. Our training is practical, easy to follow, and focused on helping you find real jobs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Deexon Section */}
            <section className="py-40 bg-black relative">
                <div className="absolute md:top-24 t right-24 z-0 max-[768px]:left-24 max-[556px]:left-1 max-[556px]:top-0 opacity-[0.4] pointer-events-none select-none">
                    <img src={logo} alt="" width={1200} height={1200} />
                </div>
                <div className="container mx-auto px-6">
                    <div className="mb-24">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">Why Deexon Solutions?</h2>
                        <div className="h-px w-34 md:w-xl bg-yellow-400"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        {features.map((item, i) => (
                            <div key={i} className="bg-black p-10 group hover:bg-white/[0.02] transition-colors">
                                <span className="text-yellow-400 font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">
                                    0{i + 1}
                                </span>
                                <item.icon className="text-yellow-400 -mt-2 mb-6 mx-auto block" />
                                <h3 className="font-bold text-xl mb-4 text-white">{item.title}</h3>
                                <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${bg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="py-48 text-center bg-black relative border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-16">
                        READY TO <br /> <span className="text-yellow-400 italic">START?</span>
                    </h2>
                    <p className="text-white text-xl font-semi mb-16 max-w-lg mx-auto leading-relaxed">
                        Let’s talk about how we can help you reach your goals with the right technology.
                    </p>
                    <NavLink
                        to="consultation"
                        className="inline-block px-12 py-6 bg-yellow-400 text-black text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all duration-500"
                    >
                        Get Free Consultation
                    </NavLink>
                </div>
            </section>
        </>
    )
}