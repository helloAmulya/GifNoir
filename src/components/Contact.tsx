import React from "react";
import { Mail, Instagram, Github, User } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground">
      <section className="pt-32 pb-20 px-4 container mx-auto max-w-2xl text-center">
        
        {/* Badge */}
        <div className="inline-block mb-3 px-4 py-1.5 rounded-full glass-card border border-giphy-purple/30 text-sm font-medium">
          Let's Connect
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">
          My Credentials
        </h1>

        {/* Subtext */}
        <p className="text-lg text-muted-foreground mb-12">
          Got feedback, ideas, or just want to say hi? Feel free to reach out!
        </p>

        {/* Contact Info Cards */}
        <div className="grid gap-6 text-left text-white/90">

          {/* Name */}
          <div className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/10 hover:border-giphy-purple/30 transition-all duration-200 shadow hover:shadow-giphy-purple/20">
            <div className="p-2 rounded-full bg-giphy-purple/10">
              <User className="w-5 h-5 text-giphy-purple" />
            </div>
            <span className="font-medium">Amulya Ratna Sharma</span>
          </div>

          {/* Email */}
          <a href="mailto:ratna.amulya98@gmail.com" className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/10 hover:border-giphy-purple/30 transition-all duration-200 shadow hover:shadow-giphy-purple/20 hover:underline">
            <div className="p-2 rounded-full bg-giphy-purple/10">
              <Mail className="w-5 h-5 text-giphy-purple" />
            </div>
            ratna.amulya98@gmail.com
          </a>

          {/* GitHub */}
          <a href="https://github.com/helloAmulya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/10 hover:border-giphy-purple/30 transition-all duration-200 shadow hover:shadow-giphy-purple/20 hover:underline">
            <div className="p-2 rounded-full bg-giphy-purple/10">
              <Github className="w-5 h-5 text-giphy-purple" />
            </div>
            github.com/helloAmulya
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/amulyaratna.1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/10 hover:border-giphy-purple/30 transition-all duration-200 shadow hover:shadow-giphy-purple/20 hover:underline">
            <div className="p-2 rounded-full bg-giphy-purple/10">
              <Instagram className="w-5 h-5 text-giphy-purple" />
            </div>
            instagram.com/amulyaratna.1
          </a>

        </div>
      </section>
    </div>
  );
};

export default Contact;
