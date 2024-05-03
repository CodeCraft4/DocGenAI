import React from "react";

const FilterSearch = () => {
  return (
    <div className="md:mx-10 mx-4 sm:mx-4">
      <p>FILTER INVOICES</p>
      <ul className="md:flex xs:flex flex-wrap xs:gap-5 sm:block justify-evenly md:w-8/12 sm:full p-4">
        <li className="flex gap-2">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-sky-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
            checked
          />
          ID
        </li>
        <li className="flex gap-2">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          />
          EIK
        </li>
        <li className="flex gap-2">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          />
          INVOICE FOR
        </li>
        <li className="flex gap-2">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          />
          EXPIRY DATES
        </li>
        <li className="flex gap-2">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
          />
          ADRESS
        </li>
      </ul>
      <div className="my-5 md:flex sm:block gap-4">
        <input
          className="border-none bg-gray-900 h-15 px-5 pr-16 rounded-3xl text-sm focus:outline-none w-full md:w-9/12 sm:w-9/12 xs:full p-3 text-center"
          value={"SEARCH INVOICE BY NAME"}
          placeholder="SEARCH INVOICE BY NAME"
        />
        <div className="flex xs:mt-3 md:gap-2 gap-2 sm:gap-8 items-center">
          <button className="p-3 bg-sky-500 text-center px-10 rounded-3xl text-sm">
            SEARCH
          </button>
          <button className="p-3 bg-sky-500 px-10 rounded-3xl text-start text-sm">
            HIDEFILTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
