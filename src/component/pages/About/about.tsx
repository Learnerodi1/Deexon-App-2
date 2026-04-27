import { coreValues } from "./aboutInfo"
import { useEffect } from "react"
import programmer from "./programmer.jpg"
import logo from "./../../../assets/logoNoBg.png"
import ceo from "./deexon-ceo.png"
import ambassador from "./deexon-ambassador.png"
import bgAbout from "./bgAbout.jpeg"


export const AboutPage = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("active");
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, []);
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 border-b border-ftext/5">
                <div className="absolute left-0 right-0 top-4 opacity-[0.4] pointer-events-none select-none">
                    <img src={logo} alt="" width={1200} height={1200} />
                </div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">

                        <div className="lg:col-span-7 space-y-12 reveal">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] text-ftext">
                                About <br /> <span className="text-primary italic">Deexon Solutions</span>
                            </h1>

                            <div className="space-y-8 max-w-2xl pl-10">
                                <p className="text-xl text-ftext leading-relaxed font">
                                    Welcome to DEEXON SOLUTIONS, a leading technology-driven company committed to empowering individuals and businesses through innovation, creativity, and digital excellence.
                                </p>
                                <p className="text-ftext leading-relaxed font">
                                    At DEEXON SOLUTIONS, we combine modern technology with practical knowledge to deliver exceptional results in Web Development, ICT Training, E-commerce Solutions, and Digital Transformation Services.
                                </p>
                                <p className="text-ftext leading-relaxed font">
                                    Our journey began with a simple vision — to bridge the gap between people and technology by providing affordable, high-quality digital services and education.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 reveal relative group">
                            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-all duration-1000"></div>
                            <div className="relative p-1 bg-gradient-to-br from-ftext/20 to-transparent rounded-3xl">
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

            {/* Mission & Vision */}
            <section
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgAbout})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="relative py-30 border-b border-ftext/5 bg-secondary">
                <div className="max-w-7xl mx-auto px-6 max-[400px]:px-3">
                    <div className="grid lg:grid-cols-2 gap-px bg-ftext/10 border border-ftext/10 overflow-hidden">
                        <div className="bg-secondary text-ftext hover:text-secondary p-20 max-[400px]:p-10 reveal hover:bg-ftext/60 transition-colors">
                            <h2 className="text-4xl  text-center font-bold mb-8 tracking-tight">Our Mission</h2>
                            <p className="text-center text-xl font leading-relaxed">
                                To provide affordable, high-quality digital and ICT services that empower individuals and businesses to thrive in a technology-driven world.
                            </p>
                        </div>
                        <div className=" text-center p-20 max-[400px]:p-10 reveal hover:bg-ftext/[0.02] transition-colors">
                            <h2 className="text-4xl text-white text-center font-bold mb-8 tracking-tight">Our Vision</h2>
                            <p className="text-white text-xl text-center font leading-relaxed">
                                To become a leading hub for digital innovation, ICT training, and business transformation across Africa and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="relative py-30 bg-secondary border-b border-ftext/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-ftext mb-24 reveal">
                        Our Core <span className="text-primary">Values</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-px bg-ftext/5 border border-ftext/5">
                        {coreValues.map((v) => (
                            <div key={v.title} className="bg-secondary p-12 group hover:bg-ftext/[0.02] transition-all duration-500 reveal">
                                <h3 className="text-2xl font-bold text-ftext mb-6 tracking-tight">{v.title}</h3>
                                <p className="text-ftext text-base leading-relaxed font">{v.desc}</p>
                                <div className="mt-8 h-px w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Ambassador */}
            <section className="relative py-30 border-b border-ftext/10 bg-secondary">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl text-ftext md:text-6xl font-bold text-center mb-24 reveal">
                        Our <span className="text-primary">Brand </span> Ambassador
                    </h2>

                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-5 reveal group">
                            <div className="relative p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl">
                                <img
                                    src={ambassador}
                                    alt="Miss Tiffany Grant"
                                    width={500}
                                    height={625}
                                    className="rounded-[calc(1.5rem-4px)] w-full object-cover"
                                />
                            </div>
                            <p className="mt-8 text-ftext font-bold text-xl tracking-tight">Miss Tiffany Grant</p>
                            <p className="text-primary text-xs font-mono tracking-widest uppercase mt-1">Brand Ambassador</p>
                        </div>

                        <div className="lg:col-span-7 space-y-8 text-ftext text-lg font leading-relaxed reveal">
                            <p><strong className="text-ftext">Miss Tiffany Grant</strong><br />Brand Ambassador, DEEXON SOLUTIONS.</p>
                            <p>At DEEXON SOLUTIONS, we believe that a strong brand deserves a strong voice — one that reflects our values of innovation, excellence, and global impact. That’s why we are proud to have Miss Tiffany Grant, from Georgia, USA, as our distinguished Brand Ambassador.</p>
                            <p>Miss Tiffany Grant brings a dynamic international presence to our brand. She represents the creativity, passion, and forward-thinking spirit that drives everything we do at DEEXON SOLUTIONS. As a visionary advocate for technology, digital innovation, and youth empowerment, she continues to inspire individuals across borders to embrace the opportunities of the digital world.</p>
                            <p>As the face of DEEXON SOLUTIONS, she plays an important role in:</p>
                            <ul className="space-y-4 border-l-4 border-primary pl-8 py-2">
                                <li className="flex gap-4 items-start"><div className="h-1 w-2 bg-primary mt-3"></div> <span>Promoting awareness of our ICT and digital services on a global scale.</span></li>
                                <li className="flex gap-4 items-start"><div className="h-1 w-2 bg-primary mt-3"></div> <span>Inspiring young people to explore and master modern technology.</span></li>
                                <li className="flex gap-4 items-start"><div className="h-1 w-2 bg-primary mt-3"></div> <span>Strengthening our brand connection through community engagement, global outreach, and creative collaborations.</span></li>
                            </ul>
                            <p>Her authenticity, leadership, and dedication make her a true representation of our brand’s vision — to empower individuals and businesses through technology, innovation, and education.</p>
                            <p className="text-primary text-2xl italic font pt-8 border-t border-ftext/5">
                                “Technology connects us all — and DEEXON SOLUTION is building bridges through innovation and learning.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder & CEO */}
            <section className="relative py-30 bg-secondary">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl text-ftext md:text-6xl font-bold text-center mb-24 reveal">
                        MEET OUR FOUNDER & CEO
                    </h2>

                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-7 space-y-8 text-ftext text-lg font leading-relaxed reveal order-2 lg:order-1">
                            <p><strong className="text-ftext">David Inyang</strong><br />Founder & CEO DEEXON SOLUTIONS</p>
                            <p>At the core of DEEXON SOLUTIONS stands Mr. David Inyang, a visionary entrepreneur and proud Nigerian citizen, whose passion for technology and innovation has shaped the foundation of the company.</p>
                            <p>With a clear mission to empower individuals and businesses through digital transformation, David founded DEEXON SOLUTION as a platform where creativity, technology, and education meet. His vision is to make technology more than just a tool — but a bridge to opportunity, growth, and empowerment across Africa and beyond.</p>

                            <p className="text-ftext font-bold tracking-widest text-xs uppercase pt-8">A Vision Rooted in Innovation</p>
                            <p>From humble beginnings, David Inyang’s journey began with a simple dream — to create a tech-driven brand that helps people turn their digital ideas into reality. His focus on practical solutions, youth empowerment, and ICT development has made DEEXON SOLUTION a fast-growing name in the tech and digital education space.</p>

                            <p className="text-ftext font-bold tracking-widest text-xs uppercase pt-8">Under his leadership, the company has evolved into a multi-service organization providing:</p>
                            <ul className="space-y-4 border-l-4 border-primary pl-8 py-2">
                                <li className="flex gap-4 items-start"><div className="h-1 w-2 bg-primary mt-3"></div> <span>Website Design & Development that helps businesses establish powerful online presences.</span></li>
                                <li className="flex gap-4 items-start"><div className="h-1 w-2 bg-primary mt-3"></div> <span>ICT Training Programs that equip individuals with essential digital skills for the modern world.</span></li>
                                <li className="flex gap-4 items-start"><div className="h-1 w-2 bg-primary mt-3"></div> <span>E-commerce Solutions that enable brands to reach global audiences.</span></li>
                                <li className="flex gap-4 items-start"><div className="h-1 w-2 bg-primary mt-3"></div> <span>Offline Learning Platforms that make digital education accessible to everyone.</span></li>
                            </ul>

                            <p className="text-ftext font-bold tracking-widest text-xs uppercase pt-8">Leadership Philosophy</p>
                            <p>David Inyang leads with purpose, integrity, and a deep sense of community. His leadership style combines strategic thinking with mentorship, ensuring that every team member, student, and partner experiences growth through their connection with DEEXON SOLUTION.</p>
                            <p>He believes that technology should not only simplify life but also create opportunities for innovation, entrepreneurship, and social progress. Through workshops, seminars, and ICT initiatives, David continues to impact lives and inspire many to build careers in technology.</p>

                            <p className="text-ftext font-bold tracking-widest text-xs uppercase pt-8">Commitment to the Future</p>
                            <p>Looking ahead, Mr. Inyang remains committed to expanding DEEXON SOLUTION’s footprint across Africa and globally. His long-term vision is to transform the company into a center of excellence for ICT innovation, digital education, and business development — helping thousands of young people unlock their potential in the digital economy.</p>

                            <p className="text-primary text-2xl italic font pt-8 border-t border-ftext/5">
                                “My goal is simple — to help individuals and businesses discover the power of technology and use it to change their world.”
                            </p>
                        </div>

                        <div className="lg:col-span-5 reveal top-32 order-1 lg:order-2">
                            <div className="relative p-1 bg-gradient-to-br from-ftext/20 to-transparent rounded-3xl">
                                <img
                                    src={ceo}
                                    alt="David Inyang"
                                    width={500}
                                    height={625}
                                    className="rounded-[calc(1.5rem-4px)] w-full object-cover"
                                />
                            </div>
                            <p className="mt-8 text-ftext font-bold text-xl tracking-tight text-right">David Inyang</p>
                            <p className="text-primary text-xs font-mono tracking-widest uppercase mt-1 text-right">Founder & CEO</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}