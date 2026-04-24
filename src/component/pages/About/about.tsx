import clsx from "clsx"
import { coreValues } from "./aboutInfo"
import programmer from "./programmer.jpg"

export const AboutPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">

                        <div className="lg:col-span-7 space-y-12 reveal">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] text-white">
                                About <br /> <span className="text-brand-gold italic">Deexon Solutions</span>
                            </h1>

                            <div className="space-y-8 max-w-2xl pl-10">
                                <p className="text-xl text-white leading-relaxed font">
                                    Welcome to DEEXON SOLUTIONS, a leading technology-driven company committed to empowering individuals and businesses through innovation, creativity, and digital excellence.
                                </p>
                                <p className="text-white leading-relaxed font">
                                    At DEEXON SOLUTIONS, we combine modern technology with practical knowledge to deliver exceptional results in Web Development, ICT Training, E-commerce Solutions, and Digital Transformation Services.
                                </p>
                                <p className="text-white leading-relaxed font">
                                    Our journey began with a simple vision — to bridge the gap between people and technology by providing affordable, high-quality digital services and education.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 reveal relative group">
                            <div className="absolute -inset-4 bg-brand-gold/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-all duration-1000"></div>
                            <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-3xl">
                                <img
                                    src={programmer}
                                    alt="About Deexon Solutions"
                                    width={500}
                                    height={625}
                                    className="rounded-[calc(1.5rem-4px)] w-full aspect-[4/5] object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}