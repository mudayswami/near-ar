"use client";
import { useEffect} from "react";
import { CiMail } from "react-icons/ci";

const Comingsoon = ({ e = false }) => {
  useEffect(() => {
  const submit =  document.getElementById("submit_button");


  submit.addEventListener('click',async ()=>{
    let email = document.getElementById("email").value;
    if(email === ""){
        document.getElementById("email_valid").style.display = "block";
        return false;
      }
      document.getElementById('comingsoon').style.display = "none";

      const url = "https://api.near-ar.com/api/subscribe";
      const data = {
        email : email
      };
      try{
        const response = await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(data)
        });
        if(!response.ok){
          throw new Error('Network response was not ok '+response.statusText);
        }

        const reponseData = await response.json();
        console.log(reponseData);
      } catch{
        
      }
    });
  }, []);

  return (
    <>
      <dialog id="comingsoon" className="hidden fontz p-4 fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50  backdrop-blur flex justify-center items-center">
        <div className=" rounded-3xl bg-gray-100 w-auto h-auto ">
          <div className="p-6 flex flex-col items-center m-0 " id="coming_soon">
            <div className="header flex justify-between">
              <h3 className=" p-4 text-lg md:text-2xl text-center main-gradient">Elevate your social status - be an early adopter of neAR.</h3>
              <button type="button" id="closemodal" className=" hidden text-gray-500 top-0" >X</button>
            </div>
              <span className="text-sm text-red-600 hidden" id="email_valid">Please enter your email</span>
            <div className="mainbody text-lg my-3 flex flex-row border-2 rounded-3xl">
              <input type="text" name="email" placeholder="E-mail" id="email" className="p-4 bg-gray-100 rounded-3xl focus:outline-none"></input>
              <button type="button" id="submit_button" className="p-2 m-1 gr-1 rounded-full border text-black text-3xl"><CiMail className="text-black" /></button>
            </div>
            <div className="footer self-start">
            </div>
            <br />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Comingsoon;
