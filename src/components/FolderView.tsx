import React, { useState } from "react";
import { FileItem, useFileContext } from "../context/FileContext";
import FolderItem from "./FolderItem";
import FileItemComponent from "./FileItem";

const FolderView = () => {
  const { data } = useFileContext();
  const [currentFolder, setCurrentFolder] = useState<FileItem | null>(null);
  const [sortCriteria, setSortCriteria] = useState<"name" | "date">("name");
  const [filterText, setFilterText] = useState("");

  const handleFolderClick = (folder: FileItem) => {
    setCurrentFolder(folder);
  };

  const handleBackClick = () => {
    setCurrentFolder(null);
  };

  const handleSortChange = (criteria: "name" | "date") => {
    setSortCriteria(criteria);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const itemsToRender = currentFolder ? currentFolder.files : data;

  const filteredItems = itemsToRender?.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedItems = filteredItems?.sort((a, b) => {
    if (sortCriteria === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return (a.added || "").localeCompare(b.added || "");
    }
  });

  return (
    <div className="w-full">
      {currentFolder && (
        <button onClick={handleBackClick} className="mb-4">
          Back
        </button>
      )}
      <div className="flex justify-end mb-4 gap-3 items-center">
        <div>
          <label htmlFor="sortSelect" className="mr-2">Sort by:</label>
          <select
            id="sortSelect"
            value={sortCriteria}
            onChange={(e) => handleSortChange(e.target.value as "name" | "date")}
            className="border px-2 py-1"
          >
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Filter by name"
            value={filterText}
            onChange={handleFilterChange}
            className="border px-2 py-1"
          />
        </div>
      </div>
      <div className="flex flex-col text-left">
        <div className="flex font-bold">
          <div className="w-1/12 px-4 py-2"></div>
          <div className="w-5/12 px-4 py-2">Name</div>
          <div className="w-3/12 px-4 py-2">Type</div>
          <div className="w-3/12 px-4 py-2">Date Added</div>
        </div>
        {sortedItems?.map((item) =>
          item.type === "folder" ? (
            <FolderItem key={item.name} folder={item} onClick={handleFolderClick} />
          ) : (
            <FileItemComponent key={item.name} file={item} />
          )
        )}
      </div>
    </div>
  );
};

export default FolderView;