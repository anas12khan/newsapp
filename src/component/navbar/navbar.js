import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {

const [ham , setHam] = useState(false)

const sidebarfun=()=>{
  setHam(!ham)
}


  return (
   <><div className="flex px-10 py-3">
      <div className="flex justify-between w-full">
        <div className="flex text-3xl col-span-7">
        <div className="cursor-pointer"> <GiHamburgerMenu onClick={sidebarfun}
          /></div> <div className="px-2 cursor-pointer">
          <AiOutlineSearch />
        </div></div>
        <div className=" text-4xl text-gray-800 font-bold font-DM">Adventure.com</div>  
        <div><button className= "border-solid border-2 border-black text-xs rounded-full py-2 px-3 font-bold">Pay it Forward</button></div>
      </div>
    </div>
    {ham&& <div className="z-10">   <Sidebar sidebarfun={sidebarfun} /></div>}
    </> 
  );
};

export default Navbar;
