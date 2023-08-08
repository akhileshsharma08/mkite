'use client'
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
// import Logo from '../../public/assets/Logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 mb-10  ">
        <div className=" m-auto flex justify-between items-center p-2 text-zinc-100 backdrop-filter  bg-slate-950 border-b-2 border-green-500 backdrop-blur-md  shadow-lg ">
          <Link href="/">
            {/* <Image src={Logo} width={120} height={20} alt=" main logo" className="ml-4" /> */}
            <h1>Monster Brains</h1>
          </Link>
          <ul className="hidden sm:flex ">
            <Link href="/" className="hover:text-green-500">
              {" "}
              <li className="p-4 rounded-md text-zinc-100 hover:text-green-500  hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/products" className="hover:text-green-500">
              <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
                Products
              </li>
            </Link>
            <Link href="/services" className="hover:text-green-500">
              {" "}
              <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
                Services
              </li>
            </Link>
            <Link href="/about" className="hover:text-green-500">
              {" "}
              <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/contact" className="hover:text-green-500">
              <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
                Contact
              </li>
            </Link>

            {/* <div className="flex items-center">
            <Link className="inline-block mr-4 text-sm  text-black  hover:cursor-pointer hover:text-green-500" href="#"> Log In</Link>
            <Link className="relative group inline-block py-3 px-4 text-sm  text-black hover:text-white border border-black-200 rounded-md overflow-hidden transition duration-300" href="/">
              <div className="absolute top-0 right-full w-full h-full bg-red-500 hover:text-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative">Register</span>
            </Link>
          </div> */}
          </ul>

          {/* Mobile Button */}
          <div onClick={HandleNav} className="block sm:hidden z-10">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
              <Link href="/">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Home
                </li>
              </Link>
              <Link href="/products">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Products
                </li>
              </Link>
              <Link href="/about">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  About
                </li>
              </Link>
              <Link href="/contact">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Contact
                </li>
              </Link>

              {/* <Link href='/'> <li onClick={HandleNav} className=' text-4xl text-white hover:text-zinc-100 p-2 '>
                Log in
              </li></Link> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
