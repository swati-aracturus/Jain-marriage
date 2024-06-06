import Link from "next/link";
import Header from "@components/header";
import Footer from "@components/footer";
import Select from "react-select";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
                <svg
                  width="42"
                  height="31"
                  viewBox="0 0 42 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M41.7972 0V30.3H0V0H41.7972Z" fill="#2DCC9F" />
                  <path
                    d="M33.1873 4.01486C32.4174 3.85241 31.6149 3.97174 30.9256 4.35113C30.2363 4.73053 29.7062 5.34478 29.4316 6.0821C29.157 6.81943 29.1563 7.63082 29.4295 8.36865C29.7028 9.10647 30.2318 9.72168 30.9204 10.1023C31.609 10.483 32.4113 10.6038 33.1815 10.4427C33.9516 10.2816 34.6383 9.84945 35.1166 9.22476C35.595 8.60008 35.8332 7.82443 35.7878 7.03894C35.7425 6.25346 35.4167 5.51036 34.8696 4.94485C34.4135 4.47487 33.8279 4.15116 33.1873 4.01486ZM24.0501 21.2697C21.3393 17.5 18.6274 13.7307 15.9146 9.96202L3.8501 26.7421H20.1212C21.4308 24.919 22.7415 23.0963 24.0531 21.2741M29.9405 15.1494C27.161 19.0126 24.3825 22.8764 21.605 26.7406H38.2776C35.5001 22.8764 32.721 19.0126 29.9405 15.1494Z"
                    fill="white"
                  />
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
          className="fixed inset-0 flex items-center justify-center backdrop-blur bg-black bg-opacity-50 z-50"
          onClick={handleClosePopup}
        >
          <div
            ref={popupRef}
            className="backgrd p-8 rounded-lg shadow-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center ">
              <img src="/logo.png"></img>
            </div>
            <div className="flex py-6  justify-center ">
             <img src="/tq.png"  alt="tq"/>
            </div>
            <div className="flex text-2xl  justify-center font-bold text-blue-700">
            <h1> Registration Successful</h1>
            </div>
            <div className="flex text-xl py-2 justify-center font-bold ">
            <h1> Registration ID: <span className="text-[#FF0000]">0985aj09 </span> </h1>
            </div>
            <div className="flex text-[19px] pt-6 pb-4 justify-center font-bold text-center leading-6">
            <h1>Join Our Whatsapp Group for Further
Details for Biodata and E-book</h1>
            </div>

            <div className="flex text-xl justify-center font-bold ">
            <button
                className="   pm:py-1  ps:text-sm   py-3 px-8 text-white rounded-[10px] bg-[#FF0000] hover:bg-red-600 focus:outline-none  focus:ring focus:ring-red-500 "
                onClick={() => console.log("Register")}
              >
              Join Now
              </button>  </div>
              <div className="flex pt-8 justify-center ">
              <svg width="69" height="45" viewBox="0 0 69 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.63229 40H1.48429V30.564H2.81429L5.83829 35.338C6.53829 36.444 7.08429 37.438 7.53229 38.404L7.56029 38.39C7.44829 37.13 7.42029 35.982 7.42029 34.512V30.564H8.56829V40H7.33629L4.34029 35.212C3.68229 34.162 3.05229 33.084 2.57629 32.062L2.53429 32.076C2.60429 33.266 2.63229 34.4 2.63229 35.968V40ZM16.1031 36.836H11.3431C11.3711 38.502 12.4351 39.188 13.6671 39.188C14.5491 39.188 15.0811 39.034 15.5431 38.838L15.7531 39.72C15.3191 39.916 14.5771 40.154 13.4991 40.154C11.4131 40.154 10.1671 38.768 10.1671 36.724C10.1671 34.68 11.3711 33.07 13.3451 33.07C15.5571 33.07 16.1451 35.016 16.1451 36.262C16.1451 36.514 16.1171 36.71 16.1031 36.836ZM11.3571 35.954H14.9551C14.9691 35.17 14.6331 33.952 13.2471 33.952C12.0011 33.952 11.4551 35.1 11.3571 35.954ZM23.1168 36.836H18.3568C18.3848 38.502 19.4488 39.188 20.6808 39.188C21.5628 39.188 22.0948 39.034 22.5568 38.838L22.7668 39.72C22.3328 39.916 21.5908 40.154 20.5128 40.154C18.4268 40.154 17.1808 38.768 17.1808 36.724C17.1808 34.68 18.3848 33.07 20.3588 33.07C22.5708 33.07 23.1588 35.016 23.1588 36.262C23.1588 36.514 23.1308 36.71 23.1168 36.836ZM18.3708 35.954H21.9688C21.9828 35.17 21.6468 33.952 20.2608 33.952C19.0148 33.952 18.4688 35.1 18.3708 35.954ZM29.3045 30.06H30.5365V38.25C30.5365 38.852 30.5505 39.538 30.5925 40H29.4865L29.4305 38.824H29.4025C29.0245 39.58 28.1985 40.154 27.0925 40.154C25.4545 40.154 24.1945 38.768 24.1945 36.71C24.1805 34.456 25.5805 33.07 27.2325 33.07C28.2685 33.07 28.9685 33.56 29.2765 34.106H29.3045V30.06ZM29.3045 37.158V35.982C29.3045 35.828 29.2905 35.618 29.2485 35.464C29.0665 34.68 28.3945 34.036 27.4705 34.036C26.1965 34.036 25.4405 35.156 25.4405 36.654C25.4405 38.026 26.1125 39.16 27.4425 39.16C28.2685 39.16 29.0245 38.614 29.2485 37.69C29.2905 37.522 29.3045 37.354 29.3045 37.158ZM35.5956 30.564H36.8136V34.512H41.3776V30.564H42.6096V40H41.3776V35.576H36.8136V40H35.5956V30.564ZM50.1324 36.836H45.3724C45.4004 38.502 46.4644 39.188 47.6964 39.188C48.5784 39.188 49.1104 39.034 49.5724 38.838L49.7824 39.72C49.3484 39.916 48.6064 40.154 47.5284 40.154C45.4424 40.154 44.1964 38.768 44.1964 36.724C44.1964 34.68 45.4004 33.07 47.3744 33.07C49.5864 33.07 50.1744 35.016 50.1744 36.262C50.1744 36.514 50.1464 36.71 50.1324 36.836ZM45.3864 35.954H48.9844C48.9984 35.17 48.6624 33.952 47.2764 33.952C46.0304 33.952 45.4844 35.1 45.3864 35.954ZM51.7001 40V30.06H52.9321V40H51.7001ZM55.0087 42.772V35.436C55.0087 34.568 54.9807 33.868 54.9527 33.224H56.0587L56.1147 34.386H56.1427C56.6467 33.56 57.4447 33.07 58.5507 33.07C60.1887 33.07 61.4207 34.456 61.4207 36.514C61.4207 38.95 59.9367 40.154 58.3407 40.154C57.4447 40.154 56.6607 39.762 56.2547 39.09H56.2267V42.772H55.0087ZM56.2267 36.08V37.242C56.2267 37.424 56.2547 37.592 56.2827 37.746C56.5067 38.6 57.2487 39.188 58.1307 39.188C59.4327 39.188 60.1887 38.124 60.1887 36.57C60.1887 35.212 59.4747 34.05 58.1727 34.05C57.3327 34.05 56.5487 34.652 56.3107 35.576C56.2687 35.73 56.2267 35.912 56.2267 36.08ZM65.0234 37.312H63.9314L63.9034 36.948C63.8194 36.206 64.0714 35.366 64.7714 34.54C65.4014 33.784 65.7514 33.238 65.7514 32.608C65.7514 31.894 65.3034 31.418 64.4214 31.404C63.9174 31.404 63.3574 31.572 63.0074 31.838L62.6714 30.956C63.1474 30.62 63.9314 30.396 64.6734 30.396C66.2834 30.396 67.0114 31.39 67.0114 32.454C67.0114 33.406 66.4794 34.106 65.8074 34.89C65.1914 35.618 64.9674 36.248 65.0094 36.962L65.0234 37.312ZM64.4494 40.154H64.4354C63.9594 40.154 63.6234 39.776 63.6234 39.286C63.6234 38.768 63.9734 38.404 64.4634 38.404C64.9534 38.404 65.2894 38.768 65.2894 39.286C65.2894 39.776 64.9674 40.154 64.4494 40.154Z" fill="black"/>
