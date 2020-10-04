import { Link, useNavigate } from '@reach/router';
import React, { useState } from 'react';
import { useLoginMutation } from '../../generated/graphql';
import styles from './index.module.scss';

interface Props {}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [{ email, password }, setInput] = useState({ email: '', password: '' });
  const [loginMutation, { data, loading }] = useLoginMutation();

  // login mutation
  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      await loginMutation({ variables: { email, password } });
    } catch (error) {
      console.log(error);
    }
  };

  // input change handler
  const handleInputChange = (event: any) => {
    event.persist();
    setInput((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  if (data?.login.id) {
    navigate('/', { state: { authenticated: true } }); // successful login --> move to '/' route
  }

  // console.log(data);

  return (
    <div className={styles.auth_wrap}>
      <div className={styles.auth_box}>
        <h1>Log in to your Buckets</h1>
        <p>
          Don’t have an account? <Link to="/register">Register Now</Link>
        </p>
        <form onSubmit={handleLogin}>
          <div className="input_group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_submit">
            <button type="submit" disabled={loading}>
              Log in
            </button>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
