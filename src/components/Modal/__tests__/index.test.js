import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

afterEach(cleanup)

describe('Modal is rendering', () => {
    // render test
    it('renders', () => {
        render(<Modal />);
    });
    // snapshot test
    it('renders', () => {
        const { asFragment } = render(<Modal />)
        expect(asFragment()).toMatchSnapshot()
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})