import React, { useEffect, useState } from "react";
import { TechIcons } from "./Techicons";
import { defaultSkills } from "./Techicons";

const Skills = () => {
  const [mycategory, setMyCategory] = useState("");
  console.log(mycategory, "cate");
  // console.log(defaultSkills[0], "default");
  const [techskill, setTechskill] = useState([]);

  useEffect(() => {
    const updatedSkill = TechIcons.filter((item) => {
      return item.category == `${mycategory}`;
    });
    setTechskill(updatedSkill);
    console.log(techskill, "techskill");
  }, [mycategory]);

  return (
    <div className="bg-slate-900  py-16">
      <div className="mainbox flex justify-center items-center flex-col">
        <div className="md:w-1/2 w-full my-4">
          <ul className="text-white flex justify-center md:flex-row  items-center flex-wrap mb-4">
            <li
              data-aos="fade-up"
              data-aos-delay="500"
              onClick={() => {
                setMyCategory("frontend");
              }}
              className="bg-gray-700  motion-safe:animate-spin text-center px-2 flex  rounded-full  font-bold justify-center items-center w-32 h-32 py-1 mb-4 mx-4 border  hover:outline-green-500 hover:bg-green-500 hover:text-white  "
            >
              Front-End
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="600"
              onClick={() => {
                setMyCategory("backend");
              }}
              className="bg-gray-700 text-center px-2 flex  rounded-full font-bold justify-center items-center w-32 h-32 py-1 mb-4 mx-4 border  hover:outline-green-500 hover:bg-green-500 hover:text-white  "
            >
              Back-End
            </li>
            {/* <li onClick={()=>{setMyCategory("fullstack")}} className='bg-gray-700 text-center px-2 flex  rounded-full  font-bold justify-center items-center w-32 h-32  w-32 h-32py-1 mb-4 mx-4 border  hover:outline-green-500 hover:bg-green-500 hover:text-white  '>Full Stack</li> */}
            <li
              data-aos="fade-up"
              data-aos-delay="700"
              onClick={() => {
                setMyCategory("other");
              }}
              className="bg-gray-700 text-center px-2 flex  rounded-full  font-bold justify-center items-center w-32 h-32 py-1 mb-4 mx-4 border  hover:outline-green-500 hover:bg-green-500 hover:text-white  "
            >
              Other
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="md:w-1/2 w-full bg-gray-800 py-5 rounded "
        >
          <div className="skillbox flex justify-center items-center flex-wrap">
            {(!techskill ? defaultSkills : techskill).map((ele) => (
              <div className="box mx-2" key={ele.id}>
                <div className="flex mb-2">
                  <img src={ele.imgUrl} alt={ele.name} width={70} height={70} />
                </div>
              </div>
            ))}
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
