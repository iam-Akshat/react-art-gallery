import { useParams } from 'react-router-dom';

const ArtDetail = () => {
  const { id } = useParams();
  return (<h1>{id}</h1>);
};

export default ArtDetail;
