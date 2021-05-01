/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
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
      <div className="art_grid">

        <ul>
          { artPreviews }
        </ul>

      </div>
    )
  );
};

export default ArtGrid;
