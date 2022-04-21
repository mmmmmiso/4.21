import React from 'react';
import ReactDOM from 'react-dom/client';
// component
import AddApointment from './component/AddApointment.js';

// source
import './index.css'
import { BiArchive } from "react-icons/bi";

function App(){
  return (
    <article>
      <h3><BiArchive style={{color:'#d47776'}}/> 예약시스템</h3>
      <AddApointment />
      <div id="list">
        <ul>
          <li>반복문</li>
        </ul>
      </div>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);