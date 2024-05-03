import React from "react";
import FilterSearch from "@/components/Search/FilterSearch";
import TopBar from "@/components/TopBar/TopBar";
import TableData from "@/components/Table/Table";
import Pagination from "@/components/Pagination/Pagination";
import ResponsiveTopBar from "@/components/ResponsiveTopBar/ResponsiveTopBar";
 

const page = () => {
  return (
    <div>
      <TopBar />
       <div className="md:hidden sm:hidden xs:flex">
        <ResponsiveTopBar/>
       </div>
      <div className="my-8">
        <FilterSearch />
      </div>
      <TableData />
      <div className="my-8">
        <Pagination />
      </div>
    </div>
  );
};

export default page;
