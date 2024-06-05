import img from "next/image";

const Homepg_content = () => {
  return (
    <div >
      <div className="flex flex-col md:flex-row justify-between items-center justify-center m-8" >
        <div className="w-full md:w-1/2 mx-0 md:mx-6 flex justify-center">
          <img className="" src="/exp1.png" width={300} height={700} alt="exp1"></img>
        <img className="mx-4" src="/iphone_side.png" width={50} height={20} alt="iphone_side.png"></img>
        </div>
        <div className="w-full md:w-1/2 m-16 md:m-8 md:p-1 flex flex-col justify-start">
          <p className="w-full md:w-3/4 text-4xl font-semibold py-1 md:py-4 gr-3 text-center">Immersive AR CAMERA</p>
          <p className="w-full md:w-3/4 text-xl font-light py-1 md:py-4 text-gray-100 text-center ">
          Create mind-bending AR photos/videos with wild effects. Post as digital street art.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center justify-center mm-8">
      <div className=" w-full md:w-1/2 m-16 md:m-8 flex flex-col items-end">
          <p className="w-full md:w-3/4 text-4xl font-semibold py-1 md:py-4 gr-3 text-center">RADAR : Discover the Undiscovered</p>
          <p className="w-full md:w-3/4 text-xl font-light py-4 text-gray-400 text-center">
          See nearby neAR users. Chat, meet up, or go incognito.
          </p>
        </div>
        <div className="w-full md:w-1/2 mx-0 md:mx-6 flex justify-center">
          <img className="" src="/exp2.png" width={300} height={700} alt="exp2"></img>
          <img className="mx-4" src="/iphone_side.png" width={50} height={20} alt="iphone_side.png"></img>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center justify-center m-8">
        <div className="w-full md:w-1/2 mx-0 md:mx-6 flex justify-center">
          <img className="" src="/exp3.png" width={300} height={700} alt="exp3"></img>
          <img className="mx-4" src="/iphone_side.png" width={50} height={20} alt="iphone_side.png"></img>
        </div>
        <div className=" w-full md:w-1/2 m-16 md:m-8 flex flex-col justify-start">
          <p className="w-full md:w-3/4  text-4xl font-semibold py-4 gr-3 text-center">MAP : A World of Possibilities</p>
          <p className="w-full md:w-3/4  text-xl font-light py-4 text-gray-400 text-center w-3/4 md:w-2/4">
          Explore geolocated AR multimedia posts blended with the physical world around you.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row  justify-between items-center justify-center m-8">
        <div className="w-full md:w-1/2 m-16 md:m-8 flex flex-col items-end">
          <p className="w-full md:w-3/4 text-4xl font-semibold py-4 gr-3 text-center">CHAT: TRANSCENDING BOUNDARIES</p>
          <p className="w-full md:w-3/4 text-xl font-light py-4 text-gray-400 text-center">
          Multimedia chat portals with nearby users.
          </p>
        </div>
        <div className="w-full md:w-1/2 mx-0 md:mx-6 flex justify-center">
          <img className="mx-4" src="/exp4.png" width={300} height={700} alt="exp4"></img>
          <img className="" src="/iphone_side.png" width={50} height={20} alt="iphone_side.png"></img>
        </div>
      </div>
      {/* <div className=" flex flex-col items-center justify-center p-4 md:p-12 ">
        <p className="text-3xl font-bold ">
          ELEVATE YOUR SOCIAL STATUS-BE AN EARLY ADOPTER OF NEAR.
        </p>
        <form className="my-12 md:my-8">
          <input
            type="text"
            name="email"
            className=" px-4 py-4 rounded-3xl"
            placeholder="E-mail"
          ></input>
          <button type="sumbit" className=" px-2 py-6 items-center rounded-3xl text-4xl">
            ✉️
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default Homepg_content;
