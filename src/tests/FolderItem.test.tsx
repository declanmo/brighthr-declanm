import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FolderItem from '../components/FolderItem';
import { FileItem } from '../context/FileContext';

const folder: FileItem = {
  type: 'folder',
  name: 'Documents',
  added: '2023-10-01',
  files: [],
};

test('renders folder item and handles click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<FolderItem folder={folder} onClick={handleClick} />);
  expect(getByText(/Documents/i)).toBeInTheDocument();
  expect(getByText(/folder/i)).toBeInTheDocument();
  expect(getByText(/2023-10-01/i)).toBeInTheDocument();

  fireEvent.click(getByText(/Documents/i));
  expect(handleClick).toHaveBeenCalledWith(folder);
});