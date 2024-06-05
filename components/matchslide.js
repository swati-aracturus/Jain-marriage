import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("New Matches");
  const handleTabClick = (tabName) => {
      setSelectedTab(tabName);
  }
  return (
    <>
    
   
      
      <div className="md:flex bg-[#EB2188] px-[12%]">
                <div
                    className={`cursor-pointer mr-6 w-19 mt-3 pb-4 text-white ${selectedTab === "New Matches" &&
                        "border-b-[4px] border-[#080A52] text-[#080A20]"
                        } `}
                    onClick={() => handleTabClick("New Matches")}
                >
                    New Matches(7,903)
                </div>
                <div
                    className={`cursor-pointer mr-6 w-18 mt-3 pb-4 text-[Yellow] font-Abc ${selectedTab === "Today's Matches" &&
                        "border-b-[4px] border-[#080A52] text-[yellow] Font-Abc"
                        } `}
                    onClick={() => handleTabClick("Today's Matches")}
                >
                    Today&apos;s Matches(10)
                </div>
                <div
                    className={`cursor-pointer mr-6 w-18 mt-3 pb-4 text-white ${selectedTab === "My Matches" &&
                        "border-b-[4px] border-[#080A52] text-[#080A20]"
                        } `}
                    onClick={() => handleTabClick("My Matches")}
                >
                    My Matches(444)
                </div>
                <div
                    className={`cursor-pointer mr-6 w-18 mt-3 pb-4 text-white ${selectedTab === "Near Me" &&
                        "border-b-[4px] border-[#080A52] text-[#080A20]"
                        } `}
                    onClick={() => handleTabClick("Near Me")}
                >
                    Near Me
                </div>
                <div
                    className={`cursor-pointer mr-6 w-18 mt-3 pb-4 text-white ${selectedTab === "Recently Viewed" &&
                        "border-b-[4px] border-[#080A52] text-[#080A20]"
                        } `}
                    onClick={() => handleTabClick("Recently Viewed")}
                >
                    Recently Viewed
                </div>
                <div
                    className={`cursor-pointer mr-6 w-18 mt-3 pb-4 text-white ${selectedTab === "More Matches" &&
                        "border-b-[4px] border-[#080A52] text-[#080A20]"
                        } `}
                    onClick={() => handleTabClick("More Matches")}
                >
                    More Matches
                </div>
            </div>
      
    </>
  );
}
