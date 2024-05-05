
const initialState = {
    minExperience: 0,
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MIN_EXPERIENCE_FILTER':
        return {
          ...state,
          minExperience: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  