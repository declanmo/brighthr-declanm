import React, { useState } from "react";
import { FileItem, useFileContext } from "../context/FileContext";
import FolderItem from "./FolderItem";
import FileItemComponent from "./FileItem";

const FolderView = () => {
  const { data } = useFileContext();
  const [currentFolder, setCurrentFolder] = useState<FileItem | null>(null);

  const handleFolderClick = (folder: FileItem) => {
    setCurrentFolder(folder);
  };

  const handleBackClick = () => {
    setCurrentFolder(null);
  };

  const itemsToRender = currentFolder ? currentFolder.files : data;

  return (
    <div>
      {currentFolder && (
        <button onClick={handleBackClick} className="mb-4">
          Back
        </button>
      )}
      <div className="flex flex-col text-left">
        <div className="flex font-bold">
          <div className="w-1/12 px-4 py-2"></div>
          <div className="w-5/12 px-4 py-2">Name</div>
          <div className="w-3/12 px-4 py-2">Type</div>
          <div className="w-3/12 px-4 py-2">Date Added</div>
        </div>
        {itemsToRender?.map((item) =>
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