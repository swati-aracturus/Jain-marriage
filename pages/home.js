"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
      <div class="containeri">
        <div class="pd-carousel " id="pdCarousel1">
          <input
            type="radio"
            id="pdCarouselItem1"
            class="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem2"
            class="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem3"
            class="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem4"
            class="pd-carousel__input"
            name="pdCarousel"
          />
          <input
            type="radio"
            id="pdCarouselItem5"
            class="pd-carousel__input"
            name="pdCarousel"
          />

          <ul class="pd-carousel__items">
            <li class="pd-carousel__item">
              <label for="pdCarouselItem5" class="pd-carousel__prev"></label>
              <img src="/banner.png" />
              <div class="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but we've
                    made it simpler.
                  </h1>
                </div>
              </div>
              <label for="pdCarouselItem2" class="pd-carousel__next"></label>
            </li>

            <li class="pd-carousel__item">
              <label for="pdCarouselItem1" class="pd-carousel__prev"></label>
              <img src="/banner.png" />
              <div class="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but we've
                    made it simpler.
                  </h1>
                </div>
              </div>
              <label for="pdCarouselItem3" class="pd-carousel__next"></label>
            </li>

            <li class="pd-carousel__item">
              <label for="pdCarouselItem2" class="pd-carousel__prev"></label>
              <img src="/banner.png" />
              <div class="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but we've
                    made it simpler.
                  </h1>
                </div>
              </div>
              <label for="pdCarouselItem4" class="pd-carousel__next"></label>
            </li>

            <li class="pd-carousel__item">
              <label for="pdCarouselItem3" class="pd-carousel__prev"></label>
              <img src="/banner.png" />
              <div class="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but we've
                    made it simpler.
                  </h1>
                </div>
              </div>
              <label for="pdCarouselItem5" class="pd-carousel__next"></label>
            </li>

            <li class="pd-carousel__item">
              <label for="pdCarouselItem4" class="pd-carousel__prev"></label>
              <img src="/banner.png" />
              <div class="pd-carousel__item-contents flex justify-center items-center  text-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4">
                  <h1 className=" texty font-semibold text-white font-serif italic">
                    Discovering your ideal partner can be a challenge, but we've
                    made it simpler.
                  </h1>
                </div>
              </div>
              <label for="pdCarouselItem1" class="pd-carousel__next"></label>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-between">
            <div></div>
            <div>
              <ul class="pd-carousel__selector_items">
                <li class="pd-carousel__selector_item">
                  <label
                    for="pdCarouselItem1"
                    class="pd-carousel__selector"
                  ></label>
                  <label
                    for="pdCarouselItem1"
                    class="pd-carousel__selector pd-carousel__selector_on"
                  ></label>
                </li>
                <li class="pd-carousel__selector_item">
                  <label
                    for="pdCarouselItem2"
                    class="pd-carousel__selector"
                  ></label>
                </li>
                <li class="pd-carousel__selector_item">
                  <label
                    for="pdCarouselItem3"
                    class="pd-carousel__selector"
                  ></label>
                </li>
                <li class="pd-carousel__selector_item">
                  <label
                    for="pdCarouselItem4"
                    class="pd-carousel__selector"
                  ></label>
                </li>
                <li class="pd-carousel__selector_item">
                  <label
                    for="pdCarouselItem5"
                    class="pd-carousel__selector"
                  ></label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="login">
        <div class=" flex pt-[5%]  justify-center items-center">
          <p className="text-4xl ps:!text-[12px] pm:text-[20px] pm:font-[550] font-semibold ">
            REGISTER OR LOG IN NOW
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
        <div className="w-2/3 mx-auto my-5 ps:my-3 align-center flex space-x-2 pt-2 cover justify-center items-center">
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
        <div class=" flex justify-center ">
          <p className="text-4xl ps:!text-[12px] pm:text-[20px] pm:font-[550] font-semibold ">
            SUCCESS STORIES
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
        <div className="flex justify-center pt-[3%]">
          <div class="wrapper ">
            <i id="left" class="fa-solid fa-angle-left pm:hidden">
              ◢
            </i>
            <div className="flex flex-col md:flex-row justify-between">
  <div className="text-[#e451a5] font-bold h-[220px] md:h-[180px] md:w-[500px] w-full shadow-sm shadow-slate-500 p-4 md:mr-20 mb-4 md:mb-0 rounded-lg">
    Akash Sanghavi Weds Riddhi Mehta
    <p className="text-black font-extralight mt-5">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
    </p>
  </div>
  <div className="text-[#e451a5] font-bold h-[200px] md:h-[180px] md:w-[500px] w-full shadow-sm shadow-slate-500 p-4 rounded-lg">
    Jaya Weds Pawan
    <p className="text-black font-extralight mt-5">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
    </p>
  </div>
