/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackNav from './BackNav';

const ArtDetail = () => {
  const { id } = useParams();
  const artwork = useSelector((state) => state.art.artworks.filter((art) => art.id === +id));
  const {
    title,
    date_display,
    artist_display,
    place_of_origin,
    medium_display,
    credit_line,
    category_titles,
    image_id,
  } = artwork[0];
  const imgSrc = `https://www.artic.edu/iiif/2/${image_id}/full/863,/0/default.jpg`;
  return (
    <>
      <BackNav />
      <div className="art_detail container d-flex flex-column mt-2">
        <h1 className="text-center">{title}</h1>
        <img src={imgSrc} className="img-fluid border border-5 border-dark mx-auto" alt={title} />
        <div className="container mt-2">
          <table className="table table-borderless table-dark">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Title</th>
                <td>{title}</td>
              </tr>
              <tr>
                <th scope="row">Date of Display</th>
                <td>{date_display}</td>
              </tr>
              <tr>
                <th scope="row">Artist Display</th>
                <td>{artist_display}</td>
              </tr>
              <tr>
                <th scope="row">Place of origin</th>
                <td colSpan="2">{place_of_origin}</td>
              </tr>
              <tr>
                <th scope="row">Medium of display</th>
                <td colSpan="2">{medium_display}</td>
              </tr>
              <tr>
                <th scope="row">Credits</th>
                <td colSpan="2">{credit_line}</td>
              </tr>
              <tr>
                <th scope="row">Categories</th>
                <td colSpan="2">{category_titles.join(',')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ArtDetail;
