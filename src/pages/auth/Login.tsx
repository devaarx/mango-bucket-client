import { Link } from '@reach/router';
import React from 'react';
import styles from './index.module.scss';

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className={styles.auth_wrap}>
      <div className={styles.auth_box}>
        <h1>Log in to your Buckets</h1>
        <p>
          Don’t have an account? <Link to="/register">Register Now</Link>
        </p>
        <form>
          <div className="input_group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address" />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="input_submit">
            <button type="submit">Log in</button>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;