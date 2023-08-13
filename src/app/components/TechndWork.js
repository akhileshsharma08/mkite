import React from "react";

import { Satisfy } from "next/font/google";
import { motion } from "framer-motion";
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const TechndWork = () => {
  return (
    <div>
      <div className="container py-12 mx-auto px-4">
        <div className="row flex justify-center md:flex-row flex-col-reverse items-center ">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 50,
              duration: 2,
              delay: 4,
            }} 
            className="1/2 flex justify-center items-center"
            data-aos="fade-up" data-aos-delay="500">
            <ul className=" md:w-1/2 w-full flex justify-center items-center flex-wrap">
              <div   data-aos="fade-up" data-aos-delay="500" className="w-32 m-3 h-32  text-center flex justify-center items-center capitalize font-bold outline outline-offset-4 outline-green-500 rounded-full bg-gray-800 text-green-500 hover:bg-green-500 hover:text-white p-4 ">
                front-end
              </div>
              <div   data-aos="fade-up" data-aos-delay="600" className="w-32 m-3 h-32  text-center flex justify-center items-center capitalize font-bold outline outline-offset-4 outline-green-500 rounded-full bg-gray-800 text-green-500 hover:bg-green-500 hover:text-white p-4 ">
                back-end
              </div>
              <div   data-aos="fade-up" data-aos-delay="700" className="w-32 m-3 h-32  text-center flex justify-center items-center capitalize font-bold outline outline-offset-4 outline-green-500 rounded-full bg-gray-800 text-green-500 hover:bg-green-500 hover:text-white p-4 ">
                full stack
              </div>
              <div   data-aos="fade-up" data-aos-delay="800" className="w-32 m-3 h-32  text-center flex justify-center items-center capitalize font-bold outline outline-offset-4 outline-green-500 rounded-full bg-gray-800 text-green-500 hover:bg-green-500 hover:text-white p-4 ">
                cloud
              </div>
            </ul>
          </motion.div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="md:w-1/2 w-full py-4 md:mb-0 mb-4 md:p-0 px-4 bg-yellow4 "
          >
            <h1
              className={`${satisfy.className} text-7xl text-center  mt-4 text-gray-700 -skew-y-6`}
            >
              My expertise
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechndWork;
