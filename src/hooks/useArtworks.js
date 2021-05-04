import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_DATA } from '../actions';
import fetchArt from '../api/fetchArt';

const useArtWorks = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.art.artworks);
  let shouldFetchData = true;
  if (data.length !== 0) {
    shouldFetchData = false;
  }
  const dispatch = useDispatch();
  useEffect(async () => {
    if (shouldFetchData) {
      const data1 = fetchArt(100);
      const data2 = fetchArt(69);
      const data3 = fetchArt(21);

      dispatch(ADD_DATA(await data1));
      dispatch(ADD_DATA(await data2));
      dispatch(ADD_DATA(await data3));
    }
    setLoading(false);
  }, []);

  return { loading };
};

export default useArtWorks;
