
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RandomGifs from "@/components/RandomGifs";
import SearchGifs from "@/components/SearchGifs";
import { Button } from "@/components/ui/button";
import { FileImage, Sparkles, Search, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground">
      {/* Navigation Bar */}
      <header className="w-full border-b border-white/10 backdrop-blur-md bg-black/40 fixed top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <FileImage className="w-8 h-8 text-giphy-purple" />
            <h1 className="text-2xl font-bold bg-gradient-to-b from-white  to-purple-400 bg-clip-text text-transparent">GIFNOIR</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            {/* <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link> */}
            {/* <Link to="/" className="text-white/80 hover:text-white transition-colors">Trending</Link> */}
            {/* <Link to="/" className="text-white/80 hover:text-white transition-colors">Categories</Link> */}
            <Link to="/about" onClick={() => navigate('/about')} className="text-white/80 hover:text-white transition-colors">About</Link>
          </nav>

          <Button className="bg-giphy-purple hover:bg-giphy-purple/80  text-white rounded-full "
            onClick={() => navigate('/contact')}>
            Contact Me
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 container mx-auto">
        <div className="text-center max-w-4xl mx-auto relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-giphy-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-giphy-blue/20 rounded-full blur-3xl"></div>

          <div className="inline-block mb-3 px-4 py-1.5 rounded-full glass-card border border-giphy-purple/30 text-sm font-medium">
            ✨ Your Ultimate GIF Explorer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Perfect <span className="animate-pulse bg-gradient-to-r from-purple-400  via-blue-200 to-teal-300 bg-clip-text text-transparent ">GIFs</span> for Any Moment
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your sleek dark-themed GIF explorer with a touch of neon dreams. Find trending GIFs or search for exactly what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button className="bg-giphy-purple hover:bg-giphy-purple/80 button-glow text-lg py-6 px-8 rounded-full text-white animate-bounce" size="lg">
              <TrendingUp className="mr-2 h-5 w-5" />
              Explore Trending
            </Button>
            {/* <div className="flex justify-center">
            <div className="h-16 w-1 bg-gradient-to-b from-giphy-purple/80 to-transparent"></div>
          </div> */}
            {/* <Button className="bg-transparent border border-white/20 hover:bg-white/5 text-lg py-6 px-8" size="lg" variant="outline">
              <Search className="mr-2 h-5 w-5" />
              Search GIFs
            </Button> */}
          </div>

        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto glass-card p-1 rounded-xl overflow-hidden mb-12">
          <Tabs defaultValue="trending" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass-nav">
              <TabsTrigger
                value="trending"
                className="data-[state=active]:bg-giphy-purple/90 data-[state=active]:text-white py-3"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Trending GIFs
              </TabsTrigger>
              <TabsTrigger
                value="search"
                className="data-[state=active]:bg-giphy-purple/80 data-[state=active]:text-white py-3"
              >
                <Search className="w-4 h-4 mr-2" />
                Search GIFs
              </TabsTrigger>
            </TabsList>
            <div className="p-6">
              <TabsContent value="trending">
                <RandomGifs />
              </TabsContent>
              <TabsContent value="search">
                <SearchGifs />
              </TabsContent>
            </div>
          </Tabs>
        </div>

      </main>

      <footer className="border-t border-white/10 py-8 backdrop-blur-md bg-black/40">
        <div className="container mx-auto max-w-xl px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-giphy-purple/10">
              <FileImage className="w-8 h-8 text-giphy-purple" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold tracking-wide bg-gradient-to-b from-white  to-purple-500 bg-clip-text text-transparent mb-2 animate-pulse">
            GIFNOIR
          </h2>
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-red-500">❤️</span> by Amulya | © 2025 GIFNOIR

          </p>
        </div>
      </footer>


    </div>
  );
};

export default Index;
