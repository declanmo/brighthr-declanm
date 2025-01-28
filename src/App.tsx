import React from 'react';
import './App.css';
import FolderView from './components/FolderView';
import { FileProvider } from './context/FileContext';

const App = () => {
  return (
    <FileProvider>
      <div>
        <h1 className="text-xl font-bold mb-4">Files and Folders</h1>
        <FolderView />
      </div>
    </FileProvider>
  );
};

export default App;