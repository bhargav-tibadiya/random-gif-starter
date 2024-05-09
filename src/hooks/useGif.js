import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
  
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  
  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? tagUrl : randomUrl);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(gif,loading,fetchData)
};

export default useGif;
