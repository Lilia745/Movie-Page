import React from "react";
import Button from "../Button";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="flex justify-around gap-[133px] p-[20px]">
        <div>
          <h4 className="text-[18px] text-[rgba(255,255,255,0.8)] mb-[20px]">
            Company
          </h4>
          <p className="text-[16px]  text-[rgba(255,255,255,0.5)]">About Us</p>
          <p className="text-[16px]  text-[rgba(255,255,255,0.5)]">Careers</p>
        </div>
        <div>
          <h4 className="text-[18px] text-[rgba(255,255,255,0.8)] mb-[20px]">
            Need Help
          </h4>
          <p className="text-[16px]  text-[rgba(255,255,255,0.5)]">
            Visit Help Center?
          </p>
          <p className="text-[16px]  text-[rgba(255,255,255,0.5)]">
            Share Feedback
          </p>
        </div>
        <div>
          <h4 className="text-[18px] text-[rgba(255,255,255,0.8)] mb-[20px]">
            View Website in
          </h4>
          <select className="py-[10px] text-[20px] text-[rgba(255,255,255,0.9)] px-[27px] bg-[rgba(255,255,255,0.2)] rounded-2xl">
            <option className="text-[black]">English</option>
            <option className="text-[black]">ARM</option>
            <option className="text-[black]">RUS</option>
          </select>
        </div>
        <div>
          <h4 className="text-[18px] text-[rgba(255,255,255,0.8)] mb-[20px]">
            Social Media
          </h4>
          <div className="flex justify-center items-center gap-[15px]">
            <BsInstagram  className="text-[25px] bg-[rgba(255,255,255,0.2)] text-[white]" />
            <BsTwitter  className="text-[25px] bg-[rgba(255,255,255,0.2)] text-[white]" />
          </div>
        </div>
        <div>
          <h4 className="text-[18px] text-[rgba(255,255,255,0.8)] mb-[20px]">
            Download Our App
          </h4>
          <div className="flex justify-center items-center text-[white] ionIcon bg-[black] rounded-2xl gap-[5px] mb-[17px] p-[5px]">
            <ion-icon name="logo-apple"></ion-icon>
            <div>
              <p className="text-[12px] text-[rgba(255,255,255,0.9)]">
                Download on the
              </p>
              <h5>App Store</h5>
            </div>
          </div>
          <div className="flex justify-center items-center text-[white] ionIcon bg-[black] rounded-2xl gap-[5px] p-[5px]">
            <ion-icon name="logo-google-playstore"></ion-icon>
            <div>
              <p className="text-[12px] text-[rgba(255,255,255,0.9)]">
                GET IT ON
              </p>
              <h5>Google Play</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="border flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-[40px]">
          <h4 className="text-[16px] text-gray">
            © 2023 STREAM X. All Rights Reserved.
          </h4>
          <p className="text-[16px] text-gray">Terms Of Use </p>
          <p className="text-[16px] text-gray">Privacy Policy</p>
          <p className="text-[16px] text-gray">FAQ</p>
        </div>
        <div className="mr-[30px]">
          <Link to="/" className="text">STREAM</Link>
          <span className="text-[30px] text-[#c22a2a] font-extrabold">X</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
