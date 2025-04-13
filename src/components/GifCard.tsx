
import React from "react";
import { GiphyGif } from "@/services/giphyService";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import { toast } from "sonner";

interface GifCardProps {
  gif: GiphyGif;
}

const GifCard = ({ gif }: GifCardProps) => {
  const handleDownload = async () => {
    try {
      // Get the original GIF URL for download
      const imageUrl = gif.images.original.url;
      
      // Fetch the image as a blob
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const blob = await response.blob();
      
      // Create a URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a link element and trigger download
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      
      // Sanitize filename from gif title or use a default name
      const fileName = gif.title ? 
        `${gif.title.replace(/[^\w\s-]/g, '')}.gif` : 
        `gifsomnia-${gif.id}.gif`;
      
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      
      // Clean up
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(blobUrl);
      
      toast.success("GIF downloaded successfully");
    } catch (error) {
      console.error("Error downloading GIF:", error);
      toast.error("Failed to download GIF");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="overflow-hidden glass-card group transition-all duration-300 hover:gif-shadow border-white/10 hover:border-giphy-purple/50">
        <CardContent className="p-1">
          <div className="relative w-full aspect-square overflow-hidden rounded">
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-white font-medium line-clamp-1">{gif.title}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={handleDownload}
                    className="bg-giphy-purple/80 p-1 rounded-full text-white opacity-80 hover:opacity-100 hover:bg-giphy-purple transition-colors"
                    aria-label="Download GIF"
                  >
                    <Download className="w-3 h-3" />
                  </button>
                  <a 
                    href={gif.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-giphy-purple/80 p-1 rounded-full text-white opacity-80 hover:opacity-100 hover:bg-giphy-purple transition-colors"
                    aria-label="Open GIF in new tab"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-xs px-2 py-0.5 rounded-full text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GIF
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GifCard;
