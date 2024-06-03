import Header from "@components/header";
import Footer from "@components/footer";
import React, { useState } from "react";
import Select from "react-select";
import Link from "next/link";

const Registration = () => {
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
            <img src="/bannerx.png" />
          </div>
          {/* pink box */}

          <div className="justify-center flex align-center items-center">
            <div className="w-3/5 py-8 rounded shadow-xl bg-[#EB2188] -translate-y-[34px] ps:-translate-y-[20px]  ps:w-[90%] ps:py-2">
              <div className="flex justify-center align-center items-center flex-wrap">
                <>
                  <div className="flex items-center mr-8 ps:mr-4 align-center justify-center">
                    <input
                      id="radio1"
                      type="radio"
                      name="radio"
                      className="hidden"
                      defaultChecked=""
                    />
                    <label
                      htmlFor="radio1"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer  "
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm " />
                      Self
                    </label>
                  </div>
                  <div className="flex items-center mr-8  ps:mr-4">
                    <input
                      id="radio2"
                      type="radio"
                      name="radio"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio2"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Son
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      id="radio3"
                      type="radio"
                      name="radio"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio3"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Daughter
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      id="radio4"
                      type="radio"
                      name="radio"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio4"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Brother
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      id="radio5"
                      type="radio"
                      name="radio"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio5"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Sister
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      id="radio6"
                      type="radio"
                      name="radio"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio6"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Relative
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      id="radio7"
                      type="radio"
                      name="radio"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio7"
                      className="flex items-center text-xl leading-[20px]  text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Other
                    </label>
                  </div>
                </>
              </div>
            </div>
          </div>

          <div className="justify-between flex align-center flex-wrap w-[95%]">
            <div></div>
            <div className="justify-center flex align-center items-center">
              <p className="text-lg ps:text-sm">
                Already have an account - &nbsp;{" "}
              </p>
              <button
                className="   pm:py-1  ps:text-sm  pt-1 pb-1.5 px-4 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
           >
                Log In
              </button>
            </div>
          </div>

          <section className="w-5/6 mx-auto">
            <div className=" flex pt-[3%] ps:pt-[10%] justify-center items-center">
              <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
                CREATE PROFILE on VCT
              </p>
            </div>
            <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
              <img src="/tb.png" className="ps:w-28 " />
            </div>
            <div className=" flex pt-[1%]  justify-center items-center">
              <p className=" ps:!text-[14px] pm:text-[20px] pm:font-[550] font-semibold ">
                All Fields with <span className="text-pink-600">*</span> are
                mandatory
              </p>
            </div>

            <div className="flex justify-center align-center items-center mx-auto ">
              {/* form */}

              <form className="w-[90%] ps:w-[100%]">
                <div className="bg-white  rounded pt-8  flex flex-col ">
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="company"
                    >
                      Refrence By <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="company"
                      type="text"
                    
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Whatsapp No.<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      
                      />
                      <div>
                        <span className="text-red-500 text-sm italic">
                          Please fill out this field.
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Email Id<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Re-Type Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Personal Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Gender<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3  mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Date of birth<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Age<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Birthplace <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Birth Time<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Height<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Weight<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Complexion<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Education <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Profession<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Occupation<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Religion<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Community<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mariatal Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        className="mt-2 "
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Physical Status<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Blood Group<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionstwo}
                        className="mt-2 "
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Income<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={income}
                        className="mt-2"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Candidate Address <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="message"
                      type="text"
                    
                    />
                    <div></div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      If NRI <span className="text-red-500 ">*</span>
                    </label>

                    <div className=" flex align-center items-center">
                      <div className=" py-2 rounded shadow-xl bg-[#EB2188] px-4 ">
                        <div className="flex  align-center items-center ">
                          <div className="flex items-center mr-8 ps:mr-4 align-center justify-center">
                            <input
                              id="yes"
                              type="radio"
                              name="radio"
                              className="hidden"
                              defaultChecked=""
                            />
                            <label
                              htmlFor="yes"
                              className="flex items-center text-xl leading-[20px] text-white cursor-pointer  "
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-[12px] " />
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center mr-8  ps:mr-4">
                            <input
                              id="no"
                              type="radio"
                              name="radio"
                              className="hidden"
                            />
                            <label
                              htmlFor="no"
                              className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey " />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Visa<span className="text-red-500 ">*</span>
                      </label>
                      <textarea
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Address ( NRI Citizen )
                        <span className="text-red-500 ">*</span>
                      </label>
                      <textarea
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        rows="2"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Family Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Father Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3  mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Father Profession
                        <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mother Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Mother Profession
                        <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Residence Type<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        className="mt-2 "
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Gotra<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Community<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Sub Community<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Family Address <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="message"
                      type="text"
                    
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Siblings Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Brother<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Sister<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Other Family Details{" "}
                      <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="message"
                      type="text"
                    
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Manglik<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={manglik}
                        className="mt-2 "
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Phone Number<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <label
                    className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                    htmlFor="company"
                  >
                    Photo<span className="text-red-500 ">*</span>{" "}
                    <span className="text-slate-400">
                      ( Face should be near )
                    </span>
                  </label>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-44 border-2 
                      border-gray-300 border-dashed rounded-lg cursor-pointer
                      bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100
                       hover:bg-gray-200 dark:border-gray-400
                        dark:hover:border-gray-100 dark:hover:bg-gray-200"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-[80px] h-[80px]  mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-lg  ps:text-sm text-gray-700 dark:text-gray-400">
                          Drag and Drop Here / Browse
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>

                  <label
                    className=" tracking-wide pt-8 text-gray-600 text-sm
                     font-bold mb-2"
                    htmlFor="company"
                  >
                    Id Proof<span className="text-red-500 ">*</span>
                    <span className="text-slate-400">
                      {" "}
                      ( Adhar Card, PAN Card, Voter Id, Driving Licence, COVID,
                      Ayushman, Religion Id. ){" "}
                    </span>
                  </label>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-44 border-2 
                      border-gray-300 border-dashed rounded-lg cursor-pointer
                      bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100
                       hover:bg-gray-200 dark:border-gray-400
                        dark:hover:border-gray-100 dark:hover:bg-gray-200"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-[80px] h-[80px] mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-lg ps:text-sm text-gray-700 dark:text-gray-400">
                          Drag and Drop Here / Browse
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <label
                    className=" tracking-wide pt-2 text-gray-600 text-xs
                     font-bold mb-2"
                    htmlFor="company"
                  >
                    <span className="text-red-500 ">
                      NOTE_ Without ID’s Proof Account can not be verified.
                    </span>
                  </label>
                  <div className=" md:flex mb-3 pt-8">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Partner Preference -
                      </label>

                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Age Group<span className="text-red-500 ">*</span>
                      </label>

                      <div className="flex flex-wrap pt-4">
                        <div className="flex w-1/2 justify-center align-center items-center text-center ps:w-full ps:pb-2 ">
                          <span className="text-sm  font-semibold  px-2 text-slate-700">
                            From:{" "}
                          </span>
                          <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={agefrom}
                            name="field_name"
                            className="text-gray-600 text-sm font-bold  w-full"
                            type="text"
                            placeholder=""
                          />
                        </div>{" "}
                        <div className="flex  w-1/2 justify-center align-center text-center  items-center ps:w-full ps:pb-2">
                          <span className="text-sm  font-semibold  px-2 text-slate-700">
                            To:
                          </span>
                          <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={ageto}
                            name="field_name"
                            className=" text-gray-600 text-sm font-bold w-full"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Income<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Country<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        State<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        City<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Education<span className="text-red-500 ">*</span>
                      </label>

                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Occupation<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Profession<span className="text-red-500 ">*</span>
                      </label>

                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Manglik<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={manglik}
                        className="mt-2 h-2"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mariatal Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        className="mt-2 "
                        placeholder=""
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 mt-2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Astrology Matching
                        <span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={matching}
                        className="mt-2 h-2"
                        placeholder=""
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Expectation Partner Details
                      <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="message"
                      type="text"
                    
                    />
                    <div></div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value="" 
                      className="appearance-none rounded h-4 w-4 bg-transparent
                      focus:ring-0 focus:ring-offset-0 checked:bg-pink-600
                      border-pink-600 border-2  checked:text-pink-200 ps:w-7 ps:h-4"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ms-2"
                    >
                      Terms and Conditions of services provided by VCT Powered by Prem Rishtey Service Pvt Ltd.
                    </label>
                  </div>

                 <div className="flex justify-center py-4 mt-[5%]">
                    <button
                      className="w-48 ps:w-36   pm:py-1 pm:!text-[14px] text-lg font-bold ps:!text-[16px]  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                      onClick={() => console.log("Register")}
                    >
                     <Link href="/">    Register Now </Link> 
                    </button>
                  </div> 
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
