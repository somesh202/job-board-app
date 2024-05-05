export const fetchJobsRequest = () => {
    return {
      type: 'FETCH_JOBS_REQUEST',
    };
  };
  
  export const fetchJobsSuccess = (jobs) => {
    return {
      type: 'FETCH_JOBS_SUCCESS',
      payload: jobs,
    };
  };
  
  export const fetchJobsFailure = (error) => {
    return {
      type: 'FETCH_JOBS_FAILURE',
      payload: error,
    };
  };
  export const updateFilters = (filters) => ({
    type: 'UPDATE_FILTERS',
    payload: filters,
  });
  
  export const fetchJobs = (filters) => {
    return (dispatch) => {
      dispatch(fetchJobsRequest());
      fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit: 10, offset: 0, filters: filters }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch jobs');
          }
          return response.json();
        })
        .then((data) => {
          // Assuming data.jobs contains the array of jobs
          dispatch(fetchJobsSuccess(data.jdList));
        })
        .catch((error) => {
          dispatch(fetchJobsFailure(error.message));
        });
    };
  };
  
  