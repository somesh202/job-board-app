/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchJobs, updateFilters } from '../actions/jobActions';
import JobCard from '../components/JobCard';
import './JobList.css';


const JobsList = ({ jobs, loading, fetchJobs, filters , updateFilters}) => {
  const bottomElementRef = useRef();
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    // Update filter in Redux state
    updateFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchJobs(filters);
        }
      },
      { threshold: 1 }
    );

    if (bottomElementRef.current) {
      observer.observe(bottomElementRef.current);
    }

    return () => {
      if (bottomElementRef.current) {
        observer.unobserve(bottomElementRef.current);
      }
    };
  }, [fetchJobs, loading, filters]);

  return (
    <div className='job-list-container'>
      
      <div className="job-cards-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      </div>
      {loading && <div>Loading...</div>}
      <div ref={bottomElementRef} style={{ height: '10px' }}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobReducer.jobs,
  loading: state.jobReducer.loading,
  filters: state.jobReducer.filters,
});

export default connect(mapStateToProps, { fetchJobs , updateFilters})(JobsList);
