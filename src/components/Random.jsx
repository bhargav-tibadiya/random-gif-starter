import React, { useEffect } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";
import { Toaster } from "react-hot-toast";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="random-container min-w-[375px] w-1/2 rounded-lg border border-black flex flex-col items-center mt-[15px]">
      <Toaster />
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        RANDOM GIF
      </h1>
      <div className="sect">
        {loading ? <Spinner /> : <img src={gif} alt="gif" />}
      </div>
      <button
        onClick={() => {
          fetchData();
        }}
        className="w-10/12 mb-[20px] bg-yellow-400 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
