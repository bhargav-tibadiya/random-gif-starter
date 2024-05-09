import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");
  
  async function fetchData() {
    setLoading(true);
    // const { data } = await axios.get(url);
    // const imageSrc = data.data.images.downsized_large.url;
    // setGif(imageSrc);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const clickHandler = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tagx random-container  w-1/2 rounded-lg border border-black flex flex-col items-center mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        Random
      </h1>
      <div className="sect">
        {loading ? <Spinner /> : <img src={gif} alt="gif" />}
      </div>
      <input
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
        }}
        className="w-10/12 mb-[20px] border border-[2px] border-[#ff353550] text-lg py-2 rounded-lg"
      />
      <button
        onClick={clickHandler}
        className="w-10/12 mb-[20px] bg-yellow-400 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
