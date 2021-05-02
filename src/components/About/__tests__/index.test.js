import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

// describe function to declare component we're testing
describe('About component', () => {
    // First Test - baseline to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });
    // Second Test - compare snapshot versions of DOM node structure
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})