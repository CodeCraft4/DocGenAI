import React from "react";
import FilterSearch from "@/components/Search/FilterSearch";
import TopBar from "@/components/TopBar/TopBar";
import TableData from "@/components/Table/Table";
import Pagination from "@/components/Pagination/Pagination";

const page = () => {
  return (
    <div className="p-6">
      <div>
        <TopBar />
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
