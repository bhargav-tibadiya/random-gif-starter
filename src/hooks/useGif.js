import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);


  async function fetchData(tag) {
    try{

      setLoading(true);
      // const { data } = await axios.get(tag ? tagUrl : randomUrl);
      // const imageSrc = data.data.images.downsized_large.url;
      // setGif(imageSrc);
      
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.error("Request limit exceeded. Please try again later.");
      } else {
        toast.error("An error occurred while fetching data.");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    }
  }

  useEffect(() => {
    fetchData('car');
  }, []);

  return { gif, loading, fetchData };
}

export default useGif
