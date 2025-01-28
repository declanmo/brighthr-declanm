import React from "react";
import { FileItem } from "../context/FileContext";

interface FileItemProps {
  file: FileItem;
}

const FileItemComponent: React.FC<FileItemProps> = ({ file }) => {
  return (
    <div className="ml-4">
      📄 {file.name} (Type: {file.type}, Added: {file.added})
    </div>
  );
};

export default FileItemComponent;