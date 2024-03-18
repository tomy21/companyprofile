import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineMail, MdOutlineMapsHomeWork } from "react-icons/md";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Product() {
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
          className="flex flex-col cursor-pointer mt-10 px-10 w-full sm:w-1/2 sm:mt-32"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-white text-start font-base text-xl sm:text-4xl w-full">
            <span className="font-semibold text-yellow-400">SKY PARKING</span>{" "}
            Solusi Parkir Masa Depan
          </h1>
          <h1 className="text-white text-start text-lg sm:text-lg mt-3 w-[80%] sm:w-[90%]">
            Jadikan setiap perjalanan Anda lebih nyaman dengan SKY Parking –
            tempat parkir pilihan untuk masa depan yang lebih baik.
          </h1>
        </div>
      </div>
      <div className="flex flex-col m-auto relative">
        <div className="p-10">
          <h1 className="text-2xl font-semibold mb-5">Teknologi SKY Parking</h1>
          <div className="flex flex-row gap-1 items-center">
            <hr className="w-32 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-20" />
            <hr className="w-3 h-1 bg-yellow-400 border-[1px] border-yellow-400 rounded-2xl mb-20" />
          </div>
          <div
            className="flex flex-row items-center gap-24 w-full mb-28 m-auto px-32"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-1/2 hidden sm:block">
              <img
                className="w-64 pl-20"
                src={"/images/tap-to-pay.png"}
                alt=""
              />
            </div>
            <div className="flex flex-col w-[80%]">
              <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
                Tap In Tap Out (TITO)
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                Pembayaran Non Tunai akan memperkecil terjadinya kebocoran dan
                mempermudah monitoring dll, serta mempermudan dan mempercepat
                transaksi di pintu keluar.
              </p>
            </div>
          </div>

          <div
            className="flex flex-row items-center justify-end gap-24 mb-28 w-full m-auto px-32"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex flex-col justify-start items-start w-[80%]">
              <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
                Pembayaran dengan QRIS
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                Pembayar parkir di SKY Parking semakin mudah dengan metode
                pembayaran QRIS. Cukup pindai kode QR dan nikmati kenyamanan
                tanpa repot membawa uang tunai dan lebih terjamin keamananya.{" "}
              </p>
            </div>
            <div className="w-1/2 hidden sm:block">
              <img className="w-64 pl-20" src={"/images/scan.png"} alt="" />
            </div>
          </div>

          <div
            className="flex flex-row items-center gap-24 w-full mb-28 m-auto px-32"
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
                Membership
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                Pembayaran Non Tunai akan memperkecil terjadinya kebocoran dan
                mempermudah monitoring dll, serta mempermudan dan mempercepat
                transaksi di pintu keluar.
              </p>
            </div>
          </div>

          <div
            className="flex flex-row items-center justify-end gap-24 mb-28 w-full m-auto px-32"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex flex-col justify-start items-start w-[80%]">
              <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
                E-wallet pembayaran
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                Untuk memudahkan transaksi pelanggan kami, kami sudah bekerja
                sama dengan beberapa payment channel di indonesia seperti OVO,
                Go-Pay, LinkAja dan lainnya{" "}
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
        className="flex flex-col w-full m-auto mb-28 relative px-32"
        data-aos="zoom-in-right"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="px-10">
          <h1 className="text-2xl font-semibold mb-5">
            Realtime Monitoring Dashboard
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
                Dashboard user friendly dan realtime
              </h1>
              <hr className="w-32 border-[1px] border-yellow-400 rounded-2xl mb-5" />
              <p className="text-justify">
                Saksikan dunia parkir dalam genggaman Anda dengan data real-time
                yang disajikan secara langsung dari lapangan. Pelanggan kami
                dapat dengan mudah melihat informasi aktual, membuat keputusan
                yang cerdas, dan mengoptimalkan pengalaman parkir mereka. SKY
                Parking, di mana setiap detail diatur dengan sempurna untuk
                memastikan pengalaman parkir yang tak terlupakan!
              </p>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 rounded-full bg-yellow-400 opacity-50 absolute top-[60%] left-16 -z-10 transform -translate-y-1/2"></div>
      </div>

      <div className="h-auto bg-gray-200 flex flex-col sm:flex-col justify-between items-start px-20 py-20 gap-3">
        {/* <div className="w-full sm:w-[50%] flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Kontak Kami</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              className="rounded-md px-2 py-3 border-[1px] border-slate-100"
              placeholder="Masukkan email Anda"
              required
            />
            <input
              type="text"
              className="rounded-md px-2 py-3 border-[1px] border-slate-100"
              placeholder="Masukkan nama Anda"
              required
            />
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              className="rounded-md px-2 py-3 border-[1px] border-slate-100"
              placeholder="Masukkan pesan Anda"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 p-2 rounded-md font-semibold hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div> */}
        <h1 className="text-xl font-semibold mb-1">Beragam Bentuk Kerjasama</h1>
        <ul className="list-disc pl-5">
          <li className="mb-2">Management Fee</li>
          <li className="mb-2">Profit Sharing</li>
          <li className="mb-2">Revenue Sharing</li>
          <li className="mb-2">Cost and Fee</li>
          <li className="mb-2">Equipment Rent</li>
          <li className="mb-2">System Rent</li>
        </ul>
        <p className="text-base">
          Untuk pertanyaan mengenai bentuk kerjasama dapat menghubungi :<br />
          <span className="font-semibold">
            business.development@skyparking.co.id
          </span>
        </p>
      </div>
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
                Perusahaan ini didirikan berdasarkan semangat profesionalisme
                dan keunggulan produk, menciptakan kualitas yang tak tertandingi
                dalam berbagai aspek bisnisnya.
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
                  Ruko pinangsia karawaci Office park blok H no 20, Lippo
                  Village, Karawaci, Tangerang, Banten
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 mx-20 flex flex-col justify-between items-center mb-5">
            <hr className="w-full border-[1px] border-white z-10" />
            <div className="flex flex-col sm:flex-row justify-end items-center gap-5 text-white mt-5 ml-auto">
              <span className="z-10">
                &copy; <span id="current-year"></span> PT. SKY PARKING UTAMA.
                All Rights Reserved.
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
          className="absolute top-0 left-0"
          src={"/images/gelombang2.png"}
          alt=""
        />
      </footer>
    </div>
  );
}

export default Product;
