const fetchArt = async (page = 1, limit = 5) => {
  const url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}&fields=id,title,artist_display,date_display,main_reference_number,category_titles,place_of_origin,medium_display,credit_line,image_id`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};

export default fetchArt;
