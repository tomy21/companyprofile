import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdLocationPin, MdGroups, MdEmojiFlags } from "react-icons/md";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
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
      <div className={`relative h-[50vh] sm:h-[80vh] p-2 `}>
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50 -z-10"
          style={{ backgroundImage: 'url("/images/hero.jpg")' }}
        ></div>
        <nav className="absolute inset-x-0 top-0 p-4 z-10">
          <Navbar />
        </nav>
        <div
          className="flex flex-col cursor-pointer mt-20 px-10 w-full sm:w-1/2 sm:mt-32"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-white text-start font-base text-xl sm:text-4xl w-full">
            <span className="font-semibold text-yellow-400">SKY PARKING</span>{" "}
            {t("home.header.title")}
          </h1>
          <h1 className="text-white text-start text-lg sm:text-4xl mt-3 w-[80%] sm:w-[90%]">
            {t("home.header.subtitle")}
          </h1>
          <button className="mt-10 border-2 py-3 px-5 rounded-md border-yellow-400 text-white hover:bg-yellow-400 duration-200 w-52">
            <Link to={"#contact"}>{t("home.header.buttonText")}</Link>
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-evenly gap-x-10 gap-y-10 px-10 m-auto sm:flex-row mt-28 mb-20">
          <div
            className="w-44 h-36 justify-center border-[1px] shadow-slate-300 border-slate-100 shadow-inner rounded-md flex flex-col gap-y-2 items-center py-3 hover:bg-yellow-400"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <MdLocationPin size={50} />
            <h2 className="font-medium text-2xl">112 +</h2>
            <p className="text-xl">{t("home.card.card1")}</p>
          </div>
          <div
            className="w-44 h-36 justify-center border-[1px] shadow-slate-300 border-slate-100 shadow-inner rounded-md flex flex-col gap-y-2 items-center py-3 hover:bg-yellow-400"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <MdGroups size={50} />
            <h2 className="font-medium text-2xl">376 +</h2>
            <p className="text-xl">{t("home.card.card2")}</p>
          </div>
          <div
            className="w-44 h-36 justify-center border-[1px] shadow-slate-300 border-slate-100 shadow-inner rounded-md flex flex-col gap-y-2 items-center py-3 hover:bg-yellow-400"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <MdEmojiFlags size={50} />
            <h2 className="font-medium text-2xl">84.396 +</h2>
            <p className="text-xl">{t("home.card.card3")}</p>
          </div>
        </div>
        <div className="mt-40 flex flex-col justify-center items-center">
          <div
            className="flex flex-col justify-center items-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="w-[80%] sm:w-full mb-3 text-2xl sm:text-[32px] text-center font-semibold">
              {t("home.content.content01.title")}
            </h1>
            <h1 className="w-[80%] sm:w-full text-base sm:text-[20px] text-center">
              {t("home.content.content01.subtitle")}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-20 gap-32">
            <div
              className="flex flex-col gap-y-20 w-[80%] sm:w-[35%]"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="flex flex-row justify-center items-center gap-x-8">
                <img
                  className="w-[70px] h-[70px]"
                  src={"/icons/clock.png"}
                  alt="proses cepat"
                />
                <div className="flex flex-col gap-y-3">
                  <p className="text-[20px] font-semibold">
                    {t("home.content.content02.title")}
                  </p>
                  <p className="text-[20px]">
                    {t("home.content.content02.content")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-x-8">
                <img
                  className="w-[70px] h-[70px]"
                  src={"/icons/chart.png"}
                  alt="dashboard realtime"
                />
                <div className="flex flex-col gap-y-3">
                  <p className="text-[20px] font-semibold">
                    {t("home.content.content03.title")}
                  </p>
                  <p className="text-[20px]">
                    {t("home.content.content03.content")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-x-8">
                <img
                  className="w-[70px] h-[70px]"
                  src={"/icons/vehicle.png"}
                  alt="parkingva"
                />
                <div className="flex flex-col gap-y-3">
                  <p className="text-[20px] font-semibold">
                    {t("home.content.content04.title")}
                  </p>
                  <p className="text-[20px]">
                    {t("home.content.content04.content")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-y-20 w-[80%] sm:w-[35%]"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <div className="flex flex-row justify-center items-center gap-x-8">
                <img
                  className="w-[70px] h-[70px]"
                  src={"/icons/no.png"}
                  alt=""
                />
                <div className="flex flex-col gap-y-3">
                  <p className="text-[20px] font-semibold">
                    {t("home.content.content05.title")}
                  </p>
                  <p className="text-[20px]">
                    {t("home.content.content05.content")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-x-8">
                <img
                  className="w-[70px] h-[70px]"
                  src={"/icons/debit-card.png"}
                  alt=""
                />
                <div className="flex flex-col gap-y-3">
                  <p className="text-[20px] font-semibold">
                    {t("home.content.content06.title")}
                  </p>
                  <p className="text-[20px]">
                    {t("home.content.content06.content")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-x-8">
                <img
                  className="w-[70px] h-[70px]"
                  src={"/icons/valet.png"}
                  alt=""
                />
                <div className="flex flex-col gap-y-3">
                  <p className="text-[20px] font-semibold">
                    {t("home.content.content07.title")}
                  </p>
                  <p className="text-[20px]">
                    {t("home.content.content07.content")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 py-10 w-full h-[auto] sm:h-[50vh] mt-32 flex flex-col justify-start items-center">
          <h1
            className="text-[32px] font-semibold mb-10"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            {t("home.content.content08.title1")}
          </h1>
          <div
            className="flex flex-wrap sm:flex-row gap-x-20 justify-center items-center w-full mb-5"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <div>
              <img className="" src={"/icons/logobca.png"} alt="" />
            </div>
            <div>
              <img className="" src={"/icons/mandiri_logo.png"} alt="" />
            </div>
            <div>
              <img className="" src={"/icons/bni_logo.png"} alt="" />
            </div>
            <div>
              <img className="" src={"/icons/bri_logo.png"} alt="" />
            </div>
            <div>
              <img className="" src={"/icons/nobu_logo.png"} alt="" />
            </div>
          </div>
          <div
            className="flex flex-wrap sm:flex-row gap-x-20 justify-center items-center w-full"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <div>
              <img className="" src={"/icons/gopay_logo.png"} alt="" />
            </div>
            <div>
              <img className="" src={"/icons/logo_linkaja.png"} alt="" />
            </div>
            <div>
              <img className="" src={"/icons/ovo_logo.png"} alt="" />
            </div>
          </div>
        </div>

        {/* Klien Kami Section */}
        <div className="flex flex-col justify-center items-center mt-32 py-10">
          <h1 className="text-[32px] font-semibold mb-10">
            {t("home.content.content08.title2")}
          </h1>
          <div className="flex flex-col gap-4 w-[80%]">
            <div className="flex flex-col sm:flex-row gap-1">
              <img
                className="rounded-lg w-full sm:w-[50%]"
                src={"/images/siloam.jpeg"}
                alt=""
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="200"
              />
              <img
                className="rounded-lg w-full sm:w-[50%]"
                src={"/images/lippomall.jpg"}
                alt=""
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
              />
            </div>
            <div className="flex flex-wrap sm:flex-row justify-between gap-2">
              <div>
                <img
                  className="rounded-lg w-[500px] sm:w-[200px] h-[150px]"
                  src={"/images/mayapada.jpg"}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-[500px] sm:w-[200px] h-[150px]"
                  src={"/images/UPH-University.jpeg"}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-[500px] sm:w-[200px] h-[150px]"
                  src={"/images/BCA_FORESTA.jpg"}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-[500px] sm:w-[200px] h-[150px]"
                  src={"/images/ARYADUTA.jpg"}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-[500px] sm:w-[200px] h-[150px]"
                  src={"/images/orangtua.jpeg"}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
