import React from "react";
import { FileItem, useFileContext } from "../context/FileContext";

const renderFileOrFolder = (item: FileItem) => {
  if (item.type === "folder") {
    return (
      <div key={item.name} className="ml-4">
        <div className="font-bold">📁 {item.name}</div>
        {item.files && (
          <div className="ml-4">
            {item.files.map((child) => renderFileOrFolder(child))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div key={item.name} className="ml-4">
      📄 {item.name} (Type: {item.type}, Added: {item.added})
    </div>
  );
};

const FolderView = () => {
  const { data } = useFileContext();

  return (
    <div>
      {data.map((item) => renderFileOrFolder(item))}
    </div>
  );
};

export default FolderView;