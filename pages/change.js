'use client'
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';



export default function Dashin() {

  return (
    <main>
     
      <div className="desktop bg-gradient-to-r from-cyan-400 to-sky-400">
        <div className="flex w-full min-h-screen  justify-center items-center">
          <div className="hidden lg:block w-2/3 ">
            <div
              className="rounded-lg m-12 "
              style={{ width: "80%" }}
            >
              <div className="in" style={{ paddingTop: '20%' }} >
                <div className=" flex justify-center flex-center ">
                 
                
                  <div className="font-bold text-slate-200 text-6xl pb-4 ">
                    Hello, Igniculuss
                  </div>
                  &nbsp;
                  <svg width="66" height="82" viewBox="0 0 66 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 41C18.2254 41 33 22.6437 33 0C33 22.6437 47.7746 41 66 41C47.7746 41 33 59.3563 33 82C33 59.3563 18.2254 41 0 41Z" fill="white" />
                  </svg>

                </div>
                <div className=" flex justify-center flex-center ">
                  <div className="text-base leading-6 w-[550px] pt-2  text-slate-200" style={{ paddingBottom: '20%' }}>
                    Skip repetitive and manual sales-marketing tasks. Get highly
                    productive through automation and save tons of time!{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-12 lg:w-1/3 flex items-center bg-white justify-center ">
            <div className="px-4 sm:px-0 w-full max-w-sm">
              <a href="" className="mt-12 flex items-center gap-1">
                <svg
                  width="32"
                  height="40"
                  viewBox="0 0 32 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z"
                    fill="#282828"
                  />
                </svg>
                <span className="text-slate-950 font-bold text-2xl py-6">
                  Verify Your Sign-up
                </span>
              </a>
              <div className="text-slate-800">
                Enter the one-time password sent to your Mobile Number.
              </div>
              <div className="mx-auto">
                <form action="" className="grid space-y-6">
                  <div className="flex justify-between mt-12 py-6">
                    <div className="text-left  text-slate-950 font-bold">
                      753219846
                    </div>
                   
                     
                      <Link className="text-right text-cyan-600 no-underline" href="/verify">   Change</Link>
                      </div>
                
                
                  <input
                    type="otp" required
                    className="h-10 rounded-md px-3  border text-xs focus:outline-none"
                    style={{ margin: 0, border: "1px solid #D5D5D5" }}
                    placeholder="XXX XXX"
                  />
                  <div className="flex justify-between m-0 pb-12">
                    <div className="text-left text-slate-950 ">
                      Resend
                    </div>
                    <a>
                      {" "}
                      <div className="text-right text-cyan-600 no-underline">
                        Choose Other Way
                      </div>
                    </a>
                  </div>
                  <Link href="/dashboard-in">
                    <button className="h-11 w-96 font-medium bg-cyan-400 hover:bg-cyan-500 text-base text-gray-100  rounded-md">
                      Submit
                    </button>
                  </Link>
                  <div class="relative text-center py-4">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative inline-block px-4 bg-white text-slate-800">
                      Or log in with
                    </div>
                  </div>
                  <Link href="/google">
                    <button
                      className="h-11 w-96 flex items-center justify-center font-medium  text-gray-700 text-medium rounded-md"
                      style={{ border: "1px solid #D5D5D5" }}
                    >
                      <svg
                        width="16px"
                        viewBox="-3 0 262 262"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                      >
                        <path
                          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                          fill="#4285F4"
                        />
                        <path
                          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                          fill="#34A853"
                        />
                        <path
                          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                          fill="#FBBC05"
                        />
                        <path
                          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                          fill="#EB4335"
                        />
                      </svg>
                      &nbsp; Continue with Google
                    </button>
                  </Link>
                  <div class="text-center text-xs pb-12 text-gray-600">
                    Already have an Account?
                    <Link
                      class="font-semibold  text-cyan-700 no-underline"
                      href="/"
                    >
                      &nbsp; Log in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
