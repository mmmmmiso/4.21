import React from 'react';
import ReactDOM from 'react-dom/client';
// component
import AddApointment from './component/AddApointment';
import Search from './component/Search';
import AddInfo from './component/Addinfo';
import appointmentList from './data.json';

// source
import './index.css'
import { BiArchive } from "react-icons/bi";

function App(){
  return (
    <article>
      <h3><BiArchive style={{color:'#d47776'}}/> 예약시스템</h3>
      <AddApointment />
      <Search />
      <div id="list">
        <ul>
          {
            appointmentList.map(item => (
              <AddInfo key={item.id} appointment={item}/>
            ))
          }
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