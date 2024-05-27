export default function Footer() {
  return (
    <>
      <section className="container w-5/6 ps:!w-[95%] mx-auto pt-[5%] pd:!pt-[20%] h-auto">
        <div className="flex flex-wrap justify-center items-stretch pb-10">
          <div className="bg-[#080A52]  w-full md:w-3/5 px-4 ps:px-2 py-4 order-2 md:order-none flex flex-col justify-center">
            <div className="flex pt-[4%]  justify-center items-center">
              <p className="text-4xl text-white ps:!text-[20px] pm:text-[20px] pm:font-[550] font-semibold">
                WHY CHOOSE US
              </p>
            </div>
            <div className="pt-4  pm:!py-2  pm:!-translate-y-2 flex justify-center">
              <img src="/tb.png" className="ps:w-28" />
            </div>
            <div className="pt-6 pm:!pt-0 pm:!-translate-y-2 ps:text-[13px] flex justify-center  px-5 ps:px-1">
              <p className="text-center text-white">
                At Jain E-Patrika, we go beyond traditional matchmaking
                platforms by placing a strong emphasis on fostering genuine
                human connections. We understand that finding a life partner
                means discovering someone who truly understands and complements
                you. Our dedicated team verifies each profile to ensure
                authenticity and maintains a secure environment for your search.
                With our user-friendly interface, personalized matchmaking, and
                extensive database of eligible individuals, we strive to provide
                you with meaningful connections that have the potential to
                flourish into lifelong relationships. Join us and become part of
                a community that values the human aspect of finding love,
                because we believe that the right connection can change your
                life forever.
              </p>
            </div>

            <div className="md:flex ps:flex content-center flex-wrap -mx-2 p-3 pb-[2%] bg-grey rounded shadow-lg">
              <div className="ps:flex ps:w-1/2 lg:w-1/4 px-2 py-2 justify-center align-center items-center">
                <div className="ps:flex-1 p-4 rounded  backdrop-blur-[2px] bg-white/25  text-center">
                  <h1 className="text-2xl font-bold text-[#EB2188]"> 7+ </h1>
                  <p className=" text-white"> Years of bond of trust </p>
                </div>
              </div>
              <div className="ps:flex ps:w-1/2 lg:w-1/4 px-2 py-2 ">
                <div className="ps:flex-1 p-4 rounded  backdrop-blur-[2px] bg-white/25  text-center">
                  <h1 className="text-2xl font-bold text-[#EB2188]">10,000+</h1>
                  <p className=" text-white">Number of Live Profiles </p>
                </div>
              </div>
              <div className="ps:flex ps:w-1/2 lg:w-1/4 px-2 py-2 ">
                <div className="ps:flex-1 p-4 rounded  backdrop-blur-[2px] bg-white/25  text-center">
                  <h1 className="text-2xl font-bold text-[#EB2188]">
                    {" "}
                    50,000+{" "}
                  </h1>
                  <p className=" text-white">Number of Visited Profiles </p>
                </div>
              </div>
              <div className="ps:flex ps:w-1/2 lg:w-1/4 px-2 py-2 ">
                <div className="ps:flex-1 p-4 rounded  backdrop-blur-[2px] bg-white/25  text-center">
                  <h1 className="text-2xl font-bold text-[#EB2188]">
                    {" "}
                    9,893+{" "}
                  </h1>
                  <p className=" text-white"> Successful Marriages </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[32rem] ps:!h-[400px] pmg:h-[500px] md:w-2/5  order-1 md:order-none">
            <img
              src="sat.png"
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center text-center items-center ">
          <div className="w-96 py-2 bg-[#EB2188] translate-y-6">
            <h1 className="text-white text-lg ps">TRUSTED BY MILLIONS</h1>
          </div>
        </div>
        <div className="bg-[#080A52]">
          <div className="w-full flex justify-center  items-center py-2 bg-[#080A52] ">
            <div className="w-3/5 py-0  ps:w-full ps:px-4">
              <div className="border-t-[1px] border-b-[1px] border-gray-700 backdrop-blur-sm flex justify-center  items-center mt-[5%] ps:mt-[10%] py-2 space-x-2">
                <div className="flex justify-center align-center  items-center w-1/3 desktop">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="24.5" stroke="#EB2188" />
                    <path
                      d="M31.0552 32.9445V35.8334H10.833V32.9445C10.833 32.9445 10.833 27.1668 20.9441 27.1668C31.0552 27.1668 31.0552 32.9445 31.0552 32.9445ZM25.9996 19.2224C25.9996 18.2225 25.7031 17.245 25.1476 16.4137C24.5921 15.5823 23.8025 14.9343 22.8788 14.5517C21.955 14.169 20.9385 14.0689 19.9578 14.264C18.9771 14.459 18.0763 14.9405 17.3693 15.6476C16.6622 16.3546 16.1808 17.2554 15.9857 18.2361C15.7906 19.2168 15.8907 20.2333 16.2734 21.157C16.656 22.0808 17.304 22.8704 18.1354 23.4259C18.9668 23.9814 19.9442 24.2779 20.9441 24.2779C22.2849 24.2779 23.5708 23.7453 24.5189 22.7972C25.467 21.8491 25.9996 20.5632 25.9996 19.2224ZM30.9685 27.1668C31.8565 27.854 32.583 28.7274 33.0971 29.7256C33.6112 30.7238 33.9003 31.8226 33.944 32.9445V35.8334H39.7218V32.9445C39.7218 32.9445 39.7218 27.7012 30.9685 27.1668ZM29.6107 14.1668C28.6165 14.1613 27.6441 14.4585 26.823 15.019C27.7004 16.245 28.1721 17.7148 28.1721 19.2224C28.1721 20.7299 27.7004 22.1997 26.823 23.4257C27.6441 23.9862 28.6165 24.2834 29.6107 24.2779C30.9515 24.2779 32.2374 23.7453 33.1855 22.7972C34.1336 21.8491 34.6663 20.5632 34.6663 19.2224C34.6663 17.8816 34.1336 16.5957 33.1855 15.6476C32.2374 14.6995 30.9515 14.1668 29.6107 14.1668Z"
                      fill="#EB2188"
                    />
                  </svg>
                  <p className="text-white text-[20px] font-![100]  ps:text-xs ml-2">
                    Best Matches
                  </p>
                </div>
                <div className="flex justify-center align-center  items-center w-1/3 mobile">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="24.5" stroke="#EB2188" />
                    <path
                      d="M31.0552 32.9445V35.8334H10.833V32.9445C10.833 32.9445 10.833 27.1668 20.9441 27.1668C31.0552 27.1668 31.0552 32.9445 31.0552 32.9445ZM25.9996 19.2224C25.9996 18.2225 25.7031 17.245 25.1476 16.4137C24.5921 15.5823 23.8025 14.9343 22.8788 14.5517C21.955 14.169 20.9385 14.0689 19.9578 14.264C18.9771 14.459 18.0763 14.9405 17.3693 15.6476C16.6622 16.3546 16.1808 17.2554 15.9857 18.2361C15.7906 19.2168 15.8907 20.2333 16.2734 21.157C16.656 22.0808 17.304 22.8704 18.1354 23.4259C18.9668 23.9814 19.9442 24.2779 20.9441 24.2779C22.2849 24.2779 23.5708 23.7453 24.5189 22.7972C25.467 21.8491 25.9996 20.5632 25.9996 19.2224ZM30.9685 27.1668C31.8565 27.854 32.583 28.7274 33.0971 29.7256C33.6112 30.7238 33.9003 31.8226 33.944 32.9445V35.8334H39.7218V32.9445C39.7218 32.9445 39.7218 27.7012 30.9685 27.1668ZM29.6107 14.1668C28.6165 14.1613 27.6441 14.4585 26.823 15.019C27.7004 16.245 28.1721 17.7148 28.1721 19.2224C28.1721 20.7299 27.7004 22.1997 26.823 23.4257C27.6441 23.9862 28.6165 24.2834 29.6107 24.2779C30.9515 24.2779 32.2374 23.7453 33.1855 22.7972C34.1336 21.8491 34.6663 20.5632 34.6663 19.2224C34.6663 17.8816 34.1336 16.5957 33.1855 15.6476C32.2374 14.6995 30.9515 14.1668 29.6107 14.1668Z"
                      fill="#EB2188"
                    />
                  </svg>
                  <p className="text-white text-[20px] font-![100]  ps:text-sm ml-2">
                    Best Matches
                  </p>
                </div>
                <div className="flex justify-center align-center  items-center w-1/3 desktop">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="24.5" stroke="#EB2188" />
                    <path
                      d="M25 31.5875L32.725 36.25L30.675 27.4625L37.5 21.55L28.5125 20.7875L25 12.5L21.4875 20.7875L12.5 21.55L19.325 27.4625L17.275 36.25L25 31.5875Z"
                      fill="#EB2188"
                    />
                  </svg>

                  <p className="text-white text-[20px] font-![100]  ps:text-sm ml-2">
                    Best Results
                  </p>
                </div>
                <div className="flex justify-center align-center  items-center w-1/3 mobile">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="24.5" stroke="#EB2188" />
                    <path
                      d="M25 31.5875L32.725 36.25L30.675 27.4625L37.5 21.55L28.5125 20.7875L25 12.5L21.4875 20.7875L12.5 21.55L19.325 27.4625L17.275 36.25L25 31.5875Z"
                      fill="#EB2188"
                    />
                  </svg>

                  <p className="text-white text-[20px] font-![100]  ps:text-sm ml-2">
                    Best Results
                  </p>
                </div>
                <div className="flex justify-center align-center  items-center w-1/3 desktop">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="24.5" stroke="#EB2188" />
                    <path
                      d="M33.3335 20.0009H31.9049V17.1437C31.9049 13.2009 28.7049 10.0009 24.7621 10.0009C20.8192 10.0009 17.6192 13.2009 17.6192 17.1437V20.0009H16.1906C14.6192 20.0009 13.3335 21.2866 13.3335 22.858V37.1437C13.3335 38.7151 14.6192 40.0009 16.1906 40.0009H33.3335C34.9049 40.0009 36.1906 38.7151 36.1906 37.1437V22.858C36.1906 21.2866 34.9049 20.0009 33.3335 20.0009ZM24.7621 32.858C23.1906 32.858 21.9049 31.5723 21.9049 30.0009C21.9049 28.4294 23.1906 27.1437 24.7621 27.1437C26.3335 27.1437 27.6192 28.4294 27.6192 30.0009C27.6192 31.5723 26.3335 32.858 24.7621 32.858ZM29.1906 20.0009H20.3335V17.1437C20.3335 14.7009 22.3192 12.7151 24.7621 12.7151C27.2049 12.7151 29.1906 14.7009 29.1906 17.1437V20.0009Z"
                      fill="#EB2188"
                    />
                  </svg>

                  <p className="text-white text-[20px] font-![100]  ps:text-sm ml-2">
                    100% Secure and Private
                  </p>
                </div>
                <div className="flex justify-center align-center  items-center w-1/3 mobile">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="24.5" stroke="#EB2188" />
                    <path
                      d="M33.3335 20.0009H31.9049V17.1437C31.9049 13.2009 28.7049 10.0009 24.7621 10.0009C20.8192 10.0009 17.6192 13.2009 17.6192 17.1437V20.0009H16.1906C14.6192 20.0009 13.3335 21.2866 13.3335 22.858V37.1437C13.3335 38.7151 14.6192 40.0009 16.1906 40.0009H33.3335C34.9049 40.0009 36.1906 38.7151 36.1906 37.1437V22.858C36.1906 21.2866 34.9049 20.0009 33.3335 20.0009ZM24.7621 32.858C23.1906 32.858 21.9049 31.5723 21.9049 30.0009C21.9049 28.4294 23.1906 27.1437 24.7621 27.1437C26.3335 27.1437 27.6192 28.4294 27.6192 30.0009C27.6192 31.5723 26.3335 32.858 24.7621 32.858ZM29.1906 20.0009H20.3335V17.1437C20.3335 14.7009 22.3192 12.7151 24.7621 12.7151C27.2049 12.7151 29.1906 14.7009 29.1906 17.1437V20.0009Z"
                      fill="#EB2188"
                    />
                  </svg>

                  <p className="text-white text-[20px] font-![100]  ps:text-sm ml-2">
                    100% Secure and Private
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
  <div className="w-4/5 items-center mx-auto flex flex-row flex-wrap ps:flex-col">
    <div className="w-1/3 border-r-[1px] border-gray-700 backdrop-blur-sm ps:border-0 ps:w-full ps:mx-auto">
      <h1 className="text-white text-[20px] mx-auto pt-3 pb-2">
        Contact Info:
      </h1>
      <div className="flex space-x-1 justify-between ps:justify-center w-1/3 ">
    
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mobile"
          >
            <path
              d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
              fill="#EB2188"
            />
          </svg>
        </div>
        <div>
          <p className="text-white ">VCT@gmail.com</p>
        </div>
      </div>
    </div>
    
  </div>
</div>
        </div>
      </section>

      {/*  <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
  <form>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-sm font-bold mb-2"
            htmlFor="company"
          >
           Whatsapp No.<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
            <span className="text-red-500 text-xs italic">
              Please fill out this field.
            </span>
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
          Email Id<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
            
          </div>
        </div>
     
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
           Password<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
       Re-Type Password<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
     
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
           Refrence By<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
        Religion<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
     
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
          Community<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
        Gender<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
     
      </div>
    
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
          Candidate Name<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
      Birth Place<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
     
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
        Height<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
      Weight<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
     
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
      Complexion<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
      Profession<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
     
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
    Marrital Status<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
    Blood group<span className="text-red-500 ">*</span>
          </label>
          <input
            className="w-full  text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Tutsplus"
          />
          <div>
           
          </div>
        </div>
     
      </div>
      <label
            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" />
  </label>
</div>

<label
            className="uppercase tracking-wide pt-8 text-black text-xs font-bold mb-2"
            htmlFor="company"
          >
    Id Proof<span className="text-red-500 ">*</span>
          </label>
          

          <div className="flex items-center justify-center w-full">
  <label
    htmlFor="dropzone-file"
    className="flex flex-col items-center justify-center w-full h-64 border-2 
    border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100 hover:bg-gray-200 dark:border-gray-200 dark:hover:border-gray-100 dark:hover:bg-gray-200"
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
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" />
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
</div> */}
    </>
  );
}
