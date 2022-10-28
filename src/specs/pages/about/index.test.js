import { render, screen } from '@testing-library/react';
import About from '../../../app/pages/About';
import TestWrapper from '../../Wrapper';

test('renders title', () => {
  render(
    <TestWrapper>
      <About />
    </TestWrapper>,
  );
  const titleElement = screen.getByText('About');
  expect(titleElement).toBeInTheDocument();
});
