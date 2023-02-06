import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../sidebar/sidebar";
const Navbar = () => {
  const [change, setChange] = useState("Vendor");
  const myArray = { id: ["apple", "banana", "orange"] };

  const handleChange = () => {
    if (change === "Vendor") {
      setChange("Adventures");
    } else {
      setChange("Vendor");
    }
  };
  return (
    <div className="flex">
      {change === "Vendor" ? (
        <div className="flex justify-between">
          <div className="flex text-3xl">
            <GiHamburgerMenu onClick={handleChange} />
            <AiOutlineSearch />
          </div>
          <div>
            <h1 className="text-3xl">{change}</h1>
          </div>
          {myArray.id.map(
            (item, key) => (
              console.log(key),
              (
                <div className="p-10 flex justify-between">
                  <button className="text-2xl">{item}</button>
                </div>
              )
            )
          )}
        </div>
      ) : (
        <Sidebar text={change} value="abc" />
      )}
    </div>
  );
};

export default Navbar;
