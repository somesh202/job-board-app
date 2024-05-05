const initialState = {
    jobs: [],
    loading: false,
    error: null,
    filters: {
      location: '',
      experience: '',
      // Add more filter properties as needed
    },
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOBS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_JOBS_SUCCESS':
        return {
          ...state,
          loading: false,
          jobs: action.payload,
        };
      case 'FETCH_JOBS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        case 'UPDATE_FILTERS':
          return {
            ...state,
            filters: {
              ...state.filters,
              ...action.payload,
            },
          };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  