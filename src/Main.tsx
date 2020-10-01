import { RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import './global.scss';
import App from './pages/app/App';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// routes
let LoginComponent = (_props: RouteComponentProps) => <Login />;
let AppComponent = (_props: RouteComponentProps) => <App />;
let RegisterComponent = (_props: RouteComponentProps) => <Register />;

const Main: React.FC = () => {
  return (
    <Router>
      <LoginComponent path="/login" />
      <RegisterComponent path="/register" />
      <AppComponent path="/" />
    </Router>
  );
};

export default Main;
