import React from 'react';
import ReactDOM from 'react-dom/client';
// component

// source
import './index.css'

function App(){
  return (
    <article>
      welcome
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);