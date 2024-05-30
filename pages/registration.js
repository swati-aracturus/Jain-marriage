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

          <section >
        <div className=" flex pt-[3%]  justify-center items-center">
          <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
            CREATE PROFILE on VCT
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
       
      </section>


        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
