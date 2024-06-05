import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Slide from "../components/slidenav";
export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("New Matches");
  const handleTabClick = (tabName) => {
      setSelectedTab(tabName);
  }
  return (
    <>
      <header className=" px-16" >
        <div className="flex flex-wrap items-center justify-between lg:container px-12 py-1 mx-auto md:flex-no-wrap ps:translate-x-6 ">
          <div className="flex items-center desktop">
            <img
              src="/logo 1.png"
              width={120}
              height={100}
              priority
              alt="Tailwind CSS logo"
            />
          </div>

          <div className="flex items-center">
            <div>
              <div className="flex space-x-2 md:space-x-4 justify-end lg:py-2 ">
                <img
                  src="/wt.png"
                  width={30}
                  height={30}
                  priority
                  alt="Tailwind CSS logo" className="h-12 w-12 pm:h-6 pm:w-6  pxs:!h-5 pxs:!w-5"
                />
                <div />

                <img
                  src="/telegram.png"
                  width={30}
                  height={30}
                  priority
                  alt="Telegram logo"className="h-12 w-12 pm:h-6 pm:w-6  pxs:!h-5 pxs:!w-5"
                />
                <div />

                <img
                  src="/facebook.png"
                  width={30}
                  height={30}
                  priority
                  alt="Facebook logo" className="h-12 w-12 pm:h-6 pm:w-6  pxs:!h-5 pxs:!w-5"
                />
                <div />

                <img
                  src="/social.png"
                  width={30}
                  height={30}
                  priority
                  alt="Social logo" className="h-12 w-12 pm:h-6 pm:w-6  pxs:!h-5 pxs:!w-5"
                />
              </div>

              <ul
                className={cn(
                  "md:flex flex-col md:flex-row md:items-start md:justify-start text-sm w-full md:w-auto sm:hidden",
                  mobileMenuIsOpen ? `block` : `hidden`
                )}
              >
                {[{ title: "जैन का विवाह जैन से ही हो ", route: "/" }].map(
                  ({ route, title }) => (
                    <li className="py-3" key={title}>
                      <Link href={route}>
                        <a className="block text-[#EB2188] font-semibold text-2xl">{title}</a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Slide />
      
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
                    Today's Matches(10)
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
