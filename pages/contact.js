import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import Strip from "@components/strip";

const Members = () => {
  return (
    <>
      <Header />
      <div className="main_container mx-auto">
        <div className="">
          <div className="first_container">
            <img src="/bannercontact.png" />
          </div>
        </div>
      </div>
      <div className=" flex pt-[3%] ps:pt-[10%]   justify-center items-center">
        <p className="text-4xl  pm:text-[20px] pm:font-[550] font-bold text-gray-700 ">
          FEEL FREE TO CONTACT US
        </p>
      </div>
      <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
        <img src="/tb.png" className="ps:w-28 " />
      </div>
      <div className=" flex justify-center  w-[85%] ps:w-full ps:px-4 flex-wrap  mx-auto mt-[3%]">
        <div className="w-1/6  py-2  text-center text-[18px] ps:text-[14px] ps:w-1/2">
          <div className="flex justify-center py-2">
            {" "}
            <img src="/addr.png" />
          </div>
          <p className="text-center">
            7, Chudi Bakhal Near Bus Stand, Dewas, Madhya Pradesh 123456.
            <br />
            <span className="font-bold">AND</span>
            <br />
            Shop no. 1, Ground Floor, Mahakal ComplexIndore Naka, Khandwa.
          </p>
        </div>

        <div className="w-1/6  py-2 text-center text-[18px] ps:text-[14px] ps:w-1/2">
          <div className="flex justify-center py-2">
            {" "}
            <img src="/website.png" />
          </div>
          <p className="text-[18px] ps:text-[14px] font-500">www.vct.com</p>
        </div>

        <div className="w-1/6  py-2 text-center text-[18px] ps:text-[14px] ps:w-1/2">
          <div className="flex justify-center py-2">
            {" "}
            <img src="/phone.png" />
          </div>
          <p className="text-[18px] ps:text-[14px] font-500">+91 xxxxxxxxx</p>
        </div>

        <div className="w-1/6  py-2 text-center text-[18px] ps:text-[14px] ps:w-1/2">
          <div className="flex justify-center py-2">
            {" "}
            <img src="/mail.png" />
          </div>
          <p className="text-[18px] ps:text-[14px] font-500">vct@gmail.com</p>
        </div>
        <div className="w-1/6  py-2 text-center text-[18px] ps:text-[14px] ps:w-1/2">
          <div className="flex justify-center py-2">
            {" "}
            <img src="/support.png" />
          </div>
          <p className="text-[18px] ps:text-[14px] font-500">Need Help ?</p>
        </div>
        <div className="w-1/6  py-2 text-center text-[18px] ps:text-[14px] ps:w-1/2">
          <div className="flex justify-center py-2">
            {" "}
            <img src="/clock.png" />
          </div>
          <p className="text-[18px] ps:text-[14px] font-500">
            Available On :<br />
            11 AM - 6 PM ISD
          </p>
        </div>
      </div>
      <Strip />
      <Footer />
    </>
  );
};

export default Members;
