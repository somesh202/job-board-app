/* eslint-disable react/prop-types */
import React from 'react';
import './JobCard.css'; // Import CSS file for styling


function formatWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function fixNUll(amt) {
  if(amt===null) {

  }
}
const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={job.logoUrl} alt={job.companyName} className="company-logo" />
        <div className="job-details">
          
        <p className="company-name">{formatWord(job.companyName)}</p>
          <h2 className="job-title">{formatWord(job.jobRole)}</h2>
          <p className="location">{formatWord(job.location)}</p>
          
        </div>
        
       
      </div>
      <p className="salary"><span className="sal">Estimated Salary: </span>{`₹${job.minJdSalary} - ${job.maxJdSalary} LPA ⚠️`}</p>
      <div className="job-card-body">
        <h3>About Company: </h3>
        <p className="job-description">{job.jobDetailsFromCompany}</p>
      </div>
      <div className="job-card-footer">
      <div className="info-container poc-info-container"><h3>Minimum Experience</h3><h2>{`${job.minExp} years`}</h2></div>
        {/* <p className="experience">Experience: {`${job.minExp} - ${job.maxExp} years`}</p> */}
      </div>
      <div className='button-cont'>
      <a href={job.jdLink} className="apply-btn">⚡ Easy Apply</a>
      <a href={job.jdLink} className="referral-btn">Unlock Referral asks</a>
      </div>
    </div>
  );
};

export default JobCard;
