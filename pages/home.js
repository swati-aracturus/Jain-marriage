"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Carousel from 'react-elastic-carousel';
import { useState, useEffect } from "react";

let items = [
  { id: 1, title: 'item #1' },
  { id: 2, title: 'item #2' },
  { id: 3, title: 'item #3' },
  { id: 4, title: 'item #4' },
  { id: 5, title: 'item #5' }
]

const img = "/Group10Image.png";
const styling = {
  backgroundImage: `url('${img}')`,
  width: "100%",
  height: "100%"
}

const Home = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [startX, setStartX] = useState(null);
  const [startScrollLeft, setStartScrollLeft] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = Array.from(carousel.children);
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });
    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });
    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };
    const dragging = (e) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove("dragging");
    };
    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };
    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      setTimeoutId(
        setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500)
      );
    };
    autoPlay();
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
    return () => {
      // Cleanup event listeners on component unmount
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
    };
  }, [isAutoPlay]);
  return (
    <>
      <div className="containeri">
        <div className="pd-carousel " id="pdCarousel1">
          <input
            type="radio"
            id="pdCarouselItem1"
            className="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem2"
            className="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem3"
            className="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem4"
            className="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem5"
            className="pd-carousel__input"
            name="pdCarousel"
          />

          <ul className="pd-carousel__items">
            <li className="pd-carousel__item">
              <label
                htmlFor="pdCarouselItem5"
                className="pd-carousel__prev"
              ></label>
              <img src="/banner.png" />
              <div className="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but
                    we&apos;ve made it simpler.
                  </h1>
                </div>
              </div>
              <label
                htmlFor="pdCarouselItem2"
                className="pd-carousel__next"
              ></label>
            </li>

            <li className="pd-carousel__item">
              <label
                htmlFor="pdCarouselItem1"
                className="pd-carousel__prev"
              ></label>
              <img src="/banner.png" />
              <div className="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but
                    we&apos;ve made it simpler.
                  </h1>
                </div>
              </div>
              <label
                htmlFor="pdCarouselItem3"
                className="pd-carousel__next"
              ></label>
            </li>

            <li className="pd-carousel__item">
              <label
                htmlFor="pdCarouselItem2"
                className="pd-carousel__prev"
              ></label>
              <img src="/banner.png" />
              <div className="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but
                    we&apos;ve made it simpler.
                  </h1>
                </div>
              </div>
              <label
                htmlFor="pdCarouselItem4"
                className="pd-carousel__next"
              ></label>
            </li>

            <li className="pd-carousel__item">
              <label
                htmlFor="pdCarouselItem3"
                className="pd-carousel__prev"
              ></label>
              <img src="/banner.png" />
              <div className="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but
                    we&apos;ve made it simpler.
                  </h1>
                </div>
              </div>
              <label
                htmlFor="pdCarouselItem5"
                className="pd-carousel__next"
              ></label>
            </li>

            <li className="pd-carousel__item">
              <label
                htmlFor="pdCarouselItem4"
                className="pd-carousel__prev"
              ></label>
              <img src="/banner.png" />
              <div className="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but
                    we&apos;ve made it simpler.
                  </h1>
                </div>
              </div>
              <label
                htmlFor="pdCarouselItem1"
                className="pd-carousel__next"
              ></label>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-between">
            <div></div>
            <div>
              <ul className="pd-carousel__selector_items">
                <li className="pd-carousel__selector_item">
                  <label
                    htmlFor="pdCarouselItem1"
                    className="pd-carousel__selector"
                  ></label>
                  <label
                    htmlFor="pdCarouselItem1"
                    className="pd-carousel__selector pd-carousel__selector_on"
                  ></label>
                </li>
                <li className="pd-carousel__selector_item">
                  <label
                    htmlFor="pdCarouselItem2"
                    className="pd-carousel__selector"
                  ></label>
                </li>
                <li className="pd-carousel__selector_item">
                  <label
                    htmlFor="pdCarouselItem3"
                    className="pd-carousel__selector"
                  ></label>
                </li>
                <li className="pd-carousel__selector_item">
                  <label
                    htmlFor="pdCarouselItem4"
                    className="pd-carousel__selector"
                  ></label>
                </li>
                <li className="pd-carousel__selector_item">
                  <label
                    htmlFor="pdCarouselItem5"
                    className="pd-carousel__selector"
                  ></label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="login">
        <div className=" flex pt-[5%]  justify-center items-center">
          <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
            REGISTER OR LOG IN NOW
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
        <div className="w-4/5 ps:!w-[95%] mx-auto my-5 ps:my-3 align-center flex  pt-2 cover justify-center items-center">
          <img
            className="banner_image"
            width={"100%"}
            height={"auto"}
            src={"/fe.png"}
          />
        </div>
        <div className="w-2/3 mx-auto my-5 ps:my-3 align-center flow flex space-x-16 justify-center items-center ">
          <button
            className="w-48 pm:w-24 ps:!w-[65px] ps:!py-0  pm:py-2 pm:text-sm text-xl font-bold ps:!text-[10px]  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
            onClick={() => console.log("Register")}
          >
            {" "}
            Register
          </button>
          <button
            className="w-48 pm:w-24 pm:py-2 ps:!w-[65px] ps:!py-0  pm:text-sm text-xl font-bold ps:!text-[10px]  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 "
            onClick={() => console.log("Login")}
          >
            Login
          </button>
        </div>
      </section>
      <section>
        <div className=" flex justify-center ">
          <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
            SUCCESS STORIES
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
        <div>
          <div class="three-slide-slider">
            <Carousel>
              {items.map(item =>
                <div key={item.id} className="flex flex-col md:flex-row justify-between my-[50px] mx-[50px]">
                  <div className="text-[#e451a5] font-bold h-[220px] md:h-[180px] md:w-[500px] w-full shadow-sm shadow-slate-500 p-4 md:mr-20 mb-4 md:mb-0 rounded-lg MainBoxCard">
                    <div className="img">
                      <img
                        className="ImageCardBox"
                        src="/group10Image.png"
                        alt="img"
                        draggable="false" />
                    </div>
                    <div className="innerbox">
                      Akash Sanghavi Weds Riddhi Mehta
                      <p className="text-black font-extralight mt-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                  <div className="text-[#e451a5] font-bold h-[200px] md:h-[180px] md:w-[500px] w-full shadow-sm shadow-slate-500 p-4 rounded-lg MainBoxCard">
                    <div className="img">
                      <img
                        className="ImageCardBox"
                        src="/group10Image.png"
                        alt="img"
                        draggable="false" />
                    </div>
                    <div className="innerbox">
                    Jaya Weds Pawan
                    <p className="text-black font-extralight mt-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                    </div>
                  </div>
                </div>)}
            </Carousel>
          </div>
        </div>
      </section>

      <section hidden>
        <div className=" flex justify-center ">
          <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
            SUCCESS STORIES
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>

        <div className="flex justify-center pt-[3%]">
          <div className="wrapper ">
            <ul className="carousel">
              <li className="card ">
                <div className="img">
                  <img
                    src="https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
                    alt="img"
                    draggable="false"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex pt-[8%] justify-center ">
          <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
            RECENTLY JOINED PROFILE
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
        <div className="container pt-2 ps:!w-[95%] w-4/5 mx-auto">
          <div className="flex flex-wrap ">
            <div className=" px-1 w-full md:w-1/2 flex ps:w-1/2  lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg py-2 border-gray-200 border-2">
                <div className="flex justify-between px-2 py-4 md:p-4">
                  <div></div>
                  <div>
                    <img src="/e1.png" alt="des" />
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
                <p className="flex justify-center pb-4 px-4 ">
                  {" "}
                  <b className="text-center align-center px-4 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2  flex ps:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <article className="overflow-hidden rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-between px-2 py-4 md:p-4">
                  <div></div>
                  <div>
                    <img src="/e4.png" />
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
                <p className="flex justify-center pb-4 px-4 ">
                  {" "}
                  <b className="text-center align-center px-4 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2 flex ps:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ps:hidden">
              <article className="overflow-hidden rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-between px-2 py-4 md:p-4">
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
                <p className="flex justify-center pb-4 px-4 ">
                  {" "}
                  <b className="text-center align-center px-4 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2 flex ps:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ps:hidden">
              <article className="overflow-hidden rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-between px-2 py-4 md:p-4">
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
                <p className="flex justify-center pb-4 px-4 ">
                  {" "}
                  <b className="text-center align-center px-4 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2 flex ps:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
              <article className=" rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-center  py-4 md:p-4">

                  <div>
                    <img src="/e2.png" />
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
              </article>
            </div>
            <div className="px-1 w-full md:w-1/2 flex ps:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
              <article className="overflow-hidden rounded-lg shadow-lg py-2  border-gray-200 border-2">
                <div className="flex justify-between px-2 py-4 md:p-4">
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
                <p className="flex justify-center pb-4 px-4 ">
                  {" "}
                  <b className="text-center align-center px-4 ps:text-[13px]">
                    Indore, M.P., India <br />
                    Never Married
                  </b>
                </p>
              </article>
            </div>
          </div>
          <div className=" flex justify-between pt-2 pm:hidden">
            <div></div>
            <div className="flex space-x-1">
              <p className="text-[#EB2188] font-[550] ">View All </p>
              <img src="arrow.png" className="object-scale-down" />
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

      <section className="container w-5/6 ps:!w-[95%] mx-auto pt-[5%] pd:!pt-[20%] h-auto">
        <div className="flex flex-wrap justify-center items-stretch pb-10">
          <div className="w-full h-[28rem] ps:!h-[400px] pmg:h-[500px] md:w-1/2 lg:w-1/2 xl:w-1/2 order-1 md:order-none">
            <img
              src="abt.png"
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#080A52] ps:!h-[400px]  h-[28rem] pmg:h-[500px] w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 py-8 order-2 md:order-none flex flex-col justify-center">
            <div className="flex pt-[5%]  justify-center items-center">
              <p className="text-4xl text-white ps:!text-[20px] pm:text-[20px] pm:font-[550] font-semibold">
                ABOUT US
              </p>
            </div>
            <div className="pt-4  pm:!py-2  pm:!-translate-y-2 flex justify-center">
              <img src="/tb.png" className="ps:w-28" />
            </div>
            <div className="pt-4 pm:!pt-0 pm:!-translate-y-2 ps:text-[13px] flex justify-center">
              <p className="text-center text-white">
                Welcome to Jain E-Patrika, your trusted platform for finding the
                perfect life partner. We understand that the journey to finding
                a compatible life partner can be daunting and time-consuming,
                which is why we have created a centralized hub where eligible
                bachelors and bachelorettes can showcase their biodata and
                connect with potential matches within the community. We
                recognize that finding a soulmate goes beyond just matching
                biodata; it&apos;s about creating meaningful relationships that
                last a lifetime...
              </p>
            </div>
            <div className="flex justify-center py-4">
              {" "}
              <button
                className="w-48 ps:w-36   pm:py-1 pm:!text-[14px] text-lg font-bold ps:!text-[16px]  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                onClick={() => console.log("Register")}
              >
                {" "}
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className=" flex pt-[5%]  justify-center items-center">
          <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
            HOW IT WORKS
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
        <div className="w-3/5 ps:!w-[95%] mx-auto my-5 ps:-mt-[6px] align-center flex  pt-2 cover justify-center items-center ">
          <p className="text-center ps:text-[14px]">
            We aim to provide a secure and user-friendly experience, empowering
            you to connect with like-minded individuals and explore the
            possibilities of finding your ideal life partner. To get started,
            here are a few simple steps:
          </p>
        </div>

        <div className="w-full flex justify-center ">
          <div
            className="line_box stav_projektu pd:hidden"
            style={{ margin: "2% 0 " }}
          >
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2"> Register Now</h4>

                <div className="subline"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    width="20"
                    height="20"
                    className="translate-x-[8px] translate-y-[8px]"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0526 28.4211H3.15789C1.40526 28.4211 0 27.0158 0 25.2632V3.15789C0 1.40526 1.40526 0 3.15789 0H25.2632C27.0158 0 28.4211 1.40526 28.4211 3.15789V11.5737C27.9474 11.3842 27.4263 11.2737 26.9053 11.2737C26.3211 11.2737 25.7684 11.4 25.2632 11.6368V3.15789H3.15789V25.2632H11.2263L11.0526 25.4368V28.4211ZM6.31579 9.47368H22.1053V6.31579H6.31579V9.47368ZM6.31579 22.1053H14.3842L17.3684 19.1368V18.9474H6.31579V22.1053ZM6.31579 15.7895H20.7158L22.1053 14.4V12.6316H6.31579V15.7895ZM29.5263 16.7053L27.5053 14.6842C27.3429 14.5251 27.1247 14.436 26.8974 14.436C26.6701 14.436 26.4518 14.5251 26.2895 14.6842L24.7105 16.2632L27.9474 19.5L29.5263 17.9211C29.6854 17.7587 29.7746 17.5405 29.7746 17.3132C29.7746 17.0858 29.6854 16.8676 29.5263 16.7053ZM14.2105 30H17.4632L27.0158 20.4158L23.7789 17.1789L14.2105 26.7474V30Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2"> Verify by team</h4>
                <div className="subline"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    width="25"
                    height="25"
                    className="translate-x-[5px] translate-y-[4px]"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.2668 21.4833L34.2001 16.8333L34.7668 10.6833L28.7501 9.31667L25.6001 4L19.9334 6.43333L14.2668 4L11.1168 9.31667L5.1001 10.6667L5.66676 16.8333L1.6001 21.4833L5.66676 26.1333L5.1001 32.3L11.1168 33.6667L14.2668 39L19.9334 36.55L25.6001 38.9833L28.7501 33.6667L34.7668 32.3L34.2001 26.15L38.2668 21.4833ZM31.6834 23.95L30.7501 25.0333L30.8834 26.45L31.1834 29.7L28.0168 30.4167L26.6168 30.7333L25.8834 31.9667L24.2334 34.7667L21.2668 33.4833L19.9334 32.9167L18.6168 33.4833L15.6501 34.7667L14.0001 31.9833L13.2668 30.75L11.8668 30.4333L8.7001 29.7167L9.0001 26.45L9.13343 25.0333L8.2001 23.95L6.0501 21.5L8.2001 19.0333L9.13343 17.95L8.98343 16.5167L8.68343 13.2833L11.8501 12.5667L13.2501 12.25L13.9834 11.0167L15.6334 8.21667L18.6001 9.5L19.9334 10.0667L21.2501 9.5L24.2168 8.21667L25.8668 11.0167L26.6001 12.25L28.0001 12.5667L31.1668 13.2833L30.8668 16.5333L30.7334 17.95L31.6668 19.0333L33.8168 21.4833L31.6834 23.95Z"
                      fill="#EB2188"
                    />
                    <path
                      d="M16.8167 22.9167L12.9501 19.0333L10.4834 21.5167L16.8167 27.8667L29.0501 15.6L26.5834 13.1167L16.8167 22.9167Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2">
                  {" "}
                  Daily Biodata Update by Whatsapp
                </h4>

                <div className="subline"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    className="translate-x-[4px] translate-y-[6px]"
                    width={28}
                    height={25}
                    viewBox="0 0 38 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_907_500)">
                      <path
                        d="M29.4999 4.36508C28.1247 2.97597 26.4867 1.87459 24.6814 1.12516C22.8761 0.37574 20.9396 -0.00672015 18.985 8.93542e-05C10.795 8.93542e-05 4.12 6.67507 4.12 14.865C4.12 17.49 4.81 20.04 6.09999 22.29L4 30L11.875 27.93C14.05 29.115 16.495 29.745 18.985 29.745C27.1749 29.745 33.8499 23.07 33.8499 14.88C33.8499 10.9051 32.3049 7.17007 29.4999 4.36508ZM18.985 27.225C16.765 27.225 14.59 26.625 12.685 25.5L12.235 25.23L7.55499 26.46L8.79999 21.9L8.49999 21.435C7.26661 19.4655 6.6117 17.1889 6.60999 14.865C6.60999 8.05507 12.16 2.50508 18.97 2.50508C22.2699 2.50508 25.3749 3.79508 27.6999 6.13507C28.8511 7.28101 29.7635 8.64406 30.384 10.1452C31.0046 11.6463 31.321 13.2557 31.3149 14.88C31.3449 21.69 25.7949 27.225 18.985 27.225ZM25.7649 17.985C25.3899 17.805 23.5599 16.905 23.2299 16.77C22.8849 16.65 22.6449 16.59 22.3899 16.95C22.1349 17.325 21.4299 18.165 21.2199 18.405C21.0099 18.66 20.7849 18.69 20.41 18.495C20.035 18.315 18.835 17.91 17.425 16.65C16.315 15.66 15.58 14.445 15.355 14.07C15.145 13.695 15.325 13.5 15.52 13.305C15.685 13.14 15.895 12.8701 16.075 12.6601C16.255 12.4501 16.33 12.2851 16.45 12.0451C16.57 11.7901 16.51 11.5801 16.42 11.4001C16.33 11.2201 15.58 9.39006 15.28 8.64006C14.98 7.92007 14.665 8.01007 14.44 7.99507H13.72C13.465 7.99507 13.075 8.08507 12.73 8.46006C12.4 8.83506 11.44 9.73506 11.44 11.5651C11.44 13.3951 12.775 15.165 12.955 15.405C13.135 15.66 15.58 19.41 19.3 21.015C20.1849 21.405 20.8749 21.63 21.4149 21.795C22.2999 22.08 23.1099 22.035 23.7549 21.945C24.4749 21.84 25.9599 21.045 26.2599 20.175C26.5749 19.305 26.5749 18.57 26.4699 18.405C26.3649 18.24 26.1399 18.165 25.7649 17.985Z"
                        fill="#EB2188"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_907_500"
                        x={0}
                        y={0}
                        width="37.8501"
                        height={38}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_907_500"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_907_500"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2"> Every Month E-book</h4>

                <div className="subline"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    className="translate-x-[8px] translate-y-[7px]"
                    width={19}
                    height={22}
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.3125 0H2.8125C1.26562 0 0 1.26562 0 2.8125V27.1875C0 28.7344 1.26562 30 2.8125 30H25.3125C26.8594 30 28.125 28.7344 28.125 27.1875V2.8125C28.125 1.26562 26.8594 0 25.3125 0ZM24.375 26.25H3.75V3.75H24.375V26.25ZM7.5 16.875H20.625V18.75H7.5V16.875ZM7.5 20.625H20.625V22.5H7.5V20.625ZM9.375 8.4375C9.37512 8.06803 9.44802 7.70221 9.58952 7.36092C9.73102 7.01962 9.93836 6.70954 10.1997 6.44837C10.461 6.18721 10.7713 5.98008 11.1126 5.8388C11.454 5.69753 11.8199 5.62488 12.1894 5.625C12.5588 5.62512 12.9247 5.69802 13.266 5.83952C13.6073 5.98102 13.9173 6.18836 14.1785 6.4497C14.4397 6.71104 14.6468 7.02126 14.7881 7.36265C14.9293 7.70404 15.002 8.06991 15.0019 8.43937C15.0016 9.18554 14.705 9.90106 14.1772 10.4285C13.6494 10.9559 12.9337 11.2521 12.1875 11.2519C11.4413 11.2516 10.7258 10.955 10.1984 10.4272C9.67093 9.89938 9.37475 9.18367 9.375 8.4375ZM14.0625 11.25H10.3125C8.76562 11.25 7.5 12.0938 7.5 13.125V15H16.875V13.125C16.875 12.0938 15.6094 11.25 14.0625 11.25Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2">
                  {" "}
                  Profile Approval Update on Whatsapp{" "}
                </h4>

                <div className="subline"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    className="translate-x-[7px] translate-y-[6px]"
                    width={25}
                    height={22}
                    viewBox="0 0 35 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 27.1509V25.5164C1 22.4821 2.20539 19.572 4.351 17.4264C6.49661 15.2808 9.40668 14.0754 12.441 14.0754"
                      stroke="#EB2188"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.5619 14.587C23.8097 14.315 24.1116 14.0977 24.4482 13.9491C24.7848 13.8004 25.1487 13.7236 25.5167 13.7236C25.8847 13.7236 26.2486 13.8004 26.5852 13.9491C26.9218 14.0977 27.2236 14.315 27.4715 14.587C28.0027 15.1705 28.7627 15.486 29.5505 15.4484C29.9182 15.4311 30.2855 15.4909 30.6288 15.6237C30.9721 15.7566 31.284 15.9597 31.5443 16.22C31.8046 16.4803 32.0077 16.7921 32.1406 17.1355C32.2734 17.4788 32.3332 17.8461 32.3159 18.2138C32.2783 19 32.5938 19.7616 33.1756 20.2928C34.3279 21.3421 34.3279 23.1531 33.1756 24.2024C32.5938 24.7336 32.2783 25.4936 32.3159 26.2814C32.3332 26.6491 32.2734 27.0164 32.1406 27.3598C32.0077 27.7031 31.8046 28.0149 31.5443 28.2752C31.284 28.5355 30.9721 28.7386 30.6288 28.8715C30.2855 29.0044 29.9182 29.0641 29.5505 29.0469C29.162 29.0285 28.7743 29.096 28.415 29.2446C28.0556 29.3932 27.7335 29.6192 27.4715 29.9066C27.2236 30.1786 26.9218 30.3958 26.5852 30.5445C26.2486 30.6932 25.8847 30.77 25.5167 30.77C25.1487 30.77 24.7848 30.6932 24.4482 30.5445C24.1116 30.3958 23.8097 30.1786 23.5619 29.9066C23.2999 29.6192 22.9777 29.3932 22.6184 29.2446C22.259 29.096 21.8713 29.0285 21.4829 29.0469C21.1152 29.0641 20.7479 29.0044 20.4046 28.8715C20.0612 28.7386 19.7494 28.5355 19.4891 28.2752C19.2288 28.0149 19.0257 27.7031 18.8928 27.3598C18.7599 27.0164 18.7002 26.6491 18.7174 26.2814C18.7356 25.8928 18.6678 25.5051 18.5189 25.1457C18.3701 24.7863 18.1437 24.4643 17.8561 24.2024C17.5841 23.9546 17.3668 23.6527 17.2181 23.3161C17.0695 22.9795 16.9927 22.6156 16.9927 22.2476C16.9927 21.8796 17.0695 21.5157 17.2181 21.1791C17.3668 20.8425 17.5841 20.5407 17.8561 20.2928C18.4396 19.7616 18.755 19.0016 18.7174 18.2138C18.7002 17.8461 18.7599 17.4788 18.8928 17.1355C19.0257 16.7921 19.2288 16.4803 19.4891 16.22C19.7494 15.9597 20.0612 15.7566 20.4046 15.6237C20.7479 15.4909 21.1152 15.4311 21.4829 15.4484C22.2691 15.486 23.0307 15.1705 23.5619 14.587Z"
                      stroke="#EB2188"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M22.8426 22.2476L24.6241 24.0292L28.1904 20.4661M12.441 14.0755C14.175 14.0755 15.8379 13.3867 17.0639 12.1606C18.29 10.9345 18.9788 9.27164 18.9788 7.53773C18.9788 5.80382 18.29 4.14092 17.0639 2.91486C15.8379 1.68879 14.175 1 12.441 1C10.7071 1 9.04424 1.68879 7.81818 2.91486C6.59211 4.14092 5.90332 5.80382 5.90332 7.53773C5.90332 9.27164 6.59211 10.9345 7.81818 12.1606C9.04424 13.3867 10.7071 14.0755 12.441 14.0755Z"
                      stroke="#EB2188"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2"> Profile Edit and Delete</h4>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    width="21"
                    className="translate-x-[7px] translate-y-[5px]"
                    height="24"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7945 10.1507L19.8082 3.24658L22.1096 0.945206C22.7397 0.315069 23.514 0 24.4323 0C25.3507 0 26.1244 0.315069 26.7534 0.945206L29.0548 3.24658C29.6849 3.87671 30.0137 4.63726 30.0411 5.52822C30.0685 6.41918 29.7671 7.17918 29.137 7.80822L26.7945 10.1507ZM24.411 12.5753L6.9863 30H0V23.0137L17.4247 5.58904L24.411 12.5753Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="line_box stav_projektu lg:hidden"
            style={{ margin: "2% 0 " }} >
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2 ps:text-[14px]"> Register Now</h4>

                <div className="sublines"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    width="20"
                    height="20"
                    className="translate-x-[8px] translate-y-[8px]"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0526 28.4211H3.15789C1.40526 28.4211 0 27.0158 0 25.2632V3.15789C0 1.40526 1.40526 0 3.15789 0H25.2632C27.0158 0 28.4211 1.40526 28.4211 3.15789V11.5737C27.9474 11.3842 27.4263 11.2737 26.9053 11.2737C26.3211 11.2737 25.7684 11.4 25.2632 11.6368V3.15789H3.15789V25.2632H11.2263L11.0526 25.4368V28.4211ZM6.31579 9.47368H22.1053V6.31579H6.31579V9.47368ZM6.31579 22.1053H14.3842L17.3684 19.1368V18.9474H6.31579V22.1053ZM6.31579 15.7895H20.7158L22.1053 14.4V12.6316H6.31579V15.7895ZM29.5263 16.7053L27.5053 14.6842C27.3429 14.5251 27.1247 14.436 26.8974 14.436C26.6701 14.436 26.4518 14.5251 26.2895 14.6842L24.7105 16.2632L27.9474 19.5L29.5263 17.9211C29.6854 17.7587 29.7746 17.5405 29.7746 17.3132C29.7746 17.0858 29.6854 16.8676 29.5263 16.7053ZM14.2105 30H17.4632L27.0158 20.4158L23.7789 17.1789L14.2105 26.7474V30Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2"> Verify by team</h4>

                <div className="sublines"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    width="25"
                    height="25"
                    className="translate-x-[5px] translate-y-[4px]"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.2668 21.4833L34.2001 16.8333L34.7668 10.6833L28.7501 9.31667L25.6001 4L19.9334 6.43333L14.2668 4L11.1168 9.31667L5.1001 10.6667L5.66676 16.8333L1.6001 21.4833L5.66676 26.1333L5.1001 32.3L11.1168 33.6667L14.2668 39L19.9334 36.55L25.6001 38.9833L28.7501 33.6667L34.7668 32.3L34.2001 26.15L38.2668 21.4833ZM31.6834 23.95L30.7501 25.0333L30.8834 26.45L31.1834 29.7L28.0168 30.4167L26.6168 30.7333L25.8834 31.9667L24.2334 34.7667L21.2668 33.4833L19.9334 32.9167L18.6168 33.4833L15.6501 34.7667L14.0001 31.9833L13.2668 30.75L11.8668 30.4333L8.7001 29.7167L9.0001 26.45L9.13343 25.0333L8.2001 23.95L6.0501 21.5L8.2001 19.0333L9.13343 17.95L8.98343 16.5167L8.68343 13.2833L11.8501 12.5667L13.2501 12.25L13.9834 11.0167L15.6334 8.21667L18.6001 9.5L19.9334 10.0667L21.2501 9.5L24.2168 8.21667L25.8668 11.0167L26.6001 12.25L28.0001 12.5667L31.1668 13.2833L30.8668 16.5333L30.7334 17.95L31.6668 19.0333L33.8168 21.4833L31.6834 23.95Z"
                      fill="#EB2188"
                    />
                    <path
                      d="M16.8167 22.9167L12.9501 19.0333L10.4834 21.5167L16.8167 27.8667L29.0501 15.6L26.5834 13.1167L16.8167 22.9167Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2">
                  Daily Biodata Update by Whatsapp
                </h4>
                <div className="sublines"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    className="translate-x-[4px] translate-y-[6px]"
                    width={28}
                    height={25}
                    viewBox="0 0 38 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_907_500)">
                      <path
                        d="M29.4999 4.36508C28.1247 2.97597 26.4867 1.87459 24.6814 1.12516C22.8761 0.37574 20.9396 -0.00672015 18.985 8.93542e-05C10.795 8.93542e-05 4.12 6.67507 4.12 14.865C4.12 17.49 4.81 20.04 6.09999 22.29L4 30L11.875 27.93C14.05 29.115 16.495 29.745 18.985 29.745C27.1749 29.745 33.8499 23.07 33.8499 14.88C33.8499 10.9051 32.3049 7.17007 29.4999 4.36508ZM18.985 27.225C16.765 27.225 14.59 26.625 12.685 25.5L12.235 25.23L7.55499 26.46L8.79999 21.9L8.49999 21.435C7.26661 19.4655 6.6117 17.1889 6.60999 14.865C6.60999 8.05507 12.16 2.50508 18.97 2.50508C22.2699 2.50508 25.3749 3.79508 27.6999 6.13507C28.8511 7.28101 29.7635 8.64406 30.384 10.1452C31.0046 11.6463 31.321 13.2557 31.3149 14.88C31.3449 21.69 25.7949 27.225 18.985 27.225ZM25.7649 17.985C25.3899 17.805 23.5599 16.905 23.2299 16.77C22.8849 16.65 22.6449 16.59 22.3899 16.95C22.1349 17.325 21.4299 18.165 21.2199 18.405C21.0099 18.66 20.7849 18.69 20.41 18.495C20.035 18.315 18.835 17.91 17.425 16.65C16.315 15.66 15.58 14.445 15.355 14.07C15.145 13.695 15.325 13.5 15.52 13.305C15.685 13.14 15.895 12.8701 16.075 12.6601C16.255 12.4501 16.33 12.2851 16.45 12.0451C16.57 11.7901 16.51 11.5801 16.42 11.4001C16.33 11.2201 15.58 9.39006 15.28 8.64006C14.98 7.92007 14.665 8.01007 14.44 7.99507H13.72C13.465 7.99507 13.075 8.08507 12.73 8.46006C12.4 8.83506 11.44 9.73506 11.44 11.5651C11.44 13.3951 12.775 15.165 12.955 15.405C13.135 15.66 15.58 19.41 19.3 21.015C20.1849 21.405 20.8749 21.63 21.4149 21.795C22.2999 22.08 23.1099 22.035 23.7549 21.945C24.4749 21.84 25.9599 21.045 26.2599 20.175C26.5749 19.305 26.5749 18.57 26.4699 18.405C26.3649 18.24 26.1399 18.165 25.7649 17.985Z"
                        fill="#EB2188"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_907_500"
                        x={0}
                        y={0}
                        width="37.8501"
                        height={38}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_907_500"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_907_500"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>

            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2"> Every Month E-book</h4>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    className="translate-x-[8px] translate-y-[7px]"
                    width={19}
                    height={22}
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.3125 0H2.8125C1.26562 0 0 1.26562 0 2.8125V27.1875C0 28.7344 1.26562 30 2.8125 30H25.3125C26.8594 30 28.125 28.7344 28.125 27.1875V2.8125C28.125 1.26562 26.8594 0 25.3125 0ZM24.375 26.25H3.75V3.75H24.375V26.25ZM7.5 16.875H20.625V18.75H7.5V16.875ZM7.5 20.625H20.625V22.5H7.5V20.625ZM9.375 8.4375C9.37512 8.06803 9.44802 7.70221 9.58952 7.36092C9.73102 7.01962 9.93836 6.70954 10.1997 6.44837C10.461 6.18721 10.7713 5.98008 11.1126 5.8388C11.454 5.69753 11.8199 5.62488 12.1894 5.625C12.5588 5.62512 12.9247 5.69802 13.266 5.83952C13.6073 5.98102 13.9173 6.18836 14.1785 6.4497C14.4397 6.71104 14.6468 7.02126 14.7881 7.36265C14.9293 7.70404 15.002 8.06991 15.0019 8.43937C15.0016 9.18554 14.705 9.90106 14.1772 10.4285C13.6494 10.9559 12.9337 11.2521 12.1875 11.2519C11.4413 11.2516 10.7258 10.955 10.1984 10.4272C9.67093 9.89938 9.37475 9.18367 9.375 8.4375ZM14.0625 11.25H10.3125C8.76562 11.25 7.5 12.0938 7.5 13.125V15H16.875V13.125C16.875 12.0938 15.6094 11.25 14.0625 11.25Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-2">
          <div className="line_box stav_projektu lg:hidden w-[50%]"
            style={{ margin: "2% 0 " }} >
            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2">
                  {" "}
                  Profile Approval Update on Whatsapp
                </h4>

                <div className="sublines"></div>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    className="translate-x-[7px] translate-y-[6px]"
                    width={25}
                    height={22}
                    viewBox="0 0 35 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 27.1509V25.5164C1 22.4821 2.20539 19.572 4.351 17.4264C6.49661 15.2808 9.40668 14.0754 12.441 14.0754"
                      stroke="#EB2188"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.5619 14.587C23.8097 14.315 24.1116 14.0977 24.4482 13.9491C24.7848 13.8004 25.1487 13.7236 25.5167 13.7236C25.8847 13.7236 26.2486 13.8004 26.5852 13.9491C26.9218 14.0977 27.2236 14.315 27.4715 14.587C28.0027 15.1705 28.7627 15.486 29.5505 15.4484C29.9182 15.4311 30.2855 15.4909 30.6288 15.6237C30.9721 15.7566 31.284 15.9597 31.5443 16.22C31.8046 16.4803 32.0077 16.7921 32.1406 17.1355C32.2734 17.4788 32.3332 17.8461 32.3159 18.2138C32.2783 19 32.5938 19.7616 33.1756 20.2928C34.3279 21.3421 34.3279 23.1531 33.1756 24.2024C32.5938 24.7336 32.2783 25.4936 32.3159 26.2814C32.3332 26.6491 32.2734 27.0164 32.1406 27.3598C32.0077 27.7031 31.8046 28.0149 31.5443 28.2752C31.284 28.5355 30.9721 28.7386 30.6288 28.8715C30.2855 29.0044 29.9182 29.0641 29.5505 29.0469C29.162 29.0285 28.7743 29.096 28.415 29.2446C28.0556 29.3932 27.7335 29.6192 27.4715 29.9066C27.2236 30.1786 26.9218 30.3958 26.5852 30.5445C26.2486 30.6932 25.8847 30.77 25.5167 30.77C25.1487 30.77 24.7848 30.6932 24.4482 30.5445C24.1116 30.3958 23.8097 30.1786 23.5619 29.9066C23.2999 29.6192 22.9777 29.3932 22.6184 29.2446C22.259 29.096 21.8713 29.0285 21.4829 29.0469C21.1152 29.0641 20.7479 29.0044 20.4046 28.8715C20.0612 28.7386 19.7494 28.5355 19.4891 28.2752C19.2288 28.0149 19.0257 27.7031 18.8928 27.3598C18.7599 27.0164 18.7002 26.6491 18.7174 26.2814C18.7356 25.8928 18.6678 25.5051 18.5189 25.1457C18.3701 24.7863 18.1437 24.4643 17.8561 24.2024C17.5841 23.9546 17.3668 23.6527 17.2181 23.3161C17.0695 22.9795 16.9927 22.6156 16.9927 22.2476C16.9927 21.8796 17.0695 21.5157 17.2181 21.1791C17.3668 20.8425 17.5841 20.5407 17.8561 20.2928C18.4396 19.7616 18.755 19.0016 18.7174 18.2138C18.7002 17.8461 18.7599 17.4788 18.8928 17.1355C19.0257 16.7921 19.2288 16.4803 19.4891 16.22C19.7494 15.9597 20.0612 15.7566 20.4046 15.6237C20.7479 15.4909 21.1152 15.4311 21.4829 15.4484C22.2691 15.486 23.0307 15.1705 23.5619 14.587Z"
                      stroke="#EB2188"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M22.8426 22.2476L24.6241 24.0292L28.1904 20.4661M12.441 14.0755C14.175 14.0755 15.8379 13.3867 17.0639 12.1606C18.29 10.9345 18.9788 9.27164 18.9788 7.53773C18.9788 5.80382 18.29 4.14092 17.0639 2.91486C15.8379 1.68879 14.175 1 12.441 1C10.7071 1 9.04424 1.68879 7.81818 2.91486C6.59211 4.14092 5.90332 5.80382 5.90332 7.53773C5.90332 9.27164 6.59211 10.9345 7.81818 12.1606C9.04424 13.3867 10.7071 14.0755 12.441 14.0755Z"
                      stroke="#EB2188"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="text_circle sub">
              <div className="circle">
                <h4 className="translate-y-2"> Profile Edit and Delete</h4>
              </div>
              <a href="javascript:void(0)" className="tvar">
                <span
                  data-toggle="popover"
                  title="Sample text"
                  data-trigger="hover"
                  data-placement="top"
                  data-content="Ukázkový text při hover"
                >
                  <svg
                    width="21"
                    className="translate-x-[7px] translate-y-[5px]"
                    height="24"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7945 10.1507L19.8082 3.24658L22.1096 0.945206C22.7397 0.315069 23.514 0 24.4323 0C25.3507 0 26.1244 0.315069 26.7534 0.945206L29.0548 3.24658C29.6849 3.87671 30.0137 4.63726 30.0411 5.52822C30.0685 6.41918 29.7671 7.17918 29.137 7.80822L26.7945 10.1507ZM24.411 12.5753L6.9863 30H0V23.0137L17.4247 5.58904L24.411 12.5753Z"
                      fill="#EB2188"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 ps:pt-[10%] ">
          {" "}
          <button
            className="w-48  pm:py-1 pm:!text-[14px] text-lg font-bold ps:!text-[16px] ps:w-36  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
            onClick={() => console.log("Register")}
          >
            Register Now
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
