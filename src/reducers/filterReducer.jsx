
const initialState = {
    minExperience: 0,
    // Add other filter fields with their initial values
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MIN_EXPERIENCE_FILTER':
        return {
          ...state,
          minExperience: action.payload,
        };
      // Add cases for other filters
      default:
        return state;
    }
  };
  
  export default filterReducer;
  