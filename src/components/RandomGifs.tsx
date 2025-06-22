
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRandomGifs, GiphyGif } from "@/services/giphyService";
import GifCard from "./GifCard";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios"

const API_KEY1 = import.meta.env.REACT_API_KEY

const RandomGifs = () => {
  const {
    data: gifs,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["randomGifs"],
    queryFn: () => getRandomGifs(15),
  });

  


  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gradient">Trending GIFs</h2>
        <Button
          onClick={() => refetch()}
          variant="outline"
          size="sm"
          className="border-giphy-purple/50 hover:bg-giphy-purple/20 button-glow"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

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
          <p className="text-destructive">Failed to load trending GIFs</p>
          <Button
            onClick={() => refetch()}
            variant="outline"
            className="mt-4 border-giphy-purple/50 hover:bg-giphy-purple/20 button-glow"
          >
            Try Again
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {gifs?.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RandomGifs;
