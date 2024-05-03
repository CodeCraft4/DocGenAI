import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import React from "react";

const ResponsiveTopBar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <img
        src="https://s3-alpha-sig.figma.com/img/ae0a/ba3f/e813d9151880c1b698c7f8d68d179cc3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYLjPT8K9t4nLNAHK-JhC5NJlnCbLp9TCMziSBDkZR3kr6JBWOGT9PLjONlymO-8jr9fPrVeRkFDehCTWCk72tIzPFfQCxy-kUeMMv8iHx7flG1xQMveAhF8CwDAE2IEAAHdXm~DCgfjYgbZrS2lUgBJwMXzBSN5l4nCucSCSz-5CbL6WGpx5CPmBDahY5cIiy2eew--NW8R-Qy7m6tRa66Fnic4yQsTc9KbR1nPPSyTQId~EyUBr~hELdTJtJoTc~fdmFX75OJg4FFOjiGDE6ZoSrq~9D0FerHT1VYZdkAnnJoNLSIUQgIIKER~LRhf3dd~TXAbAXXEfG-YGZ2oGw__"
        alt="logo"
        style={{width:'50px',height:'50px'}}
      />
      <a href="#">CUSTOMERS</a>
      <ArrowDownIcon className="w-8 h-8 rounded-full" />
      <button className="p-1 border-2 border-gray-500 rounded-full">
        <UserCircleIcon className="w-6 h-6 rounded-full text-gray-600" />
      </button>
    </div>
  );
};

export default ResponsiveTopBar;
