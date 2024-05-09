import React, { useEffect, useState } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="tagx random-container  w-1/2 rounded-lg border border-black flex flex-col items-center mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        Random 
      </h1>
      <div className="sect">
        {loading ? <Spinner /> : <img src={gif} alt="gif" />}
      </div>
      <input
        className="input-field"
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
        }}
        className="w-10/12 mb-[20px] border border-[2px] border-[#ff353550] text-lg py-2 rounded-lg"
      />
      <button
        onClick={()=>fetchData(tag)}
        className="w-10/12 mb-[20px] bg-yellow-400 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
