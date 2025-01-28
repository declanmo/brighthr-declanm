import React, { createContext, useContext, useState, ReactNode } from "react";
import filesData from "../data/files.json";

interface FileOrFolder {
    type: string;
    name: string;
    added?: string;
    files?: FileOrFolder[];
}

interface FileContextType {
    data: FileOrFolder[];
    setData: React.Dispatch<React.SetStateAction<FileOrFolder[]>>;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<FileOrFolder[]>(filesData);

    return (
        <FileContext.Provider value={{ data, setData }}>
            {children}
        </FileContext.Provider>
    );
};

export const useFileContext = (): FileContextType => {
    const context = useContext(FileContext);
    if (!context) {
        throw new Error("useFileContext must be used within a FileProvider");
    }
    return context;
};