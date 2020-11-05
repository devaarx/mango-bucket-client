import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
// import * as serviceWorker from './serviceWorker';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
