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
      {itemsToRender?.map((item) =>
        item.type === "folder" ? (
          <FolderItem key={item.name} folder={item} onClick={handleFolderClick} />
        ) : (
          <FileItemComponent key={item.name} file={item} />
        )
      )}
    </div>
  );
};

export default FolderView;