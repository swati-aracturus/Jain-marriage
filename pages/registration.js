import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";

const Registration = () => {
  return (
    <>
      <Header />
      <div className="main_container mb-[35%] pmg:mb-[38%]  mx-auto">
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
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-[12px] " />
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
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey " />
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
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
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
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
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
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
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
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
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
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
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
              <p className="text-lg">Already have an account - &nbsp; </p>
              <button
                className="   pm:py-1 pm:!text-[14px]  ps:!text-[16px]  pt-1 pb-1.5 px-4 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                onClick={() => console.log("Register")}
              >
                Log In
              </button>
            </div>

          </div>


      <section className="w-5/6 mx-auto">
            <div className=" flex pt-[3%]  justify-center items-center">
              <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
                CREATE PROFILE on VCT
              </p>
            </div>
            <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
              <img src="/tb.png" className="ps:w-28 " />
            </div>
            <div className=" flex pt-[1%]  justify-center items-center">
              <p className=" ps:!text-[14px] pm:text-[20px] pm:font-[550] font-semibold ">
                All Fields with <span className="text-red-600">*</span> are
                mandatory
              </p>
            </div>

            <div className="flex justify-center align-center items-center mx-auto ">
              {/* form */}

              <form className="w-[90%]">
                <div className="bg-white  rounded pt-8  flex flex-col ">
                  <div className=" px-3 mb-6">
                    <label className="uppercase tracking-wide text-gray-600 text-sm font-bold mb-2" htmlFor="company" >
                  Refrence By <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                      id="company"
                      type="text"
                      placeholder="Tutsplus"
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Whatsapp No.<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div>
                        <span className="text-red-500 text-sm italic">
                          Please fill out this field.
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Email Id<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Re-Type Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 px-3  md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                       Personal Details - 
                      </label>
                    
                      <div></div>
                    </div>
                    
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                       Gender<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3  mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                    Candidate Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Date of birth<span className="text-red-500 ">*</span>
                      </label>
                      
                      
                      <div></div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Gender<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Candidate Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Birth Place<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Height<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Weight<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Complexion<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Profession<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Marrital Status<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        htmlFor="company"
                      >
                        Blood group<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                        placeholder="Tutsplus"
                      />
                      <div></div>
                    </div>
                  </div>
                  <label
                    className="uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                    htmlFor="company"
                  >
                    photo<span className="text-red-500 ">*</span>
                  </label>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-702 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                        <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
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
                    className="uppercase tracking-wide pt-8 text-gray-600 text-xs font-bold mb-2"
                    htmlFor="company"
                  >
                    Id Proof<span className="text-red-500 ">*</span>
                  </label>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 
    border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100 hover:bg-gray-200 dark:border-gray-400 dark:hover:border-gray-100 dark:hover:bg-gray-200"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div className="flex justify-center py-4">
                    {" "}
                    <button
                      className="w-48 ps:w-36   pm:py-1 pm:!text-[14px] text-lg font-bold ps:!text-[16px]  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                      onClick={() => console.log("Register")}
                    >
                      {" "}
                      Register Now
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
