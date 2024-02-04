import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Location from './location'
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <GoogleOAuthProvider clientId="228169642436-ubkt87vt73ipe8uflquob3549jg6s43q.apps.googleusercontent.com">    
     <App/>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
