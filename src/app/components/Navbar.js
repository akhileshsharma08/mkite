'use client'
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
// import Logo from '../../public/assets/Logo.png'
import {SiGooglehome} from 'react-icons/si'
import {TbCertificate2} from 'react-icons/tb'
import {MdOutlineContacts} from 'react-icons/md'

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const HandleNav = () => {
//     setNav(!nav);
//   };
//   return (
//     <>
//       <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 mb-10  ">
//         <div className=" m-auto flex justify-between items-center p-2 text-zinc-100 backdrop-filter  bg-slate-950 border-b-2 border-green-500 backdrop-blur-md  shadow-lg ">
//           <Link href="/">
//             <h1>Monster Brains</h1>
//           </Link>
//           <ul className="hidden sm:flex ">
//             <Link href="/" className="hover:text-green-500">
//               {" "}
//               <li className="p-4 rounded-md text-zinc-100 hover:text-green-500  hover:cursor-pointer">
//                 Home
//               </li>
//             </Link>
//             <Link href="/products" className="hover:text-green-500">
//               <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
//                 Products
//               </li>
//             </Link>
//             <Link href="/services" className="hover:text-green-500">
//               {" "}
//               <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
//                 Services
//               </li>
//             </Link>
//             <Link href="/about" className="hover:text-green-500">
//               {" "}
//               <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
//                 About
//               </li>
//             </Link>
//             <Link href="/contact" className="hover:text-green-500">
//               <li className="p-4 rounded-lg text-zinc-100 hover:text-green-500  hover:cursor-pointer">
//                 Contact
//               </li>
//             </Link>
// </ul>
         
//           <div onClick={HandleNav} className="block sm:hidden z-10">
//             {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//           </div>
//           <div
//             className={
//               nav
//                 ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
//                 : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
//             }
//           >
//             <ul>
//               <Link href="/">
//                 {" "}
//                 <li
//                   onClick={HandleNav}
//                   className=" text-4xl text-white hover:text-zinc-100 p-2 "
//                 >
//                   Home
//                 </li>
//               </Link>
//               <Link href="/products">
//                 {" "}
//                 <li
//                   onClick={HandleNav}
//                   className=" text-4xl text-white hover:text-zinc-100 p-2 "
//                 >
//                   Products
//                 </li>
//               </Link>
//               <Link href="/about">
//                 {" "}
//                 <li
//                   onClick={HandleNav}
//                   className=" text-4xl text-white hover:text-zinc-100 p-2 "
//                 >
//                   About
//                 </li>
//               </Link>
//               <Link href="/contact">
//                 {" "}
//                 <li
//                   onClick={HandleNav}
//                   className=" text-4xl text-white hover:text-zinc-100 p-2 "
//                 >
//                   Contact
//                 </li>
//               </Link>

             
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


const Navbar =()=>{
  return(
    <header className="text-white  body-font bg-slate-950 ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-2xl text-white hover:text-green-500">Akhilesh</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center font-normal justify-center text-2xl">
      <Link href={'/'} className="mr-5 hover:text-green-500"><SiGooglehome/></Link>
      <Link href={'/'} className="mr-5 hover:text-green-500"><TbCertificate2/></Link>
      <Link href={'/'} className="mr-5 hover:text-green-500"><MdOutlineContacts/></Link>
    </nav>
   
  </div>
</header>
  )
}

export default Navbar;
