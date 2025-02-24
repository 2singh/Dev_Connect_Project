import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn badge-dark'>
        Edit Profile
      </Link>
      <Link to='/add-experience' className='btn badge-dark'>
        Add Experience
      </Link>
      <Link to='/add-education' className='btn badge-dark'>
        Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
