import React from "react";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full"> 
        <FaGoogle></FaGoogle>
        Button</button>
        <button className="btn btn-outline w-full"> 
        <FaGithub></FaGithub>
        Button</button>
      </div>


      <div className="p-4  mb-6">
        <h2 className="text-3xl">Find Us On</h2>
        <a className="p-4 gap-4 flex items-center  text-lg border rounded-t-lg" href="#">
            <FaFacebook></FaFacebook>
            Facebook
        </a>
        <a className="p-4 gap-4 flex items-center  text-lg border-x rounded-l-none rounded-r-none" href="#">
            <FaTwitter></FaTwitter>
            Twitter
        </a>
        <a className="p-4 gap-4 flex items-center  text-lg border rounded-b-lg" href="#">
            <FaInstagram></FaInstagram>
            Instagram
        </a>
        
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl">Q-Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightSideNav;
