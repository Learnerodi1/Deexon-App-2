import { useState } from "react";
import consult from "./bgConsult2.jpeg"

export const ConsultationPage = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });

            // setLoading(false);
            data;
    }

    return (
        <main
            style={{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${consult})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className="min-h-screen bg-[#08080A] pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-3xl">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-tightest mb-6">
                        Request Consultation
                    </h1>
                    <p className="text-white/70 text-lg font-light">
                        A consultant will review your request and get back to you.
                    </p>
                </div>

                {/* FORM */}
                {!success && (
                    <div className="bg-secondary border border-ftext/10 rounded-2xl p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="text-ftext text-sm block mb-2">Full Name</label>
                                <input name="fullName" required
                                    className="w-full bg-ftext/10 border border-ftext/20 rounded-lg px-4 py-3 text-ftext focus:outline-none focus:border-primary" />
                            </div>

                            <div>
                                <label className="text-ftext text-sm block mb-2">Email Address</label>
                                <input name="email" type="email" required
                                    className="w-full bg-ftext/10 border border-ftext/20 rounded-lg px-4 py-3 text-ftext focus:outline-none focus:border-primary" />
                            </div>

                            <div>
                                <label className="text-ftext text-sm block mb-2">Phone Number</label>
                                <input name="phone" type="tel" required
                                    className="w-full bg-ftext/10 border border-ftext/20 rounded-lg px-4 py-3 text-ftext focus:outline-none focus:border-primary" />
                            </div>

                            <div>
                                <label className="text-ftext text-sm block mb-2">Business Name</label>
                                <input name="businessName" required
                                    className="w-full bg-ftext/10 border border-ftext/20 rounded-lg px-4 py-3 text-ftext focus:outline-none focus:border-primary" />
                            </div>

                            <div>
                                <label className="text-ftext text-sm block mb-2">Location</label>
                                <input name="location" required
                                    className="w-full bg-ftext/10 border border-ftext/20 rounded-lg px-4 py-3 text-ftext focus:outline-none focus:border-primary" />
                            </div>

                            <div>
                                <label className="text-ftext text-sm block mb-2">Service Needed</label>
                                <select name="service" required
                                    className="w-full bg-ftext/10 border border-ftext/20 rounded-lg px-4 py-3 text-ftext focus:outline-none focus:border-primary">
                                    <option>Website Development</option>
                                    <option>Website Upgrade</option>
                                    <option>ICT Training</option>
                                    <option>Office Networking</option>
                                    <option>Tech Consultation</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-ftext text-sm block mb-2">Project Description</label>
                                <textarea name="description" rows={4} required
                                    className="w-full bg-ftext/10 border border-ftext/20 rounded-lg px-4 py-3 text-ftext focus:outline-none focus:border-primary" />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-6 bg-primary text-secondary py-4 font-bold uppercase tracking-widest hover:bg-ftext transition-all disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Submit Request"}
                            </button>

                        </form>
                    </div>
                )}

                {/* SUCCESS MESSAGE */}
                {success && (
                    <div className="text-center bg-secondary border border-ftext/10 rounded-2xl p-6">

                        <h2 className="text-3xl font-bold text-ftext mb-6">
                            Thank You.
                        </h2>

                        <p className="text-ftext/70 text-lg mb-8">
                            A consultant will review your request within 24 hours.
                        </p>

                        <div className="border-t border-ftext/10 pt-8">
                            <p className="text-ftext mb-6">
                                Need urgent response?
                            </p>

                            <a
                                href="https://wa.me/2349046519562"
                                target="_blank"
                                className="inline-block bg-green-500 hover:bg-green-600 text-ftext px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
                            >
                                Chat With Us on WhatsApp
                            </a>
                        </div>

                    </div>
                )}
            </div>
        </main>
    );
}