// filepath: /Users/declanmorrisroe/Documents/Sites/brighthr-declanm/src/tests/FolderView.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FolderView from '../components/FolderView';
import { FileProvider } from '../context/FileContext';

test('renders FolderView and handles sorting and filtering', () => {
  const { getByText, getByPlaceholderText, getByLabelText, queryByText, debug } = render(
    <FileProvider>
      <FolderView />
    </FileProvider>
  );

  // Check initial render
  expect(getByText('Cost centres')).toBeInTheDocument();
  expect(getByText('Employee Handbook')).toBeInTheDocument();

  // Test filtering
  const filterInput = getByPlaceholderText(/Filter by name/i);
  fireEvent.change(filterInput, { target: { value: 'Cost centres' } });
  expect(getByText('Cost centres')).toBeInTheDocument();
  expect(queryByText('Employee Handbook')).not.toBeInTheDocument();

  // Clear filter
  fireEvent.change(filterInput, { target: { value: '' } });
  expect(getByText('Cost centres')).toBeInTheDocument();
  expect(getByText('Employee Handbook')).toBeInTheDocument();

  // Test sorting by date
  const sortSelect = getByLabelText(/Sort by:/i);
  fireEvent.change(sortSelect, { target: { value: 'date' } });

  // Check order after sorting by date
  const items = document.querySelectorAll('.flex-col .flex:not(.font-bold)');
  expect(items[0]).toHaveTextContent('Expenses');
  expect(items[2]).toHaveTextContent('Cost centres');

  // Test sorting by name
  fireEvent.change(sortSelect, { target: { value: 'name' } });

  // Check order after sorting by name
  const sortedItems = document.querySelectorAll('.flex-col .flex:not(.font-bold)');
  expect(sortedItems[0]).toHaveTextContent('Cost centres');
  expect(sortedItems[1]).toHaveTextContent('Employee Handbook');
});