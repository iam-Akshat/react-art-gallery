const fetchArtById = async (id) => {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_display,main_reference_number,category_titles,place_of_origin,medium_display,credit_line,image_id`);
  const data = await res.json();

  return data.data;
};

export default fetchArtById;
