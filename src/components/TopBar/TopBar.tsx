import React from "react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const TopBar = () => {
  return (
    <div>
      <div className="m-5 p-4">
        <ul className="md:flex sm:flex xs:hidden xl:flex justify-around bg-gray-900 rounded-3xl font-normal p-2 items-center">
          <li>
            <a href="#">OVERVIEW</a>
          </li>
          <li className="active bg-pink-600 rounded-3xl p-2 px-7">
            <a href="#">INVOICES</a>
          </li>
          <li>
            <a href="#">PERFORMAS</a>
          </li>
          <li>
            <a href="#">DELIVERY NOTES</a>
          </li>
          <li>
            <a href="#">DEBIT MEMOS</a>
          </li>
          <li>
            <a href="#">PROTOCOLS</a>
          </li>
        </ul>
      </div>
      <div className="xs:flex md:hidden sm:hidden justify-between items-center w-full xs:-mt-20">
        <Image
          src="https://s3-alpha-sig.figma.com/img/ae0a/ba3f/e813d9151880c1b698c7f8d68d179cc3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYLjPT8K9t4nLNAHK-JhC5NJlnCbLp9TCMziSBDkZR3kr6JBWOGT9PLjONlymO-8jr9fPrVeRkFDehCTWCk72tIzPFfQCxy-kUeMMv8iHx7flG1xQMveAhF8CwDAE2IEAAHdXm~DCgfjYgbZrS2lUgBJwMXzBSN5l4nCucSCSz-5CbL6WGpx5CPmBDahY5cIiy2eew--NW8R-Qy7m6tRa66Fnic4yQsTc9KbR1nPPSyTQId~EyUBr~hELdTJtJoTc~fdmFX75OJg4FFOjiGDE6ZoSrq~9D0FerHT1VYZdkAnnJoNLSIUQgIIKER~LRhf3dd~TXAbAXXEfG-YGZ2oGw__"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
        <a href="#">CUSTOMERS</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>

        <button className="p-1.5 text-gray-500 border-2 border-gray-500 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
