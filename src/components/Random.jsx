import React, { useEffect } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="random-container w-1/2 rounded-lg border border-black flex flex-col items-center mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        Random
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
