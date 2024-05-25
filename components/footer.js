export default function Footer() {
  return (
    <>
      <section className="container w-5/6 ps:!w-[95%] mx-auto pt-[5%] pd:!pt-[20%] h-auto">
        <div className="flex flex-wrap justify-center items-stretch pb-10">
          <div className="bg-[#080A52]  w-full md:w-3/5 px-4 ps:px-2 py-6 order-2 md:order-none flex flex-col justify-center">
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
              <div className="ps:flex ps:w-1/2 lg:w-1/4 px-2 py-2 ">
                <div className="ps:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark text-center">
                  <h1>Squid </h1>
                  <p>Squid palo santo </p>
                </div>
              </div>
              <div className="ps:flex ps:w-1/2 lg:w-1/4 px-2 py-2">
                <div className="ps:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark text-center">
                  <h1>Squid </h1>
                  <p>Squid palo santo </p>{" "}
                </div>
              </div>
              <div className="md:flex ps:w-1/2 lg:w-1/4 px-2 py-2">
                <div className="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark text-center">
                  <h1>Squid </h1> <p>Squid palo santo </p>{" "}
                </div>
              </div>
              <div className="md:flex ps:w-1/2 lg:w-1/4 px-2 py-2">
                <div className="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark text-center">
                  <h1>Squid </h1> <p>Squid palo santo </p>{" "}
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
    </>
  );
}
