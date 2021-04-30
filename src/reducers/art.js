const initialState = {
  artworks: [],
};

const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        artworks: [...action.payload],
      };

    default:
      return state;
  }
};

export default artReducer;
