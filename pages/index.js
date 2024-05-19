"use server";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@components/header";
import  Home from "../pages/home"

export default function IndexPage() {
 return (
    <>
     <Navbar/>
<Home/>
    </>
  );
}
