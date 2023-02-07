import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../sidebar/sidebar";
import data from "../data.json";
const Navbar = () => {
  const [change, setChange] = useState("Vendor");
  const myArray = { id: ["apple", "banana", "orange"] };
  const [name, setName] = useState();

  console.log(name);

  const handleChange = () => {
    if (change === "Vendor") {
      setChange("Adventures");
    } else {
      setChange("Vendor");
    }
  };
  const numbers = [1, 2, 3, 4, 5, 6];

  const [one, two, ...rest] = numbers;

  return (
    <div className="flex">
      {/* <div className="flex justify-between">
        <div className="flex text-3xl">
          <GiHamburgerMenu
            onClick={(e) => {
              console.log(e);
            }}
          />
          <AiOutlineSearch />
        </div>
        <div>
          <h1 className="text-3xl">{change}</h1>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {myArray.id.map((item, key) => (
          <div className="p-10 flex justify-between">
            <button className="text-2xl">{item}</button>
          </div>
        ))}
      </div> */}

      <Sidebar text={data} valueFunction={handleChange} change={setChange} />
    </div>
  );
};

export default Navbar;
