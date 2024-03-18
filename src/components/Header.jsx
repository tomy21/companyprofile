import React from "react";
import Navbar from "./Navbar"; // Import wave image from correct directory

function Header() {
  return (
    <div className="App">
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
            Solusi Parkir
          </h1>
          <h1 className="text-white text-start text-lg sm:text-4xl mt-3 w-[80%] sm:w-[90%]">
            Modern Untuk Gaya Hidup Anda
          </h1>
          <button className="mt-10 border-2 py-3 px-5 rounded-md border-yellow-400 text-white hover:bg-yellow-400 duration-200 w-52">
            Hubungi kami
          </button>
        </div>
      </div>

      {/* Wave image */}
      {/* <div className="absolute top-[328px] z-0 mt-0">
        <img src="/images/gelombang.png" className="w-full" alt="Wave" />
      </div> */}
    </div>
  );
}

export default Header;
