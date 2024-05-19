import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto m-0 bg-black">
      <div className="  flex items-center py-4 md:py-2 lg:py-12 md:justify-center bg-white">
          <Image src="/logo.png" width={100} height={100}></Image>
          <h1 className="text-4xl font-bold">NEAR</h1>
        </div>
      <div className=" w-full px-2 md:px-8 bg-gray-50 pb-24 main-bg text-white">
        
        <div className="flex flex-col md:flex-row py-2 md:py-24 px-2 md:px-16 ">
          <div className="w-full md:w-1/2">
            <p className="text-2xl font-bold py-4 md:py-8">
              STEP INTO THE NEW REALITY
            </p>
            <p>
              neAR is the visionary AR app blurring the lines between the
              digital and physical worlds. Connect, intereact, and share
              transcendent experiences tailored for Gen Z and millenials.
            </p>
            <p className="text-lg font-bold py-6 md:py-4">
              EXCITED TO BE A PART OF NEAR
            </p>
            <form className="flex ">
              <button type="button" className="mx-2">
                YES
              </button>
              <button type="button" className="mx-2">
                MAYBE
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center flex-col flex-row py-24 md:py-0 hidden md:block">
            <div className="w-full md:w-1/2 flex justify-end items-end">
              <Image
                className=""
                src="/modal.svg"
                width={500}
                height={100}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-200 flex flex-col md:flex-row justify-between items-center justify-center reative">
        <video autoPlay muted loop className="w-full h-1/2  z-0">
          <source src="/mov1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-full md:w-1/2 m-0 md:m-8 z-1 absolute text-white">
          <p className="text-3xl font-bold py-4">
            neAR: Augmented Social Connection
          </p>
          <p className="text-2xl">
            Unleash your social life with neAR, the augmented reality app that
            connects you to the world around you. With cutting-edge AR
            technology, neAR blurs the lines between the digital and physical
            realms, allowing you to discover, interact and share moments like
            never before.
          </p>
        </div>
      </div>
      <div className="bg-red-200 flex flex-col md:flex-row justify-between items-center p-4 md:p-12 justify-center">
        <div className="w-full md:w-1/2 m-0 md:m-6 flex justify-center">
          <Image className="" src="/exp1.png" width={200} height={500}></Image>
        </div>
        <div className=" w-full md:w-1/2 m-0 md:m-8">
          <p className="text-2xl font-bold py-4">IMMERSIVE AR CAMERA</p>
          <p>
            Transform your surroundings into an immersive social canvas. Point
            your camera to unveil vibrant posts, pulsating live streams, and
            interactive AR content vividly overlaying the real world.
          </p>
        </div>
      </div>
      <div className="bg-red-50 flex flex-col md:flex-row justify-between items-center p-4 md:p-12 justify-center ">
        <div className="w-full md:w-1/2 m-0 md:m-6 flex justify-center">
          <Image className="" src="/exp2.png" width={200} height={500}></Image>
        </div>
        <div className=" w-full md:w-1/2 m-0 md:m-8">
          <p className="text-2xl font-bold py-4">
            RADAR: DISCOVER THE UNDISCOVERED
          </p>
          <p>
            Leave ailmless searching behind. neAR's powerful Radar instantly
            locates like-minded individuals in your vicinity. Adjust scanning
            distance, activate incognito mode, or openly forge new
            connection-the world is your to explore.
          </p>
        </div>
      </div>
      <div className="bg-red-100 flex flex-col md:flex-row justify-between items-center p-4 md:p-12 justify-center">
        <div className="w-full md:w-1/2 m-0 md:m-6 flex justify-center">
          <Image className="" src="/exp3.png" width={200} height={500}></Image>
        </div>
        <div className=" w-full md:w-1/2 m-0 md:m-8">
          <p className="text-2xl font-bold py-4">
            MAP: A WORLD OF POSSIBILTIES
          </p>
          <p>
            Embark on an augmented journey through an interactive fusion of
            reality and virtual realms. Zoom to uncover a tapestry of shared
            moments. React to posts. Unlock your city's hidden AR experiences
            waiting to be discovered.
          </p>
        </div>
      </div>
      <div className="bg-red-50 flex flex-col md:flex-row justify-between items-center p-4 md:p-12 justify-center ">
        <div className="w-full md:w-1/2 m-0 md:m-6 flex justify-center">
          <Image className="" src="/exp4.png" width={200} height={500}></Image>
        </div>
        <div className=" w-full md:w-1/2 m-0 md:m-8">
          <p className="text-2xl font-bold py-4">
            CHAT: TRANSCENDING BOUNDARIES
          </p>
          <p>
            with neAR, connections transcend boundaries. Accept requests from
            those around you and let conversations flow through the sleek chat
            interface. Share thoughts, image, videos-attachment capabilities
            foster seamless experience sharing.
          </p>
        </div>
      </div>
      <div className="bg-red-100 flex flex-col items-center justify-center p-4 md:p-12 justify-center ">
        <p className="text-3xl font-bold ">
          ELEVATE YOUR SOCIAL STATUS-BE AN EARLY ADOPTER OF NEAR.
        </p>
        <form className="my-12 md:my-8">
          <input
            type="text"
            name="email"
            className="bg-blue-50 p-4 rounded-3xl"
            placeholder="E-mail"
          ></input>
          <button type="sumbit" className="rounded-full bg-blue-50 p-4">
            ✉️
          </button>
        </form>
      </div>
      <div>
        <div className="bg-red-200 flex flex-col items-center justify-center p-4 md:p-12 justify-center ">
          <p className="text-3xl font-bold break-all">
            Say Hello at nearsocialnetwork@gmail.com
          </p>
          <div className="flex border border-black items-center justify-center  py-4 mt-2 md:mt-8">
            <p className="text-xl px-8">SOCIAL</p>
            <div className="flex flex-row">
              <div className="px-2">F</div>
              <div className="px-2">X</div>
              <div className="px-2">I</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
