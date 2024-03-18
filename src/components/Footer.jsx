import React from "react";
import { MdOutlineMail, MdOutlineMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-auto relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${"/images/footer.jpg"})` }}
      ></div>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start mt-32 px-20 w-full sm:w-[90%] gap-y-5">
          <div className="flex flex-col item-center sm:item-end gap-y-5 z-10 w-full sm:w-[40%]">
            <div className="flex flex-col items-center sm:flex-row sm:items-end gap-x-4">
              <img className="w-20" src={"/images/logo.png"} alt="" />
              <h1 className="text-white text-3xl text-center sm:text-left">
                PT. SKY PARKING UTAMA
              </h1>
            </div>
            <h1 className="text-white text-sm sm:text-base sm:text-justify">
              Sky Parking adalah salah satu operator tempat parkir terbaik di
              Indonesia. Perusahaan ini telah berkembang dari awal yang
              sederhana menjadi salah satu perusahaan terkemuka di bidangnya.
              Perusahaan ini didirikan berdasarkan semangat profesionalisme dan
              keunggulan produk, menciptakan kualitas yang tak tertandingi dalam
              berbagai aspek bisnisnya.
            </h1>
          </div>

          <div className="flex flex-col item-end gap-y-5 z-10 w-full sm:w-[40%]">
            <div className="flex flex-row items-end gap-x-5">
              <h1 className="text-white text-3xl">Hubungi Kami</h1>
            </div>
            <div className="flex flex-row text-white gap-5 items-center">
              <MdOutlineMail size={30} />
              <h1 className="text-base font-light">
                business.development@skyparking.co.id
              </h1>
            </div>
            <div className="flex flex-row text-white gap-5 items-center hover:text-yellow-400">
              <MdOutlineMapsHomeWork size={60} />
              <Link
                to="https://maps.app.goo.gl/VXa8NBVck4qtMRqb9"
                className="text-base font-light"
              >
                Ruko pinangsia karawaci Office park blok H no 20, Lippo Village,
                Karawaci, Tangerang, Banten
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 mx-20 flex flex-col justify-between items-center mb-5">
          <hr className="w-full border-[1px] border-white z-10" />
          <div className="flex flex-col sm:flex-row justify-end items-center gap-5 text-white mt-5 ml-auto">
            <span className="z-10">
              &copy; <span id="current-year"></span> PT. SKY PARKING UTAMA. All
              Rights Reserved.
            </span>
            <div className="flex flex-row gap-x-3">
              <img
                className="z-10 w-[36px] h-[36px]"
                src={"/icons/linkedin.png"}
                alt=""
              />
              <img
                className="z-10 w-[36px] h-[36px]"
                src={"/icons/instagram.png"}
                alt=""
              />
              <img
                className="z-10 w-[36px] h-[36px]"
                src={"/icons/facebook.png"}
                alt=""
              />
              <img
                className="z-10 w-[36px] h-[36px]"
                src={"/icons/whatsapp.png"}
                alt=""
              />
              <img
                className="z-10 w-[36px] h-[36px]"
                src={"/icons/twitter.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 left-0 rotate-180"
        src={"/images/gelombang.png"}
        alt=""
      />
    </footer>
  );
}

export default Footer;
