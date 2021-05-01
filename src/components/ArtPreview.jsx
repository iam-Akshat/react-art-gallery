import PropTypes from 'prop-types';

const ArtPreview = ({ imgId, imgTitle }) => (
  <div className="book_preview card">
    <img className="card-img-top" src={`https://www.artic.edu/iiif/2/${imgId}/full/200,/0/default.jpg`} alt="img" />
    <div className="card-header">
      {imgTitle}
    </div>
  </div>
);

ArtPreview.propTypes = {
  imgId: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,
};
export default ArtPreview;
