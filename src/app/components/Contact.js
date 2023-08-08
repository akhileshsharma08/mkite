import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { Oswald, Satisfy } from "next/font/google";
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <div className="bg-slate-950 text-white px-12 py-20">
        <h1 className={`${satisfy.className} text-center py-8 text-8xl text-gray-600 `}>Enquiry</h1>
      <div className="   flex justify-around items-center">
        <div className="flex justify-center items-center w-1/4">
          <h1 className={`${oswald.className} text-8xl dont-bold text-zinc-100`}>Lets Connect . </h1>
          <h1 className=" text-4xl font-extrabold text-green-500">
            <BsArrowRight />
          </h1>
        </div>
        <div className="3/4 ">
          <div className="form flex justify-center items-center">
            <form action="">
              <div className="w-3/4 mx-auto mb-4">
                <input
                  type="text"
                  name="name"
                  className="  border-b-2 bg-transparent text-green-500 border-gray-600 outline-none outline-0 text-xl py-4 px-1"
                  placeholder=" Enter Name"
                />
              </div>
              <div className="w-3/4 mx-auto mb-4">
                <input
                  type="email"
                  name="emai"
                  className="  border-b-2 bg-transparent text-green-500 border-gray-600 outline-none outline-0 text-xl py-4 px-1"
                  placeholder=" Enter Email"
                />
              </div>
              <div className="w-3/4 mx-auto mb-4">
                <textarea
                  type="Mesaage" cols={24} 
                  className="  border-b-2 bg-transparent text-green-500 border-gray-600 outline-none outline-0 text-xl py-4 px-1 "
                  name="name"
                  placeholder=" Enter Message"
                />
              </div>
              <div className="w-3/4 mx-auto mb-4">
                <Link href={'/'} className="text-green-500 text-2xl px-4 py-2 rounded  flex justify-start items-center">Send <span className="px-4"> <BsArrowRight/></span> </Link>
                </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
