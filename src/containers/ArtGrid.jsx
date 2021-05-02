import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import ArtPreview from '../components/ArtPreview';
import useArtWorks from '../hooks/useArtworks';

const ArtGrid = () => {
  const data = useSelector((state) => state.art.artworks);
  const { loading } = useArtWorks();
  let artPreviews;
  if (!loading) {
    artPreviews = data.map((art) => (
      <li key={art.id}>
        <Link to={`/artwork/${art.id}`}>
          <ArtPreview imgId={art.image_id} imgTitle={art.title} />
        </Link>
      </li>
    ));
  }
  return (
    loading ? 'loading.....' : (
      <Masonry className="art_grid mx-auto container" elementType="ul">
        { artPreviews }
      </Masonry>
    )
  );
};

export default ArtGrid;
