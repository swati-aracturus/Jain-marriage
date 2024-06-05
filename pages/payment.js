import Link from "next/link";
import Header from "@components/header";
import Footer from "@components/footer";
import Select from "react-select";
import { useState, useEffect, useRef } from "react";

const Members = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Paytm", label: "Paytm" },
    { value: "Gpay", label: "Gpay" },
    { value: "Bank Transfer", label: "Bank Transfer" },
    { value: "Neft", label: "Neft" },
  ];

  return (
    <>
      <Header />
      <div className="main_container mx-auto">
        <div className="">
          <div className="first_container">
            <img src="/banner_pay.png" />
          </div>
        </div>
      </div>
      <div className=" w-4/5 flex flex-wrap bg-gray-200 py-4 mx-auto rounded-xl align-center items-center  -translate-y-[10%] pm:translate-y-0  pm:px-4 pm:w-full">
        <div className="w-1/2 py-[5%] px-[10%] ps:p-2 ps:w-full">
          <div className="bg-pink-600 text-center text-white text-2xl rounded-lg font-bold p-4">
            Selected Plan
          </div>
          <div className="bg-white shadow-lg rounded-xl">
            <div className="bg-white justify-between flex text-center align-center items-center p-4">
              <div className="p-4">
                <p className=" text-lg font-bold text-gray-800">Special </p>
                <p className="text-sm text-gray-600">Best Value</p>
              </div>
              <div className="px-4 bg-gray-200 rounded-lg">
                <p className=" text-lg font-bold text-gray-800 translate-y-[2px]">
                  ₹ 499{" "}
                </p>
                <p className="text-sm text-gray-600 -translate-y-1">1 Year</p>
              </div>
            </div>
            <div className="bg-white text-center align-center items-center">
              <hr className="w-[60%] h-[1px] mx-auto bg-gray-400 border-0" />
              <div className="bg-white space-x-2 flex text-left align-center items-center pt-6 px-6">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8472 0L18.1936 1.64601L8.01991 16.32H5.67348L0 8.37013L2.34644 6.18129L6.8467 10.3839L15.8472 0Z"
                    fill="#EB2188"
                  />
                </svg>
                <p>Biodata Making.</p>
              </div>

              <div className="bg-white space-x-2 flex text-left align-center items-center pt-4 px-6">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8472 0L18.1936 1.64601L8.01991 16.32H5.67348L0 8.37013L2.34644 6.18129L6.8467 10.3839L15.8472 0Z"
                    fill="#EB2188"
                  />
                </svg>
                <p> Highlight Biodata in Website</p>
              </div>
              <div className="bg-white space-x-2 flex text-left align-center items-center pt-4 px-6">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8472 0L18.1936 1.64601L8.01991 16.32H5.67348L0 8.37013L2.34644 6.18129L6.8467 10.3839L15.8472 0Z"
                    fill="#EB2188"
                  />
                </svg>
                <p>Jain Business Promotion</p>
              </div>
              <div className="bg-white space-x-2 flex text-left pt-4 px-6 pb-10">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8472 0L18.1936 1.64601L8.01991 16.32H5.67348L0 8.37013L2.34644 6.18129L6.8467 10.3839L15.8472 0Z"
                    fill="#EB2188"
                  />
                </svg>
                <p>Above service Will Start By Office Contact Our Team.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-[5%] pm:mt-[20%] ps:p-2 ps:w-full">
          <div className="justify-center flex align-center items-center">
            <p className="text-xl text-pink-600 font-bold">
              Select Payment Mode :
            </p>
          </div>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="mt-2 text-gray-600 border border-gray-400"
            placeholder=""
          />
          <div className="justify-center flex align-center pt-8 items-center">
            <p className="text-xl text-pink-600 font-bold">Transaction Id :</p>
          </div>{" "}
          <input
            className="w-full text-gray-600 border border-gray-400 rounded py-2 px-4 mt-2 mb-3"
            id="company"
            type="text"
          />
          <div className="flex items-center justify-center w-full mt-8">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.7972 0V30.3H0V0H41.7972Z" fill="#2DCC9F"/>
<path d="M33.1873 4.01486C32.4174 3.85241 31.6149 3.97174 30.9256 4.35113C30.2363 4.73053 29.7062 5.34478 29.4316 6.0821C29.157 6.81943 29.1563 7.63082 29.4295 8.36865C29.7028 9.10647 30.2318 9.72168 30.9204 10.1023C31.609 10.483 32.4113 10.6038 33.1815 10.4427C33.9516 10.2816 34.6383 9.84945 35.1166 9.22476C35.595 8.60008 35.8332 7.82443 35.7878 7.03894C35.7425 6.25346 35.4167 5.51036 34.8696 4.94485C34.4135 4.47487 33.8279 4.15116 33.1873 4.01486ZM24.0501 21.2697C21.3393 17.5 18.6274 13.7307 15.9146 9.96202L3.8501 26.7421H20.1212C21.4308 24.919 22.7415 23.0963 24.0531 21.2741M29.9405 15.1494C27.161 19.0126 24.3825 22.8764 21.605 26.7406H38.2776C35.5001 22.8764 32.721 19.0126 29.9405 15.1494Z" fill="white"/>
</svg>

                <p className="text-lg  ps:text-sm pt-4 text-gray-800 ">
                  Drop your Screenshot here, or Browse
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="justify-center flex align-center pt-10 items-center">
            <button
              className="text-xl w-full h-[50px] bg-pink-600 text-white font-bold rounded-lg mt-6"
              onClick={handleLoginClick}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleClosePopup}
        >
          <div
            ref={popupRef}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;