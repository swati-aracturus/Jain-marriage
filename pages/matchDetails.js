import React, {useState} from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsThreeDotsVertical, BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineTempleHindu } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiBarbedStar } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPeopleRobbery, FaDollarSign } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import MatchNav from "@components/matchslide";




const MatchDetails = () => {
    const [selectedTab, setSelectedTab] = useState("Profile Details");
        const handleTabClick = (tabName) => {
            setSelectedTab(tabName);
        }
    return(

        <>
       <Header />
        <MatchNav/> 
         <div>
            <div className="font-bold text-2xl sm:ml-[10%] md:ml-[20%] lg:ml-[23%] xl:ml-[25%] mx-5 md:mx-0 mt-12">
            Here are Today&apos;s top Matches for you.Connect with them now!
            </div>
            
            <div className="flex sm:ml-[60%] md:ml-[70%] lg:ml-[75%] xl:ml-[60%] ml-[70%] sm:mt-[2%] md:mt-[3%] lg:mt-[4%] xl:mt-[5%] mt-[7%]">

          <div>
          <BsChevronLeft className="sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px]" style={{ fontWeight: 'bold', strokeWidth: '1' }} />

          </div>
          <h1 className=" sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] text-[#EB2188] -mt-2 mx-5 font-bold">2/10</h1>
          <div>
          <BsChevronRight className="sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px]" style={{ fontWeight: 'bold', strokeWidth: '1' }} />

          </div>
            </div>

          <div className="sm:w-[500px] md:w-[660px] lg:w-[800px] xl:w-[1000px] ml-[14%] shadow shadow-grey-200 ">
          <div className=" border border-gray-400 rounded-lg pr-[40%] mt-3 ">
                        <div className="md:flex md:items-start ]">
                            <img src="/Rectangle 63.png" />
                            <div className="mx-10">
                                <p className="mt-3 font-bold text-[22px] flex">Abc000123
                                    <div className="mt-1 ml-1">

                                        <RiVerifiedBadgeFill className="text-[#EB2188]" />
                                    </div>
                                     
                                     <div className="sm:ml-[120%] md:ml-[130%] lg:ml-[200%] xl:ml-[320%] ml-[100%] sm:-mt-[210px] -mt-[220px] md:mt-0 lg:mt-0 xl:mt-0 ">
                                    <BsThreeDotsVertical className="text-3xl" />
                                     </div>

                                </p>
                                <div className="mt-2">

                                    <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>28 yrs , 4&apos;5 , 50kg </p>
                                    <p className="mt-1 ">Hindu, Chouhan</p>
                                    <p className="mt-1"> Hindi</p>
                                </div>
                            </div>
                            <div className="sm:mt-2 md:mt-8 lg:mt-10 xl:mt-12 mt-5 px-10 sm:px-3 md:px-0 lg:px-0 xl:px-0 sm:ml-7 md:ml-0 lg:ml-0 xl:ml-0  ">
                                <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>Never Married</p>
                                <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>Bhopal, M.P., India</p>
                                <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>Web Developer</p>
                            </div>

                        </div>
                        <div className="sm:ml-7 md:ml-60 lg:ml-60 xl:ml-60 ml-5 sm:mt-[20px] md:-mt-[100px] lg:-mt-[110px] xl:-mt-[90px] mt-5 sm:w-[350px] md:w-[370px] lg:w-[400px] xl:w-[600px] w-[200px] px-5 sm:px-3 md:px-0 lg:px-0 xl:px-0">

                            <p> Let Me introduce Myself, I Have Completed My Bachelors in Engineering Modern Yet Traditional,I Am ...
                                <span className="text-blue-500 cursor-pointer">More</span>
                            </p>
                        </div>
                        <div className="text-white bg-[#EB2188] rounded-full px-5 py-3 my-4 w-40 sm:ml-10 md:ml-60 lg:ml-60 xl:ml-60 ml-10 mt-3 ">
                            <button style={{ whiteSpace: 'nowrap' }}>Connect with her</button>
                        </div>
                    </div>
         
         <div className="border border-gray-400 rounded-lg mt-5 md:mt-0"> 

         <div className="md:flex border border-gray-300 ">
         <div
            className={`cursor-pointer md:w-[50%] pb-4 text-xl px-3 md:px-0 font-semibold ${
                selectedTab === "Profile Details" &&
                "border-b-[4px]  border-[#EB2188]"
            } `}
            onClick={() => handleTabClick("Profile Details")}
          >
           <div className="md:ml-[42%] mt-1">
           Profile Details
            </div>
            
          </div>
          <div
            className={`cursor-pointer md:w-[50%] mt-3 pb-4 text-xl  px-3 md:px-0 font-semibold ${
              selectedTab === "Partner Prefrences" &&
              "border-b-[4px]  border-[#EB2188]"
            } `}
            onClick={() => handleTabClick("Partner Prefrences")}
          >
           <div className="md:ml-[40%] mt-1">
           Partner Prefrences
            </div>
             
          </div>
         </div>
        
        <div>
            <div className="font-bold text-xl mt-5 md:ml-10 px-3 md:px-0">
            About Canditate_name-
            </div>
            <div className="flex">
            <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0 mt-5">ID:</h1>
            <h1 className="mt-5 ml-3 text-[18px]">20 to 27</h1>
            </div>

            <div className="flex">
            <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0 mt-3">Profile Created by:</h1>
            <h1 className="mt-3 ml-3 px-3 md:px-0 md:text-[18px]">Self</h1>
            </div>
            <p className="text-[20px] md:ml-10 md:mx-20 px-5 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       
                <div className="h-[1px] md:w-[81%] w-20 mt-5 mx-[4%] bg-gray-300"></div>
        </div>
          
          <div>
            <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Contact Details-</h1>

        <div className="md:flex">
           <div className="ml-5 mt-7">
             <FaPhoneAlt className="text-[#EB2188]" />
            </div>
            <h1 className="font-bold text-xl ml-3 mt-5 ">

                Contact Number:</h1>
            <h1 className="mt-5 ml-3 text-[18px]">+917568XXXXXX</h1>
            </div>
            <div className="md:flex">
            <div className="ml-5 mt-4">
             <MdOutlineMailOutline className="text-[#EB2188] text-[20px]" />
            </div>
            <h1 className="font-bold text-xl ml-3 mt-3">Email ID:</h1>
            <h1 className="mt-3 ml-3 md:text-[18px]">X0X0X0X0X0@gmail.com</h1>
            </div>
            <div className="flex ml-6 mt-3 text-[18px]">
            <span className="text-[#EB2188] cursor-pointer font-semibold">Upgrade New</span>
            <p className="ml-1">to view details</p>
            </div>
          </div>
          <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

           <div>
           <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Lifestyle-</h1>
           <div className="md:ml-10 mt-8 flex px-3 md:px-0">
             <GiKnifeFork className="text-[#EB2188] text-[23px]" />
           <h1 className=" ml-3 font-semibold text-[18px]">Non-Vegetarian</h1>
            </div> 
           </div>
           <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

           <div>
           <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Background-</h1>
           <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <MdOutlineTempleHindu className="text-[#EB2188] text-[24px]" />
           <div className=" ml-2 font-semibold text-[18px]">Hindus, Hindi</div>
            </div>
            
            <div className="md:ml-10 px-3 md:px-0mt-7 flex">
             <IoIosPeople className="text-[#EB2188] text-[24px]" />
           <div className=" ml-2 font-semibold text-[18px]">Chouhan</div>
            </div>
              
            <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <GiBarbedStar className="text-[#EB2188] text-[24px]" />
           <h1 className=" ml-2 font-semibold text-[18px]">Occassionally Pooja and fasts</h1>
            </div>

            <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <IoLocationSharp className="text-[#EB2188] text-[24px]" />
           <h1 className="ml-2 font-xl font-bold">Indore, M.P., India</h1>
            </div>
           </div>

           <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

           <div>
           <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Family Details-</h1>

           <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <FaPeopleRobbery className="text-[#EB2188] text-[24px]" />
           <div className="ml-2 font-semibold text-[18px]">Father is retired, Mother is a homemaker</div>
            </div>

            <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <IoIosPeople className="text-[#EB2188] text-[24px]" />
           <div className="ml-2 font-semibold text-[18px]">4 Sisters, (2Married)</div>
            </div>

            <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <IoLocationSharp className="text-[#EB2188] text-[24px]" />
           <div className="ml-2 font-semibold text-[18px]">Jaipur, Rajasthan, India</div>
            </div>

            <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <FaDollarSign className="text-[#EB2188] text-[24px]" />
           <div className="ml-2 font-semibold text-[18px]">Family Financial Status</div>
            </div>
           <div className="flex">
           <h1 className="font-bold text-xl ml-[5%] mt-5"> Middle-</h1>
           <h1 className="mt-5 ml-3 text-[18px]">Annual family income is 10-30lakhs</h1>
           </div>

           <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

          <div>
          <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0  mt-5"> Education $ Career-</h1>
          <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <FcManager className="text-[#EB2188] text-[24px]" />
           <h1 className="ml-2 font-semibold text-[18px]">Sr. Manager/ Manager</h1>
            </div>

           <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
             <FaDollarSign className="text-[#EB2188] text-[24px]" />
           <h1 className="ml-2 font-semibold text-[18px]">Earns AED 60K to 90K annually</h1>
            </div>
          </div>

          <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-400"></div>

           </div>

            </div>
          </div>
            
         </div>


       <Footer />
        </>



    );
};








export default MatchDetails;
