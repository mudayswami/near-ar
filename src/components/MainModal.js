"use client";

import { useEffect, useState } from "react";
import pool from "@/utils/mysql";
import {ref, set, get, update, remove, child} from "firebase/database";


const MainModal = ({ e = false }) => {
  
  const [interest, setinterest] = useState("");

  async function fetchIpAddress() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('Error fetching IP address:', error);
        document.getElementById('ip-address').innerText = 'Failed to fetch IP address';
        return "----";
    }
}
  //const ipadd = fetchIpAddress();

   const handlechange = async (event) => {
      var answer = event.target.value;
      const modal = document.getElementById("mainmodal");
      setInterval(()=>{
      modal.classList.add("hidden")
      },500);
      const ipadd = await fetchIpAddress();
      const url = 'https://api.near-ar.com/api/user-response'; 
      const data = {
          ip: ipadd.ip,
          answer: answer
      };

      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });

          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }

          const responseData = await response.json();
          console.log('Success:', responseData);
      } catch (error) {
          console.error('Error:', error);
      }

  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      const windowHeight = window.innerHeight; 
      const fullHeight = document.body.scrollHeight; 
      const scrollPercentage =
        (scrollPosition / (fullHeight - windowHeight)) * 100;
      if (scrollPercentage >= 90) {
        modal.classList.remove("hidden");
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const modal = document.getElementById("mainmodal");
    if (e) {
      // modal.classList.add("hidden");
      console.log(modal);
    } else {
      // modal.classList.remove("hidden");
    }

    document.getElementById("closemodal").click(function () {
      console.log("button clicked");
    });
  }, []);

  return (
    <>
      <dialog
        id="mainmodal"
        className="fontz hidden fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50  backdrop-blur flex justify-center items-center"
      >
        <div className="p-auto rounded-3xl bg-white w-auto h-auto ">
          <div className="p-8 flex flex-col items-center m-0 p-0">
            <div className="header flex justify-between">
              <h3 className="gr-4 p-4 text-xl md:text-2xl text-center">
                Excited to be a part of Near
              </h3>
              <button
                type="button"
                id="closemodal"
                className=" hidden text-gray-500 top-0"
              >
                X
              </button>
            </div>
            {/* <hr className="h-0 w-full bg-gray-400 "></hr> */}
            <div className="mainbody flex justify-between items-center text-2xl py-4 ">
              {/* <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label> */}
              <button type="button" className="p-6 text-lg md:text-2xl gr-1">
                Maybe
              </button>
              <input
                id="default-range"
                type="range"
                min="0"
                max="2"
                onChange={handlechange}
                name="interested"
                className=" text-9xl bg-purle-800 rounded-lg appearance-none cursor-pointer range-lg dark:bg-purple-700"
              ></input>
              <button type="button" className="p-6 text-lg md:text-2xl gr-1">
                Yes
              </button>
            </div>
            <div className="footer self-start">
              {/* <img className="" width={80} height={80} src="/arimg.png"></img> */}
            </div>
            <br />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MainModal;
