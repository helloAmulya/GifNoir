import React from "react";
import { FileImage, Search, Sparkles, Download, Eye } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground">
            <section className="pt-32 pb-20 px-4 container mx-auto max-w-4xl text-center">
                <div className="mb-8">
                    <div className="inline-block mb-3 px-4 py-1.5 rounded-full glass-card border border-giphy-purple/30 text-sm font-medium">
                        About This Project
                    </div>
                    <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                        Behind the Scenes of GIFNOIR
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        GIFNOIR is a sleek, dark-themed web app built to explore, search, and download trending or custom GIFs with style.
                        It's powered by the amazing <a href="https://developers.giphy.com/" target="_blank" rel="noopener noreferrer" className="text-giphy-purple hover:underline">GIPHY API</a> and packed with interactive features.
                    </p>
                </div>

                {/* Technologies Used */}
                <div className="my-16">
                    <h2 className="text-3xl font-bold mb-6">🚀 Tech Stack</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left text-sm text-white/80">
                        <li>⚛️ React.js</li>
                        <li>🧩 React Router</li>
                        <li>🌀 Tailwind CSS</li>
                        <li>🎨 ShadCN UI + Radix UI</li>
                        <li>📦 Lucide Icons</li>
                        <li>🌐 GIPHY Developer API</li>
                    </ul>
                </div>

                {/* Features */}
                <div className="my-16">
                    <h2 className="text-3xl font-bold mb-6">🎯 Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="glass-card p-6 rounded-xl border border-white/10">
                            <Sparkles className="w-6 h-6 text-giphy-purple mb-2" />
                            <h3 className="text-xl font-semibold mb-1">Trending GIFs</h3>
                            <p className="text-muted-foreground">View real-time trending GIFs fetched from GIPHY’s trending endpoint.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl border border-white/10">
                            <Search className="w-6 h-6 text-giphy-blue mb-2" />
                            <h3 className="text-xl font-semibold mb-1">Powerful Search</h3>
                            <p className="text-muted-foreground">Search for any topic using the GIPHY search endpoint and dynamic filtering.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl border border-white/10">
                            <Eye className="w-6 h-6 text-giphy-green mb-2" />
                            <h3 className="text-xl font-semibold mb-1">GIF Preview</h3>
                            <p className="text-muted-foreground">Instant GIF preview with smooth UI, optimized for dark theme lovers.</p>
                        </div>
                        <div className="glass-card p-6 rounded-xl border border-white/10">
                            <Download className="w-6 h-6 text-giphy-purple mb-2" />
                            <h3 className="text-xl font-semibold mb-1">One-Click Download</h3>
                            <p className="text-muted-foreground">Download your favorite GIFs directly to your device with a single click.</p>
                        </div>
                    </div>
                </div>

                {/* Fun Projects Note */}
                <div className="my-16">
                    <h2 className="text-3xl font-bold mb-6">🎉 Why I Built This</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        GIFNOIR is more than a utility — it’s a fun side project blending APIs, frontend animations, and creative design.
                        I built it to explore API integrations, polish my frontend skills, and push UI creativity using Tailwind + custom gradients + motion.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
