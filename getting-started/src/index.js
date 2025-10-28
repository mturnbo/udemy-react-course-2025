import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Greeting = () => <h2>Hello Marcus</h2>;

root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
