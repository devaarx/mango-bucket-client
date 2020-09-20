import { RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import App from './components/app/App';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

// routes
let LoginComponent = (_props: RouteComponentProps) => <Login />;
let AppComponent = (_props: RouteComponentProps) => <App />;
let SignupComponent = (_props: RouteComponentProps) => <Signup />;

function Main() {
  return (
    <Router>
      <LoginComponent path="/login" />
      <SignupComponent path="/signup" />
      <AppComponent path="/" />
    </Router>
  );
}

export default Main;
