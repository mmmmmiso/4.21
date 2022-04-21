import React from 'react';
import ReactDOM from 'react-dom/client';
// component
import AddApointment from './component/AddApointment';
import Search from './component/Search';
import AddInfo from './component/Addinfo';

// source
import './index.css'
import { BiArchive } from "react-icons/bi";
import appointData from './data.json';

function App(){
  return (
    <article>
      <h3><BiArchive style={{color:'#d47776'}}/> 예약시스템</h3>
      <AddApointment />
      <Search />
      <div id="list">
        <ul>
          {
            appointData.map(item => (
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