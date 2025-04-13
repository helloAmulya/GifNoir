
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchGifs } from "@/services/giphyService";
import GifCard from "./GifCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { toast } from "sonner";

const popularTags = ["cats", "dogs", "reaction", "gaming", "anime", "food", "meme"];

const SearchGifs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const {
    data: gifs,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["searchGifs", activeSearch],
    queryFn: () => searchGifs(activeSearch, 8),
    enabled: activeSearch.length > 0,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    setActiveSearch(searchTerm);
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    setActiveSearch(tag);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setActiveSearch("");
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gradient">Find GIFs</h2>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for GIFs..."
              className="bg-secondary/30 border-giphy-purple/30 focus-visible:ring-giphy-purple pr-10 glass-card"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <Button 
            type="submit"
            className="bg-giphy-purple hover:bg-giphy-purple/80 button-glow"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </form>

      <div className="mb-8 flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <Button
            key={tag}
            variant="outline"
            size="sm"
            className={`border-giphy-purple/30 hover:bg-giphy-purple/20 ${
              activeSearch === tag ? "bg-giphy-purple/30 border-giphy-purple button-glow" : ""
            }`}
            onClick={() => handleTagClick(tag)}
          >
            #{tag}
          </Button>
        ))}
      </div>

      {activeSearch ? (
        <>
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-secondary/50 rounded-md aspect-square animate-pulse border border-white/5"
                />
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-12 glass-card rounded-xl">
              <p className="text-destructive">
                Failed to load GIFs for "{activeSearch}"
              </p>
              <Button 
                onClick={() => refetch()} 
                variant="outline" 
                className="mt-4 border-giphy-purple/50 hover:bg-giphy-purple/20 button-glow"
              >
                Try Again
              </Button>
            </div>
          ) : gifs?.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-xl">
              <p className="text-muted-foreground">
                No GIFs found for "{activeSearch}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {gifs?.map((gif) => (
                <GifCard key={gif.id} gif={gif} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 glass-card rounded-xl">
          <p className="text-muted-foreground max-w-md mx-auto">
            Search or select a tag above to find the perfect GIF for your dreams
          </p>
        </div>
      )}
    </section>
  );
};

export default SearchGifs;
