import Header from "@components/header";
import Footer from "@components/footer";
import React, { useState } from "react";
import Select from "react-select";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Matching = () => {
  const options = [
    { value: "Unmarried", label: "Unmarried" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widow", label: "Widow" },
  ];

  const income = [
    { value: "0.5k to 1k", label: "0.5k to 1k" },
    { value: "1k to 2k", label: "1k to 2k" },
    { value: "2k to 3k", label: "2k to 3k" },
    { value: "3k to 4k", label: "3k to 4k" },
  ];
  const manglik = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const matching = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const agefrom = [
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
    { value: "32", label: "32" },
    { value: "33", label: "33" },
    { value: "34", label: "34" },
    { value: "35", label: "35" },
  ];

  const ageto = [
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
    { value: "32", label: "32" },
    { value: "33", label: "33" },
    { value: "34", label: "34" },
    { value: "35", label: "35" },
    { value: "36", label: "36" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
  ];

  const optionstwo = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Header />
      <div className="main_container  mx-auto">
        <div className="pmd:mb-[315%] ps:mb-[270%]">
          <div className="first_container">
            <img src="/banner_match.png" />
          </div>
          {/* pink box */}

          <div className="justify-center flex align-center items-center ps:hidden">
            <div className="w-[80%] py-3 rounded-l  shadow-xl bg-[#EB2188] -translate-y-[34px] ps:-translate-y-[20px]  ps:w-[90%] ps:py-2">
              <div className="flex justify-center align-center items-center flex-wrap">
                <>
                  <div className="flex items-center mr- ps:mr-4 align-center justify-center">
                    <p className="text-white">Age :</p>
                    <Select
                      placeholder="28"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="text-gray-600 border border-gray-400 mt-2 mx-2 "
                    />
                  </div>
                  <div className="flex items-center mr- ps:mr-4 align-center justify-center">
                    <p className="text-white">To</p>
                    <Select
                      placeholder="32 "
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="text-gray-600 border border-gray-400 mt-2 mx-2 "
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mr- ps:mr-4 align-center justify-center">
                    <p className="text-white">Status :</p>
                    <Select
                      placeholder=" Single "
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="text-gray-600 border border-gray-400 mt-2 mx-2 "
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mr- ps:mr-4 align-center justify-center">
                    <p className="text-white">City :</p>
                    <Select
                      placeholder="Indore "
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="text-gray-600 border border-gray-400 mt-2 mx-2 "
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mr- ps:mr-4 align-center justify-center">
                    <p className="text-white">State :</p>
                    <Select
                      placeholder="Indore  "
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="text-gray-600 border border-gray-400 mt-2 mx-2 "
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mr- ps:mr-4 align-center justify-center">
                    <p className="text-white">Country :</p>
                    <Select
                      placeholder="Indore  "
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="text-gray-600 border border-gray-400 mt-2 mx-2 "
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mr- ps:mr-4 align-center justify-center">
                    <p className="text-white">Citizen :</p>
                    <Select
                      placeholder=" Indian"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="text-gray-600 border border-gray-400 mt-2 mx-2 "
                    />{" "}
                  </div>
                </>
              </div>
            </div>
            <div className="w-[5%] bg-[#080A52] rounded-r flex justify-center text-center items-center shadow-xl py-[11px] -translate-y-[34px] ps:-translate-y-[20px]  ps:w-[90%] ps:py-2">
              <img src="/search.png"></img>
            </div>
          </div>

          <section>
    
        <div className="container pt-2 ps:!w-[95%] xl:w-4/5   mx-auto">
          <div className="flex flex-wrap ">
            <div className=" px-1 w-full md:w-1/2 flex ps:w-1/2  lg:my-4  lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg py-2 border-gray-200 border-2">
                <div className="flex justify-between px-8 py-4 md:p-4">
                  <div></div>
                  <div>
                    <img src="/e1.png" alt="des" className="ps:px-2 ps:translate-x-2" />
                  </div>
                  <div>
                    <img src="/nri.png" />
                  </div>
                </div>

                <header className="flex justify-center space-x-2 items-center">
                  <div className="no-underline font-semibold text-black ps:text-[13px]">
                    Abc00123{" "}
                  </div>
                  <img src="/tick.png" />
                </header>

                <p className="flex justify-center ps:text-[13px]">
                  26, 5ft 5in, 55kg<br></br>
                </p>
                <p className="flex justify-center pb-4 px-8 ">
                  {" "}
                  <b className="text-center align-center px-8 ps:px-0 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2  flex ps:w-1/2 lg:my-4  lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-between px-8 py-4 md:p-4">
                  <div></div>
                  <div>
                    <img src="/e4.png"className="ps:px-2 ps:translate-x-2"  />
                  </div>
                  <div>
                    <img src="/nri.png" />
                  </div>
                </div>

                <header className="flex justify-center space-x-2 items-center">
                  <div className="no-underline font-semibold text-black ps:text-[13px]">
                    Abc00123{" "}
                  </div>
                  <img src="/tick.png" />
                </header>

                <p className="flex justify-center ps:text-[13px]">
                  26, 5ft 5in, 55kg<br></br>
                </p>
                <p className="flex justify-center pb-4 px-8 ">
                  {" "}
                  <b className="text-center align-center px-8 ps:px-0 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2 flex ps:w-1/2 lg:my-4  lg:w-1/4 desktop">
              <article className="overflow-hidden rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-between px-8 py-4 md:p-4">
                  <div></div>
                  <div>
                    <img src="/e3.png" />
                  </div>
                  <div></div>
                </div>

                <header className="flex justify-center space-x-2 items-center">
                  <div className="no-underline font-semibold text-black ps:text-[13px]">
                    Abc00123{" "}
                  </div>
                  <img src="/tick.png" />
                </header>

                <p className="flex justify-center ps:text-[13px]">
                  26, 5ft 5in, 55kg<br></br>
                </p>
                <p className="flex justify-center pb-4 px-8 ">
                  {" "}
                  <b className="text-center align-center px-8 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
                <div className="my-2 mx-1 ">
                  <button className="text-black">Contact</button>
                </div>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2 flex ps:w-1/2 lg:my-4  lg:w-1/4 desktop">
              <article className="overflow-hidden rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-between px-8 py-4 md:p-4">
                  <div></div>
                  <div>
                    <img src="/e2.png" />
                  </div>
                  <div></div>
                </div>

                <header className="flex justify-center space-x-2 items-center">
                  <div className="no-underline font-semibold text-black ps:text-[13px]">
                    Abc00123{" "}
                  </div>
                  <img src="/tick.png" />
                </header>

                <p className="flex justify-center ps:text-[13px]">
                  26, 5ft 5in, 55kg<br></br>
                </p>
                <p className="flex justify-center pb-4 px-8 ">
                  {" "}
                  <b className="text-center align-center px-8 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2 flex ps:w-1/2 lg:my-4  lg:w-1/4 mobile">
              <article className=" rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-center  py-4 md:p-4">
                  
                  <div>
                    <img src="/e2.png" className="ps:px-7" />
                  </div>
                 
                </div>

                <header className="flex justify-center space-x-2 items-center">
                  <div className="no-underline font-semibold text-black ps:text-[13px]">
                    Abc00123{" "}
                  </div>
                  <img src="/tick.png" />
                </header>

                <p className="flex justify-center ps:text-[13px]">
                  26, 5ft 5in, 55kg<br></br>
                </p>
                <p className="flex justify-center pb-4 px-4 ">
                  {" "}
                  <b className="text-center align-center px-4 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
                <div className="my-2 mx-1 ">
                  <button className="text-black">Contact</button>
                </div>
              </article>
            </div>
            
          </div>
        

          <div className=" flex justify-center pt-4 md:hidden">
            <div className="flex space-x-1">
              <p className="text-[#EB2188] font-[550]">View All </p>
              <img src="arrow.png" className="object-scale-down" />
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Matching;
