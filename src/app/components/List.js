"use client";

// import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Hero from "./Hero";
import { ContextData } from "@/context/Context";

const List = () => {
    const { empData, loading } = ContextData();

    return (
    <div className="bg-slate-800  py-20">
      <div className="container flex justify-center items-center mx-auto">
        {empData.map((ele) => (
          <Link href={`http://localhost:3000/${ele.name}`} key={ele.id}>
            <div className="my list bg-gray-500 m-2 border p-4">
              <h1 className="text-green-500">{ele.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
