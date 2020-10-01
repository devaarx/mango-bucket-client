import { Link } from '@reach/router';
import React from 'react';
import styles from './index.module.scss';

interface Props {}

const Register: React.FC<Props> = () => {
  return (
    <div className={styles.auth_wrap}>
      <div className={styles.auth_box}>
        <h1>Create your Buckets</h1>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <form>
          <div className="input_group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your full name" />
          </div>
          <div className="input_group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address" />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="input_submit">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
