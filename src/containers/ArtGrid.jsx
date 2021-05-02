import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { useState } from 'react';
import ArtPreview from '../components/ArtPreview';
import useArtWorks from '../hooks/useArtworks';
import Filter from '../components/Filter';
import Loader from '../components/Loader';

const ArtGrid = () => {
  const data = useSelector((state) => state.art.artworks);
  const [filter, setFilter] = useState('');
  const { loading } = useArtWorks();
  let artPreviews;
  if (!loading) {
    artPreviews = data.filter((art) => {
      if (filter) {
        if (art.category_titles.indexOf(filter) !== -1) return true;
        return false;
      }
      return true;
    }).map((art) => (
      <li key={art.id}>
        <Link to={`/artwork/${art.id}`}>
          <ArtPreview imgId={art.image_id} imgTitle={art.title} />
        </Link>
      </li>
    ));
  }
  return (
    loading ? <Loader /> : (
      <div>
        <Filter handleChange={setFilter} curVal={filter} />
        <Masonry className="art_grid mx-auto container" elementType="ul">
          { artPreviews }
        </Masonry>
      </div>

    )
  );
};

export default ArtGrid;
