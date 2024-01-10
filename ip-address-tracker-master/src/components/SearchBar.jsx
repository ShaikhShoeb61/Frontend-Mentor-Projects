import React, { useContext } from "react";
import { FetchContext } from "../Context/FetchContext";
import { useState } from "react";
import ArrowIcon from "/images/icon-arrow.svg";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const { fetchData } = useContext(FetchContext);

  const handleInputFields = (e) => {
    setInputVal(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData(inputVal);
  };

  return (
    <div className="px-[1.2rem] h-2/5 min-w-full bg-hero-section md:bg-hero-section-desktop bg-cover flex flex-col gap-5 justify-start items-center pt-[2rem]">
      <h1 className="text-2xl font-normal text-white">IP Address Tracker</h1>
      <div className="flex w-full justify-center">
        <input
          onChange={handleInputFields}
          value={inputVal}
          className="max-w-[500px] outline-none font-medium text-VDG placeholder:normal text-[18px] pl-[1.5rem] pr-[1rem] py-[1rem] rounded-l-[10px] w-full placeholder:font-normal placeholder:text-lg"
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button
          onClick={handleButtonClick}
          className=" hover:bg-VDG bg-black text-white py-4 px-[1.6rem] rounded-r-[10px] font-normal"
        >
          <img src={ArrowIcon} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
