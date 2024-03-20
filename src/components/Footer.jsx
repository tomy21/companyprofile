import React from "react";
import { MdOutlineMail, MdOutlineMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMailOpenOutline } from "react-icons/io5";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="h-auto relative -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${"/images/footer.jpg"})` }}
      ></div>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start mt-32 px-20 w-full sm:w-[90%] gap-y-5">
          <div className="flex flex-col item-center sm:item-end gap-y-5 z-10 w-full sm:w-[40%]">
            <div className="flex flex-col items-center sm:flex-row sm:items-end gap-x-4">
              <img className="w-20" src={"/images/logo.png"} alt="" />
              <h1 className="mt-5 text-yellow-400 text-2xl text-center sm:text-left sm:text-3xl">
                PT. SKY PARKING UTAMA
              </h1>
            </div>
            <h1 className="text-white text-sm text-justify sm:text-base sm:text-justify">
              {t("footer.title01")}
            </h1>
          </div>

          <div className="flex flex-col item-end gap-y-5 z-10 w-full sm:w-[50%] w-full mt-10">
            <div className="flex flex-row items-end gap-x-5">
              <h1 className="text-white text-3xl">{t("footer.title02")}</h1>
            </div>
            <div className="flex flex-row text-white gap-4 items-center">
              <div className="w-full">
                <MdOutlineMail size={25} className="text-white" />{" "}
              </div>
              <p className="sm:text-lg text-[14px]">
                business.development@skyparking.co.id
              </p>
            </div>
            <div className="flex flex-row text-white gap-5 items-center hover:text-yellow-400">
              <MdOutlineMapsHomeWork size={60} />{" "}
              {/* Use the MdOutlineMapsHomeWork icon component */}
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
