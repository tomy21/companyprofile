import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function Product() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className={`relative h-[50vh] sm:h-[65vh] p-2`}>
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 -z-10"
          style={{ backgroundImage: 'url("/images/hero2.jpg")' }}
        ></div>
        <nav className="absolute inset-x-0 top-0 p-4 z-10">
          <Navbar />
        </nav>
        <div
          className="flex flex-col cursor-pointer mt-24 px-10 w-full sm:w-1/2 sm:mt-32"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-white text-start font-base text-lg sm:text-4xl w-full">
            <span className="font-semibold text-yellow-400">SKY PARKING </span>
            {t("product.header.title")}
          </h1>
          <h1 className="text-white text-sm sm:text-base text-justify mt-3 w-[100%] sm:w-[90%]">
            {t("product.header.subtitle")}
          </h1>
        </div>
      </div>
      <div className="flex flex-col m-auto relative">
        <div className="p-10">
          <h1 className="text-2xl font-semibold mb-5">
            {t("product.content.content01.title")}
          </h1>
          <div className="flex flex-row gap-1 items-center">
            <hr className="w-32 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-20" />
            <hr className="w-3 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-20" />
          </div>
          <div
            className="flex flex-row items-center gap-24 w-full mb-28 m-auto sm:px-32"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-1/2 hidden sm:block">
              <img
                className="w-64 pl-10 sm:pl-20"
                src={"/images/tap-to-pay.png"}
                alt=""
              />
            </div>
            <div className="flex flex-col w-[100%] sm:w-[80%]">
              <h1 className="text-2xl sm:text-2xl font-semibold text-yellow-400 mb-5">
                {t("product.content.content02.title")}
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                {t("product.content.content02.content")}
              </p>
            </div>
          </div>

          <div
            className="flex flex-row items-center gap-24 w-full mb-28 m-auto sm:px-32"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex flex-col justify-start items-start w-[80%]">
              <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
                {t("product.content.content03.title")}
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                {t("product.content.content03.content")}
              </p>
            </div>
            <div className="w-1/2 hidden sm:block">
              <img className="w-64 pl-20" src={"/images/scan.png"} alt="" />
            </div>
          </div>

          <div
            className="flex flex-row items-center gap-24 w-full mb-28 m-auto sm:px-32"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-1/2 hidden sm:block">
              <img className="w-64 pl-20" src={"/images/id-card.png"} alt="" />
            </div>
            <div className="flex flex-col w-[80%]">
              <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
                {t("product.content.content04.title")}
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                {t("product.content.content04.content")}
              </p>
            </div>
          </div>

          <div
            className="flex flex-row items-center gap-24 w-full mb-28 m-auto sm:px-32"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex flex-col justify-start items-start w-[80%]">
              <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
                {t("product.content.content05.title")}
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                {t("product.content.content05.content")}
              </p>
            </div>
            <div className="w-1/2 hidden sm:block">
              <img className="w-64 pl-20" src={"/images/ewallet.png"} alt="" />
            </div>
          </div>
        </div>
        <div className="w-96 h-96 -z-10 rounded-md rotate-12 bg-yellow-400 opacity-50 absolute top-[60%] right-0 transform -translate-y-1/2"></div>
      </div>

      <div
        className="flex flex-row items-center gap-24 w-full mb-28 m-auto sm:px-32"
        data-aos="zoom-in-right"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="px-10">
          <h1 className="text-2xl font-semibold mb-5">
            {t("product.content.content06.title")}
          </h1>
          <div className="flex flex-row gap-1 items-center">
            <hr className="w-32 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-20" />
            <hr className="w-3 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-20" />
          </div>
          <div className="flex flex-row items-center gap-24 w-full mb-28 m-auto">
            <div className="w-1/2 hidden sm:block">
              <img className="w-80 pl-20" src={"/icons/chart.png"} alt="" />
            </div>
            <div className="flex flex-col w-[80%]">
              <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
                {t("product.content.content07.title")}
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                {t("product.content.content07.content")}
              </p>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 rounded-full bg-yellow-400 opacity-50 absolute top-[60%] left-16 -z-10 transform -translate-y-1/2"></div>
      </div>

      <div className="h-auto bg-gray-200 flex flex-col sm:flex-col justify-between items-start px-20 py-20 gap-3">
        <h1 className="text-xl font-semibold mb-1">
          {t("product.content.content08.title")}
        </h1>
        <ul className="list-disc pl-5">
          <li className="mb-2">{t("product.content.content08.content.1")}</li>
          <li className="mb-2">{t("product.content.content08.content.2")}</li>
          <li className="mb-2">{t("product.content.content08.content.3")}</li>
          <li className="mb-2">{t("product.content.content08.content.4")}</li>
          <li className="mb-2">{t("product.content.content08.content.5")}</li>
          <li className="mb-2">{t("product.content.content08.content.6")}</li>
        </ul>
        <p className="text-base">
          {t("product.content.content08.subtitle")}
          <br />
          <span className="font-semibold">
            business.development@skyparking.co.id
          </span>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
