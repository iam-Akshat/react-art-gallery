import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_DATA } from '../actions';
import fetchArt from '../api/fetchArt';

const useArtWorks = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(async () => {
    const data1 = fetchArt();
    const data2 = fetchArt(8);
    const data3 = fetchArt(20);

    dispatch(ADD_DATA(await data1));
    dispatch(ADD_DATA(await data2));
    dispatch(ADD_DATA(await data3));
    setLoading(false);
  }, []);

  return { loading };
};

export default useArtWorks;
