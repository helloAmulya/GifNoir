
const API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g"; // Public API key for GIPHY
const BASE_URL = "https://api.giphy.com/v1/gifs";

export interface GiphyGif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
      width: string;
      height: string;
    };
    original: {
      url: string;
      width: string;
      height: string;
    };
  };
  user?: {
    display_name: string;
    username: string;
    avatar_url: string;
  };
  url: string;
}

export async function getRandomGifs(limit: number = 8): Promise<GiphyGif[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/trending?api_key=${API_KEY}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch trending GIFs");
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching random GIFs:", error);
    return [];
  }
}

export async function searchGifs(
  query: string,
  limit: number = 8
): Promise<GiphyGif[]> {
  if (!query.trim()) {
    return [];
  }
  
  try {
    const response = await fetch(
      `${BASE_URL}/search?api_key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch search results");
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error searching GIFs:", error);
    return [];
  }
}
