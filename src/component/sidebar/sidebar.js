import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../../images/logo.jpg";
import Amazon from "../../images/amazon.jpg";
const Sidebar = (props) => {
  const data = [
    {
      news: "NEWS",
      dispatch: "DISPATCHES",
      time: "24 HOURS",
      book: "BOOK CLUB",
      climate: "CLIMATE DESK",
      personal: "A PERSONAL NOTE",
    },
    {
      news: "OPINION",
      dispatch: "FOOD FOR THOUGHT",
      time: "WILDLIFE",
      book: "ACTIVE",
      climate: "PROFILES",
      personal: "THINGS I'VE LEARNED",
    },
    {
      news: "PHOTOGRAPHY",
      dispatch: "BEVERAGE DEPT.",
      time: "ROAD TRIPS",
      book: "BOOK CLUB",
      climate: "RIDING THE RAILS",
      personal: "THE FUTURE OF TRAVEL",
    },
  ];
  return (
    <div className="w-2/5 border-solid border-2 px-4 overflow-y-auto absolute top-0 z-10 bg-white">
      <div className="flex justify-between py-4">
        <div>
          <img src={logo} className="w-16"></img>
        </div>
        <div className="flex text-3xl col-span-7">
          <div className="cursor-pointer">
            <AiOutlineSearch />
          </div>

          <div className="cursor-pointer px-2" onClick={props.sidebarfun}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-3 pb-5">
        {data.map((item, key) => {
          return (
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-xs font-semibold">
                {item.news}
              </a>
              <a href="#" className="text-xs font-semibold">
                {item.dispatch}
              </a>
              <a href="#" className="text-xs font-semibold">
                {item.time}
              </a>
              <a href="#" className="text-xs font-semibold">
                {item.book}
              </a>
              <a href="#" className="text-xs font-semibold">
                {item.climate}
              </a>
              <a href="#" className="text-xs font-semibold">
                {item.personal}
              </a>
            </div>
          );
        })}
      </div>
      <hr className="mb-5"></hr>
      <div className="w-3/5">
        <p className="text-5xl font-semibold">
          About Us Contributors Contact Newsletter Pay it Forward Sustainability
        </p>
      </div>
      <div className="py-8 flex">
        <div className="w-9/12">
          <img className="w-36" src={Amazon}></img>
          <p className="text-xss pt-2">
            Privacy Policy<br></br> Copyright © 2023 Adventure.com | Copyright ©
            2023 Adventure.com, LLC
          </p>
        </div>
        <div className="flex space-x-3 justify-end text-xl align-bottom items-end ml-4">
          <CgFacebook></CgFacebook>
          <GrTwitter></GrTwitter>
          <RiInstagramFill></RiInstagramFill>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
