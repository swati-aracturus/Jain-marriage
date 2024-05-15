import Image from "next/image";
export default function sign() {
    return (
      <main>
       <div className="desktop bg-gradient-to-r from-cyan-400 to-sky-400">
          <div className="flex w-full min-h-screen  justify-center items-center">
            <div className="hidden lg:block">
              <div
                className="rounded-3xl my-12 py-6 bg-white" 
                style={{ width: "100%" }}
              >
                <div className=" flex justify-center items-center">
                  <Image
                    src="/image 35.png"
                    alt="My SVG"
                    width={100}
                    height={100}
                    className="pt-4"
                  />
                </div>
               
                <div className=" flex justify-center flex-center pt-12">
                 
                  <div className="font-extrabold text-sky-600 text-5xl ">
                    Welcome
                  </div>
                 
                </div>
                <div className=" flex justify-center flex-center ">
                  <div className="text-center leading-6 w-[430px] py-2 text-xl text-slate-500 font-medium">
                  Shubham Rajput
                  
                  </div>
                </div>
                <div className=" flex justify-center flex-center ">
                  <div className="text-center text-base leading-6 w-[430px] pt-2 pb-2 text-slate-500">
                  Business Solution
                  
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                <button className="h-11 font-medium bg-cyan-400 hover:bg-cyan-500 text-base text-gray-100 px-12 my-8 rounded-md w-72">
               Get Started
                  </button>
                  </div>
              </div>
            </div>
 
         
          </div>
          
        </div>
        
      </main>)}