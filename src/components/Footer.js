import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black px-4 text-center flex flex-col items-center py-12">
        <div className="">
          <div className="flex flex-row">
            <div className="px-2 text-4xl">
              <a href="https://www.linkedin.com/pulse/introducing-near-where-reality-meets-ar-innovation-near-ar-g5eyf/?trackingId=Tl0MiBC5sbeo9H9kBL1dfw%3D%3D"><FaLinkedin /></a>
            </div>
            <div className="px-2 text-4xl">
              <a href="https://x.com/neAR811127"><FaSquareXTwitter /></a>
            </div>
            <div className="px-2 text-4xl">
              <a href="https://www.instagram.com/nearsocialnetwork/?hl=en"><FaInstagramSquare /></a>
            </div>
          </div>
        </div>
        <div className="">
          Say Hello at nearsocialnetwork@gmail.com
        </div>
        <span>Near © 2024</span>
      </div>
    </div>
  );
};

export default Footer;
