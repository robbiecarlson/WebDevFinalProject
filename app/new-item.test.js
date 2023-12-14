import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewItem from './NewItem';

describe('NewItem Component', () => {
  test('renders the form with default values', () => {
    render(<NewItem onAddItem={() => {}} />);

    expect(screen.getByPlaceholderText('Film Name')).toHaveValue('');
    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
    expect(screen.getByDisplayValue('Action')).toBeInTheDocument();
  });

  test('allows user to enter a movie name, score, and select a category', () => {
    render(<NewItem onAddItem={() => {}} />);
    
    const nameInput = screen.getByPlaceholderText('Film Name');
    const scoreInput = screen.getByDisplayValue(1);
    const categorySelect = screen.getByDisplayValue('Action');

    fireEvent.change(nameInput, { target: { value: 'Inception' } });
    fireEvent.change(scoreInput, { target: { value: 8 } });
    fireEvent.change(categorySelect, { target: { value: 'Drama' } });

    expect(nameInput).toHaveValue('Inception');
    expect(scoreInput).toHaveValue('8');
    expect(categorySelect).toHaveValue('Drama');
  });

  test('submits the form with the correct data', () => {
    const mockOnAddItem = jest.fn();
    render(<NewItem onAddItem={mockOnAddItem} />);

    const nameInput = screen.getByPlaceholderText('Film Name');
    const scoreInput = screen.getByDisplayValue(1);
    const categorySelect = screen.getByDisplayValue('Action');
    const submitButton = screen.getByRole('button', { name: 'Add' });

    fireEvent.change(nameInput, { target: { value: 'Inception' } });
    fireEvent.change(scoreInput, { target: { value: 8 } });
    fireEvent.change(categorySelect, { target: { value: 'Drama' } });
    fireEvent.click(submitButton);

    expect(mockOnAddItem).toHaveBeenCalledWith({
      name: 'Inception',
      score: '10', 
      category: 'Drama',
    });
  });
});
