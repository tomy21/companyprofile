import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function TentangKami() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className={`relative h-[50vh] sm:h-[65vh] p-2`}>
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 -z-10"
          style={{ backgroundImage: 'url("/images/logo_system.png")' }}
        ></div>
        <nav className="absolute inset-x-0 top-0 p-4">
          <Navbar />
        </nav>
        <div
          className="flex flex-col cursor-pointer mt-10 px-10 w-full sm:w-1/2 sm:mt-24"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-white text-start font-base text-xl sm:text-4xl w-full sm:mt-5 mt-10">
            <span className="font-semibold text-yellow-400">
              PT. SKY PARKING UTAMA
            </span>
          </h1>
          <h1 className="text-white text-xs sm:text-base text-justify mt-3 w-[100%] sm:w-[90%]">
            {t("about.header.subtitle")}
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-y-14 my-10 sm:my-20 relative">
        <div
          className="flex flex-col px-12 sm:px-10 gap-y-5 w-full"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-3xl font-semibold">
            {t("about.content.content01.title")}
            <div className="flex flex-row gap-1 items-center">
              <hr className="w-16 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl" />
              <hr className="w-3 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl" />
            </div>
          </h1>
          <p className="font-medium text-stone-700 text-lg sm:text-lg">
            {t("about.content.content01.content")}
          </p>
        </div>

        <div
          className="flex flex-col px-12 sm:px-10 gap-y-5 w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-3xl font-semibold">
            {t("about.content.content02.title")}
            <div className="flex flex-row gap-1 items-center">
              <hr className="w-32 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl" />
              <hr className="w-3 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl" />
            </div>
          </h1>
          <p className="font-medium text-stone-700 text-lg sm:text-lg">
            {t("about.content.content02.content")}
          </p>
        </div>

        <div
          className="flex flex-col w-full m-auto mb-28 sm:mb-5 relative px-2 sm:px-10 gap-y-2"
          data-aos="zoom-in-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-2xl font-semibold">ISO 9001 : 2015 </h1>
          <div className="flex flex-row gap-1 items-center">
            <hr className="w-32 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-10 sm:mb-10" />
            <hr className="w-3 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-10 sm:mb-10" />
          </div>
          <div className="flex flex-row items-start w-full mb-10 sm:mb-10">
            <div className="w-full sm:w-1/2 sm:block">
              <img
                className="w-full sm:pl-20 sm:w-80"
                src={"/images/iso.png"}
                alt=""
              />
            </div>
          </div>
          <div className="w-96 h-96 rounded-full bg-yellow-400 opacity-50 absolute top-[60%] left-0 transform -translate-y-1/2 -z-20 sm:-z-10"></div>
        </div>

        <div
          className="flex flex-col w-full m-auto mb-28 relative px-2 sm:px-0 gap-y-5"
          data-aos="zoom-in-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <div className="px-10 z-30">
            <h1 className="text-2xl font-semibold mb-5">
              {t("about.content.content03.title")}
            </h1>
            <div className="flex flex-row gap-1 items-center">
              <hr className="w-32 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-10 sm:mb-20" />
              <hr className="w-3 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-10 sm:mb-20" />
            </div>
            <div className="flex flex-wrap gap-20 items-center w-full px-5 sm:px-16 mb-28 m-auto">
              <img src={"/images/reward_1.png"} width="300" alt="" />
              <img src={"/images/reward_2.png"} width="300" alt="" />
              <img src={"/images/reward_3.png"} width="300" alt="" />
            </div>
          </div>
          <div className="w-96 h-96 rounded-full bg-yellow-400 opacity-50 absolute top-[60%] left-0 transform -translate-y-1/2 -z-10"></div>
        </div>

        <div className="w-80 h-80 rounded-md rotate-12 bg-yellow-400 opacity-50 absolute top-[40%] right-0 transform -translate-y-1/2 -z-10"></div>
      </div>
      <Footer />
    </>
  );
}

export default TentangKami;
