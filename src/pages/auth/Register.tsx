import { Link } from '@reach/router';
import React, { useState } from 'react';
import { useRegisterMutation } from '../../generated/graphql';
import styles from './index.module.scss';

interface Props {}

const Register: React.FC<Props> = () => {
  const [{ name, email, password }, setInput] = useState({ name: '', email: '', password: '' });
  const [registerMutation, { data, loading }] = useRegisterMutation();

  const handleRegister = async (event: any) => {
    event.preventDefault();
    try {
      await registerMutation({ variables: { name, email, password } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: any) => {
    event.persist();
    setInput((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  if (data) {
    console.log(data);
  }

  return (
    <div className={styles.auth_wrap}>
      <div className={styles.auth_box}>
        <h1>Create your Buckets</h1>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <form onSubmit={handleRegister}>
          <div className="input_group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your full name" onChange={handleInputChange} />
          </div>
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
