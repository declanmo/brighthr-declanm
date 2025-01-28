import React from 'react';
import { render } from '@testing-library/react';
import FileItemComponent from '../components/FileItem';
import { FileItem } from '../context/FileContext';

const file: FileItem = {
  type: 'file',
  name: 'example.txt',
  added: '2023-10-01',
};

test('renders file item', () => {
  const { getByText } = render(<FileItemComponent file={file} />);
  expect(getByText(/example.txt/i)).toBeInTheDocument();
  expect(getByText(/file/i)).toBeInTheDocument();
  expect(getByText(/2023-10-01/i)).toBeInTheDocument();
});