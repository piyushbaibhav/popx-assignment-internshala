import React from 'react';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
  return (
    <div className="form-container">
      <h1>Create your PopX account</h1>
      
      <form>
        <div className="input-group-signup">
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" placeholder="Marry Doe" />
        </div>
        <div className="input-group-signup">
          <label htmlFor="phone">Phone number*</label>
          <input type="tel" id="phone" placeholder="Marry Doe" />
        </div>
        <div className="input-group-signup">
          <label htmlFor="email">Email address*</label>
          <input type="email" id="email" placeholder="Marry Doe" />
        </div>
        <div className="input-group-signup">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" placeholder="Marry Doe" />
        </div>
        <div className="input-group-signup">
          <label htmlFor="company">Company name</label>
          <input type="text" id="company" placeholder="Marry Doe" />
        </div>
        
        <div className="radio-group">
          <p>Are you an Agency?*</p>
          <input type="radio" id="yes" name="agency" value="Yes" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="agency" value="No" />
          <label htmlFor="no">No</label>
        </div>
        
        <Link to="/profile" className="btn-create-account">Create Account</Link>
      </form>
    </div>
  );
};

export default SignupScreen;