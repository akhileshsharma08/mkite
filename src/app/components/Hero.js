"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import mypic from "../../../public/assets/myimg.png";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { ContextData } from "@/context/Context";
import { BsArrowDownCircle, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import {
  
  Audiowide,
  Share_Tech_Mono,
} from "next/font/google";
import { Tilt } from "react-tilt";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});
const stm = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 900, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 100, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.105,.195,.150,.200)",
};


const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { empData, loading,myname } = ContextData();
  const [sorted, setSorted] = useState([]);

console.log(myname,"fetched on hero using context")
console.log(empData,"empdata fetched on hero using context")

  useEffect(() => {
    
    let updatedItem = empData.filter((curElement) => {
      console.log(curElement.name,"curr")
      return curElement.name === `nitin`;
    });
    setSorted(updatedItem)
    console.log(sorted,"sorted")
    console.log(updatedItem,"updated")
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration:0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <motion.div
      initial={{ y: 950 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.26, 0.32, 0.9], duration: 0.1 }}
      className=" pb-20 bg-slate-950 text-white min-h-screen" id="home"
    >
      <div className="container mx-auto ">
        <div className="row flex md:flex-row flex-col justify-between items-center py-8 px-8">
          <div className="headingContent md:w-1/2 w-full flex flex-col justify-center items-center  px-8">
            <div className="content">
              <h1 className=" text-2xl text-gray-400 mx-2 my-2 uppercase">
                hi there
              </h1>
              <motion.h2
              initial={{
                x: -100,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                scale: 1,
              }}
              transition={{ duration: 0.5 }}
                className={`md:text-8xl text-6xl font-bold my-4 uppercase overflow-hidden ${audiowide.className}`}
              >
                <span className="firstname">Akhilesh</span>{" "}
                <span className="lastname text-green-500 stroke-current bg-transparent">
                  sharma
                </span>{" "}
              </motion.h2>
              <h1 className="text-2xl capitalize outline-2 bg-transparent outline-offset-2 ">
                Experience Developer and Cloud Engineer{" "}
              </h1>
              <p className="text-zinc-500 mx-2 my-4 capitalize">
                a professional developer and cloud engineer with 2+ yrs of
                experience{" "}
              </p>
            </div>
            <div className="social">
              <ul className="list-none flex justify-center items-center">
                <Link href={"/"}>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                
                  className="text-3xl text-green-500 hover:text-green-600 mx-2">
                    <BsLinkedin />
                  </motion.li>{" "}
                </Link>
                <Link href={"/"}>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 className="text-3xl text-green-500 hover:text-green-600 mx-2">
                    <BsGithub />
                  </motion.li>{" "}
                </Link>
                <Link href={"/"}>
                  <motion.li 
                  
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-3xl text-green-500 hover:text-green-600 mx-2">
                    <MdEmail />
                  </motion.li>{" "}
                </Link>
              </ul>
            </div>
          </div>
          {/* img section */}
          <motion.div
          
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className={`${container}  Imagecontent2 flex justify-between items-center md:mt-0 mt-6`}>
            <div>
              <Tilt
                options={defaultOptions}
                style={{ height: 380, width: 350 }}
              >
                <div className="imgbox border-2 border-zinc-500 p-2 shadow-lg ">
                  <Image
                    src={mypic}
                    alt="my img "
                    className="border border-zinc-600 "
                    width={400}
                    height={400}
                  />
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
        <h1 className=" mynametext md:text-8xl animate-pulse text-6xl text-zinc-600 text-center justify-items-stretch hover:text-green-500 hover:cursor-pointer  tracking-widest">
          AKHILESH SHARMA
        </h1>
      </div>
      <div className=" flex justify-center mt-6 mb-4">
       <Link to="experience"
            spy={true}
            smooth={true}
            duration={500}>
       <h1 className="text-3xl animate-bounce text-center text-green-500">
          <BsArrowDownCircle />
        </h1>
       </Link> 
      </div>

   
    </motion.div>
  );
};


export default Hero;
