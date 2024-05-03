import { TABLE_DATA } from "@/constant/data";
import { WindowIcon } from "@heroicons/react/16/solid";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import React from "react";

const TableData = () => {
  return (
    <div className="relative md:mx-10 xs:m-4">
      <p>Open Invoice</p>
      {TABLE_DATA.map((data, i) => (
        <div
          key={i}
          className="flex flex-wrap  gap-4 my-5 border-2 border-gray-400 md:p-5 xs:p-2 rounded-3xl"
        >
          <div>
            <p className="font-light">INVOICE</p>
            <span className="text-sm font-light text-gray-500">
              #{data.Invoice}
            </span>
          </div>
          <div>
            <p className="font-light">FOR</p>
            <span className="text-sm font-light text-gray-500">{data.For}</span>
          </div>
          <div>
            <p className="font-light">EIK</p>
            <span className="text-sm font-light text-gray-500">{data.EIK}</span>
          </div>
          <div>
            <p className="font-light">TAX EVENT</p>
            <span className="text-sm font-light text-gray-500">
              {data.Event}
            </span>
          </div>
          <div>
            <p className="font-light">EXPIRY DATE</p>
            <span className="text-sm font-light text-gray-500">
              {data.Expiry}
            </span>
          </div>
          <div>
            <p className="font-light">ADRESS</p>
            <span className="text-sm font-light text-gray-500">
              {data.Adress}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableData;