<path d="M45.0244 14.2567C45.0244 7.85167 40.0428 3.5 34.4998 3.5C29.0153 3.5 23.9752 7.75833 23.9752 14.3267C23.2735 14.7233 22.8058 15.47 22.8058 16.3333V18.6667C22.8058 19.95 23.8582 21 25.1446 21C25.7878 21 26.314 20.475 26.314 19.8333V14.2217C26.314 9.75333 29.7637 5.845 34.2425 5.71667C35.3387 5.68341 36.4303 5.87001 37.4529 6.2654C38.4754 6.66079 39.408 7.25694 40.1953 8.01851C40.9827 8.78009 41.6088 9.69159 42.0365 10.699C42.4643 11.7064 42.685 12.7893 42.6856 13.8833V22.1667H34.4998C33.8566 22.1667 33.3304 22.6917 33.3304 23.3333C33.3304 23.975 33.8566 24.5 34.4998 24.5H42.6856C43.9719 24.5 45.0244 23.45 45.0244 22.1667V20.7433C45.7144 20.3817 46.1938 19.67 46.1938 18.83V16.1467C46.1938 15.33 45.7144 14.6183 45.0244 14.2567Z" fill="black"/>
<path d="M30.9917 16.3333C31.6375 16.3333 32.1611 15.811 32.1611 15.1667C32.1611 14.5223 31.6375 14 30.9917 14C30.3458 14 29.8223 14.5223 29.8223 15.1667C29.8223 15.811 30.3458 16.3333 30.9917 16.3333Z" fill="black"/>
<path d="M38.008 16.3333C38.6539 16.3333 39.1774 15.811 39.1774 15.1667C39.1774 14.5223 38.6539 14 38.008 14C37.3622 14 36.8386 14.5223 36.8386 15.1667C36.8386 15.811 37.3622 16.3333 38.008 16.3333Z" fill="black"/>
<path d="M41.5162 12.8683C41.2374 11.2282 40.3859 9.73929 39.1125 8.66528C37.839 7.59126 36.2258 7.00137 34.5583 7C31.015 7 27.2028 9.92833 27.5068 14.525C28.9488 13.9363 30.2225 13.0007 31.2141 11.8017C32.2057 10.6028 32.8846 9.1776 33.1901 7.65333C34.722 10.7217 37.8677 12.8333 41.5162 12.8683Z" fill="black"/>
</svg>

              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Members;
