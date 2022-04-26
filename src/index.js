import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// component
import AddApointment from './component/AddApointment';
import Search from './component/Search';
import AddInfo from './component/Addinfo';

// source
import './index.css'
import { BiArchive } from "react-icons/bi";
// import appointData from './data.json';

function App(){

  // state 설정
  let [appointmentList,setAppointmentList] = useState([])
  // search
  let [query,setQuery] = useState('')
  const filterAppointment = appointmentList.filter(
    item => {
      return(
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase())
      )
    }
  )
  // callback
  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppointmentList(data))
  },[])
  // effect
  useEffect(() => {fetchData()},[fetchData])

  return (
    <article>
      <h3><BiArchive style={{color:'#d47776'}}/> 예약시스템</h3>
      <AddApointment />
      <Search
      query = {query}
      onQueryChange = {myQuery => setQuery(myQuery)} />
      <div id="list">
        <ul>
          {
            filterAppointment.map(appointment => (
              <AddInfo
                key={appointment.id}
                appointment={appointment}
                onDelectAppointment = {
                  appointmentId =>
                  setAppointmentList(appointmentList.filter(
                    appointment => appointment.id !== appointmentId
                  ))
                }
              />
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