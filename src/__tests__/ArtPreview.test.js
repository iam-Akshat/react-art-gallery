import { render, screen } from '@testing-library/react';
import ArtPreview from '../components/ArtPreview';

describe('ArtPreview', () => {
  it('renders the title and image from props', () => {
    render(<ArtPreview imgTitle="test-img" imgId="a" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://www.artic.edu/iiif/2/a/full/200,/0/default.jpg');
    expect(screen.getByText('test-img')).toBeInTheDocument();
  });
});
