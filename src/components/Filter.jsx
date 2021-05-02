import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Filter = ({ handleChange, curVal }) => {
  // for readability
  // eslint-disable-next-line arrow-body-style
  const filters = useSelector((state) => {
    return [...new Set(state.art.artworks.map((artwork) => artwork.category_titles).flat())];
  });
  // eslint-disable-next-line max-len
  const options = filters.map((category) => <option key={Math.random()} value={category}>{category}</option>);
  return (
    <div className="container">
      <h5> Filter </h5>
      <select
        value={curVal}
        onChange={(e) => { handleChange(e.target.value); }}
        className="form-select w-25  mt-1"
        aria-label="Filter by category"
      >
        <option value="" selected>All</option>
        {options}
      </select>
    </div>

  );
};

Filter.propTypes = {
  curVal: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
