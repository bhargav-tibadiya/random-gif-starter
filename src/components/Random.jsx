import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="random-container w-1/2 rounded-lg border border-black flex flex-col items-center mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold" >
        Random
      </h1>
      <div className="sect">
        {loading ? <Spinner /> : <img src={gif} alt="gif" />}
      </div>
      <button
        onClick={clickHandler}
        className="w-10/12 mb-[20px] bg-yellow-400 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
