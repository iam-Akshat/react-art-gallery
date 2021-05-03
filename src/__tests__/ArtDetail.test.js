import { screen } from '@testing-library/react';
import { Route } from 'react-router-dom';
import createStore from 'redux-mock-store';
import ArtDetail from '../components/ArtDetail';

const initArtState = {
  art: {
    artworks: [
      {
        id: 101,
        title: 'test-title',
        date_display: '2021',
        artist_display: 'tester',
        place_of_origin: 'New Delhi',
        medium_display: 'code',
        credit_line: 'microverse',
        category_titles: ['art', 'world'],
        image_id: '11',
      },
    ],
  },
};

describe('ArtDetail', () => {
  const mockStore = createStore([]);
  it('uses useParams hook to find data from state and render it', () => {
    const store = mockStore(initArtState);
    // eslint-disable-next-line no-undef
    renderWithRouterAndStore(<Route path="/:id"><ArtDetail /></Route>, store, '/101');
    const mainHeading = screen.getAllByText('test-title')[0];
    const tableHeading = screen.getAllByText('test-title')[1];
    const dateDisplay = screen.getByText('2021');
    const artistDisplay = screen.getByText('tester');
    const placeOfOrigin = screen.getByText('New Delhi');
    const mediumDisplay = screen.getByText('code');
    const creditLine = screen.getByText('microverse');
    const categoryTitles = screen.getByText('art,world');
    expect(mainHeading).toBeInTheDocument();
    expect(tableHeading).toBeInTheDocument();
    expect(dateDisplay).toBeInTheDocument();
    expect(artistDisplay).toBeInTheDocument();
    expect(placeOfOrigin).toBeInTheDocument();
    expect(mediumDisplay).toBeInTheDocument();
    expect(creditLine).toBeInTheDocument();
    expect(categoryTitles).toBeInTheDocument();
  });
});
