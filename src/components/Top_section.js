"use client";
import { RiAppleLine } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { useEffect } from "react";

function comingsoon(){
  document.getElementById('comingsoon').style.display = "flex"; 
}

const Top_section = () => {
  useEffect(() => {
    var play_store = document.getElementById("play_store");
    var app_store = document.getElementById("app_store");
    play_store.addEventListener('click',() => {
      comingsoon();
    })
    app_store.addEventListener('click',() => {
      comingsoon();
    })
  },[]);
  return (
    <div className=" w-full my-12 md:my-18  px-2 md:px-12 pb-18 main-gradient">
      <div className="flex flex-col justify-center items-center py-2 md:py-24 px-2 md:px-16 ">
        <p className="text-7xl py-4 md:py-8 font-semibold text-center">
          Step Into The New Reality
        </p>
        <p className="w-full md:w-2/4 text-gray-400 text-center font-extralight text-xl">
          <span> Connect, intereact, and share transcendent experiences.</span>
        </p>
        <div className="flex  flex-col md:flex-row my-4 md:my-8 ">
          <button id="app_store" className="m-2  rounded-md px-4 py-2 text-white gr-5 flex flex-row items-center">
            <div className=" text-3xl p-2" >
              {/* <IoLogoGooglePlaystore /> */}
              <img src="https://assets-global.website-files.com/61b794416e49a356247a1e1d/649dc3ae12fe42cc28786bcf_appstore.svg" loading="lazy" alt="App Store
" className="image-9"></img>
            </div>
          </button>
          <button id="play_store" className="m-2 rounded-md px-4 py-2 text-white gr-5 flex flex-row items-center">
            <div className=" text-3xl p-2">
              {/* <IoLogoAppleAppstore /> */}
              <img src="https://assets-global.website-files.com/61b794416e49a356247a1e1d/649dc3af25ff6c1fcfd33b50_google%20play.svg" loading="lazy" alt="Google Play"></img>
            </div>
          </button>
        </div>
        {/* <span className="border rounded-md px-8 py-2 text-white bg-grad">Coming Soon</span> */}
      </div>
    </div>
  );
};

export default Top_section;
