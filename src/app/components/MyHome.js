"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Contact from "./Contact";
import { ContextData } from "@/context/Context";

const MyHome = ({ name }) => {
  const { myame, setMyName } = ContextData();
  useEffect(() => {
    setMyName(name.toString());
  }, []);
  // console.log(myame, "fetched name");
  return (
    <div>
      <Hero  />
      <Experience />
      {/* <TechndWork/> */}
      <Contact />
    </div>
  );
};

export default MyHome;
