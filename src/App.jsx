import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import JobsList from './components/JobsList';
import FilterComponent from './components/FilterComponent';
import { fetchJobs } from './actions/jobActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch initial jobs when the component mounts
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={3}>
       
          {/* Jobs list component */}
          <JobsList />
      </Grid>
    </Container>
  );
};

export default App;
