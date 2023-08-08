import React from "react";
import { Satisfy } from "next/font/google";
import TechndWork from "./TechndWork";
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const Experience = () => {
  return (
    <>
      <div className="exp-section py-8 bg-slate-900 text-white">
        <div className="container my-4">
          <div className="row flex justify-center items-center mx-auto my-8">
            <div className="w-1/2 text-center">
              <h1 className={`${satisfy.className} text-7xl  text-gray-700 -skew-y-6`}>
                Experience
              </h1>
              <div className="flex justify-center items-center">
                 <div className="mx-4 mb-2">
                <h2 className="text-green-500 font-semibold">
                  <span className="text-5xl">3+ </span>{" "}
                </h2>
                <p>years of experience</p>
              </div>
              <div>
                <p><span className="text-green-500 text-5xl font-semibold">12</span>  </p>
                <p>projects</p>
              </div>
              </div>
             
            </div>
            <div className="w-1/2">
              <h1 className="text-gray-500 font-bold my-2 capitalize">Problem Solver</h1>
              <p className="capitalize my-2 text-xl ">
                i enjoying solving problems with clean scalable solutions.i have
                genuine passion of aspiring dvelopment.{" "}
              </p>
              <p className=" text-gray-500 capitalize font-semibold">
                i have strong foundation in frontend development wit
                reactJs,NextJs ,also have experience in cloud operations with
                devops mdthodology.
              </p>
            </div>
          </div>
          <TechndWork/>
        </div>
      </div>
    </>
  );
};

export default Experience;
