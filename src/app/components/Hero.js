"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import mypic from "../../../public/assets/mainimg.png";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react"

import Loader from "./Loader";
import { motion } from "framer-motion";

import {
  BsArrowRight,
  BsArrowDownCircle,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import {
  Satisfy,
  Oswald,
  Audiowide,
  Share_Tech_Mono,
  Chakra_Petch,
} from "next/font/google";
import { Tilt } from "react-tilt";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: "400",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});
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

// ============ canvas model ==========================

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, "/assets/avatar.glb");
//   return (
//     <>
//       <primitive object={gltf.scene} scale={9}  />
//     </>
//   );
// };

// ============ canvas model end ==========================


const Hero = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);



 

  if (isLoading) {
    return <Loader />;
  }
  return (
    <motion.div
      initial={{ y: 950 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.26, 0.32, 0.9], duration: 0.1 }}
      className="pt-20 pb-20 bg-slate-950 text-white min-h-screen"
    >
      <div className="container mx-auto ">
        <div className="row flex md:flex-row flex-col justify-center items-center py-8 px-8">
          <div className="headingContent md:w-1/2 w-full flex flex-col justify-center items-center  px-8">
            <div className="content">
              <h1 className=" text-2xl text-gray-400 mx-2 my-2 uppercase">
                hi there{" "}
              </h1>
              <h2 className={`md:text-8xl text-6xl font-bold my-4 uppercase overflow-hidden ${stm.className}`}>
               <span className="firstname">Akhilesh</span>  <span className="lastname text-green-500 stroke-current bg-transparent">sharma</span>{" "}
              </h2>
              <h1 className="text-2xl capitalize outline-2 bg-transparent outline-offset-2 ">
                Experience Developer and Cloud Engineer{" "}
              </h1>
              <p className="text-zinc-500 mx-2 my-4 capitalize">
                a professional developer and cloud engineer with 2+ yrs of
                experience{" "}
              </p>
            </div>
            <button className="button px-8 py-4 m-2 bg-slate-800 outline my-4 outline-white hover:outline-green-500 hover:bg-slate-900 outline-offset-2">know more</button>
            <div className="social">
              <ul className="list-none flex justify-center items-center">
                <Link href={'/'}>
                  <li className="text-3xl text-green-500 hover:text-green-600 mx-2" >
                    <BsLinkedin />
                  </li>{" "}
                </Link>
                <Link href={'/'}>
                  <li className="text-3xl text-green-500 hover:text-green-600 mx-2" >
                    <BsGithub />
                  </li>{" "}
                </Link>
                <Link href={'/'}>
                  <li className="text-3xl text-green-500 hover:text-green-600 mx-2" >
                    <MdEmail />
                  </li>{" "}
                </Link>
              </ul>
            </div>
          </div>
          {/* img section */}
          <div className="Imagecontent2 flex justify-between items-center md:mt-0 mt-6">
            <div>
              <Tilt
                options={defaultOptions}
                style={{ height: 380, width: 350 }}
              >
                <div className="imgbox border-2 border-zinc-500 p-2 shadow-lg rounded-full">
                  <Image
                    src={mypic}
                    alt="my img "
                    className="border border-zinc-600 rounded-full"
                    width={400}
                    height={400}
                  />
                </div>
              </Tilt>
            </div>
            
          </div>
        </div>
        <h1 className=" mynametext md:text-8xl animate-pulse text-6xl text-zinc-600 text-center justify-items-stretch hover:text-green-500 hover:cursor-pointer  tracking-widest">
          AKHILESH SHARMA
        </h1>
      </div>
      <div className=" flex justify-center mt-6 mb-4">
        <h1 className="text-3xl animate-bounce text-center text-green-500">
          <BsArrowDownCircle />
        </h1>
      </div>

     

{/*========= canvas model ============ */}
    {/* <div className="globe ">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [20, 2, 0.6], fov: 70 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model  />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls  />
        </Canvas>
    </div> */}

{/* ====== canvas end  ============== */}

</motion.div>
  );
};

// const Model = ({ gltfPath }) => {
//   const gltf = useLoader(GLTFLoader, gltfPath);

//   return <primitive object={gltf.scene} />;
// };

export default Hero;
