import React from "react";

const TopBar = () => {
  return (
    <div>
      <div className="m-12">
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
    </div>
  );
};

export default TopBar;
