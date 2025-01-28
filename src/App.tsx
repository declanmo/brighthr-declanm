import React from 'react';
import './App.css';
import FolderView from './components/FolderView';
import { FileProvider } from './context/FileContext';

const App = () => {
  return (
    <FileProvider>
      <div className="container mx-auto md:min-w-2xl lg:min-w-4xl">
        <h1 className="text-xl font-bold mb-4">File Manager</h1>
        <FolderView />
      </div>
    </FileProvider>
  );
};

export default App;