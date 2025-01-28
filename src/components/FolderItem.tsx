import React from "react";
import { FileItem } from "../context/FileContext";

interface FolderItemProps {
  folder: FileItem;
  onClick: (folder: FileItem) => void;
}

const FolderItem: React.FC<FolderItemProps> = ({ folder, onClick }) => {
  return (
    <div className="ml-4 cursor-pointer" onClick={() => onClick(folder)}>
      <div className="font-bold">📁 {folder.name}</div>
    </div>
  );
};

export default FolderItem;