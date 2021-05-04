/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchArtById from '../api/fetchArtById';
import BackNav from './BackNav';
import Loader from './Loader';

const ArtDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const artwork = useSelector((state) => state.art.artworks.filter((art) => art.id === +id));
  useEffect(async () => {
    if (artwork[0]) {
      setData(artwork[0]);
      setLoading(false);
      return;
    }
    const work = await fetchArtById(id);
    setData(work);
    setLoading(false);
  }, []);
  const {
    title,
    date_display,
    artist_display,
    place_of_origin,
    medium_display,
    credit_line,
    category_titles,
    image_id,
  } = data;
  const imgSrc = `https://www.artic.edu/iiif/2/${image_id}/full/863,/0/default.jpg`;
  if (loading) return <Loader />;
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
                <td colSpan="2">{(category_titles || []).join(',')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ArtDetail;
