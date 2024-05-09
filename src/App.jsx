import { useEffect } from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  useEffect(()=>{
    toast("Result will not be 100% accurate")
  },[])
    return (
        <div className="w-full h-screen flex flex-col background relative items-center ">
           <Toaster />
            <h1 className="bg-white rounded-lg min-w-[400px] w-1/2 ablsolute mt-[40px] border-box ml-[25px] mr-[25px] px-10 py-2 text-center font-bold text-3xl">Random Gifs</h1>
                <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
                    <Random/>
                    <Tag/>
                </div>
        </div>
    );
};

export default App;
