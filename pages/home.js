import Image from "next/image";
import Link from "next/link";

import React, { useState, useEffect } from "react";

const Home = () => {
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
        <div class=" flex pt-[5%] justify-center">
          <p className="text-4xl ps:!text-[12px] pm:text-[20px] pm:font-[550] font-semibold ">
            REGISTER OR LOG IN NOW
          </p>
        </div>
        <div className="flex pt-4 pm:!pt-0 pm:-translate-y-2 justify-center">
          <img src="/tb.png" className="ps:w-28 " />
        </div>
        <div className=" ">

        </div>
      </section>
    </>
  );
};

export default Home;
