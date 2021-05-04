/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Filter = ({ handleChange, curVal }) => {
  const allCategories = useSelector((state) => state.art.artworks.map((artwork) => artwork.category_titles));
  const filters = [...new Set(allCategories.flat())];
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
        <option value="">All</option>
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