</div>

<div className="flex justify-center md:mt-20 mt-7"> 
  <p className="text-4xl ps:!text-[12px] pm:text-[20px] text-[30px] pm:font-[550] font-semibold "> 
  RECENTLY JOIN PROFILE 
  </p>
  </div>

  <div>
  <div className="flex  md:!pt-6 md:-translate-y-2 justify-center">
  <img src="/tb.png" className="md:w-60 w:20" />
</div>
<div className="flex justify-center pt-[3%]">
  <div className="wrapper">
    <i id="left" className="fa-solid fa-angle-left md:hidden">◢</i>
  </div>
</div>

  </div>
  

            <ul class="carousel md:mt-20 mt-7">
              <li class="card ">
                <div class="img">
                  <img
                    src="https://t4.ftcdn.net/jpg/03/50/40/93/240_F_350409330_2bqhjowfBmrqEia5U8lBsGrvD7h8EIo6.jpg"
                    alt="img"
                    draggable="false"
                  />
                </div>
                <h2>Blanche Pearson</h2>
                <span>Sales Manager</span>
              </li>
              <li class="card">
                <div class="img">
                  <img
                    src="https://t3.ftcdn.net/jpg/00/57/55/40/240_F_57554079_g3LhdDR5C0f2mc2ZxjFgsbb6WMqouUwQ.jpg"
                    alt="img"
                    draggable="false"
                  />
                </div>
                <h2>Joenas Brauers</h2>
                <span>Web Developer</span>
              </li>
              <li class="card">
                <div class="img">
                  <img
                    src="https://t3.ftcdn.net/jpg/06/15/91/36/240_F_615913669_1GvdMMT0H44Z4owh9SCYsml6mCcy8g3G.jpg"
                    alt="img"
                    draggable="false"
                  />
                </div>
                <h2>Lariach French</h2>
                <span>Online Teacher</span>
              </li>
              <li class="card">
                <div class="img">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/60/67/80/240_F_260678009_gV1PBTotxDIwTngnmn3nYqWshbznYf24.jpg"
                    alt="img"
                    draggable="false"
                  />
                </div>
                <h2>James Khosravi</h2>
                <span>Freelancer</span>
              </li>
              <li class="card">
                <div class="img">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/99/91/62/240_F_399916297_1JwXdmC6ViCG4YhZuhLVz7xfuZhfHCY9.jpg"
                    alt="img"
                    draggable="false"
                  />
                </div>
                <h2>Kristina Zasiadko</h2>
                <span>Bank Manager</span>
              </li>

              <li class="card">
                <div class="img">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/81/01/43/240_F_681014359_dyMjwn4JYLtY985umiBOeytmLmVxEjC0.jpg"
                    alt="img"
                    draggable="false"
                  />
                </div>
                <h2>Donald Horton</h2>
                <span>App Designer</span>
              </li>
            </ul>
            <i id="right" class="fa-solid fa-angle-right pm:hidden">
              {" "}
              ◢{" "}
            </i>
          </div>
        </div>
      </section>
      
      <div className="flex justify-center items-center bg-white mt-10 md:ml-[40%]">
  <div className="bg-blue-900 h-[400px] w-full max-w-[600px] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
    <div className="text-white text-2xl sm:text-3xl text-center mb-4">
      ABOUT US
    </div>
    <div className="flex flex-col items-center">
      <div className="flex pt-2 md:pt-0 md:-translate-y-2 justify-center">
        <img src="/tb.png" className="w-20 sm:w-28 md:w-40" />
      </div>
      <div className="flex justify-center pt-3">
        <div className="wrapper">
          <i id="left" className="fa-solid fa-angle-left md:hidden">◢</i>
        </div>
      </div>
    </div>
    <p className="text-white mt-4 sm:mt-8 text-justify text-sm sm:text-base">
      Welcome to Jain E-Patrika, your trusted platform for finding the perfect life partner. We understand that the journey to finding a compatible life partner can be daunting and time-consuming, which is why we have created a centralized hub where eligible bachelors and bachelorettes can showcase their biodata and connect with potential matches within the community. We recognize that finding a soulmate goes beyond just matching biodata: it about creating meaningful relationships that last a lifetime.
    </p>
  <button className="bg-[#b02596] text-white m-1 md:m-0 md:p-2 px-4 md:px-8 md:text-xl text-20px rounded-lg md:mt-2">
    Read more
  </button>
  </div>
</div>



    </>
  );
};

export default Home;
