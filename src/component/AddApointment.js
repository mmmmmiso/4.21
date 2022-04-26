import {useState} from 'react';
import { BiArchive } from "react-icons/bi";

function AddWrite({toggleForm,formData,setFormData,formDataPublish}){
  if(!toggleForm){
    return null
  }
  return (
    <>
      <ul>
        <li>
          <label htmlFor="userName">집사명</label>
          <input 
            type="text" id="userName"
            onChange ={(event) => {
              setFormData({...formData,ownerName:event.target.value})
            }}
          />
        </li>
        <li>
          <label htmlFor="userChildren">아기명</label>
          <input
            type="text" id="userChildren"
            onChange ={(event) => {
              setFormData({...formData,petName:event.target.value})
            }}
          />
        </li>
        <li>
          <label htmlFor="userDate">예약일</label>
          <input type="date" id="userDate"
          onChange ={(event) => {
            setFormData({...formData,aptDate:event.target.value})
          }}/>
        </li>
        <li>
          <label htmlFor="userTime">예약시간</label>
          <input type="time" id="userTime"
          onChange ={(event) => {
            setFormData({...formData,aptTime:event.target.value})
          }}/>
        </li>
        <li>
          <label htmlFor="userDes">기타설명</label>
          <textarea id="userDes" cols="30" rows="10" placeholder="기타설명"
          onChange ={(event) => {
            setFormData({...formData,aptNotes:event.target.value})
          }}/>
        </li>
      </ul>
      <p>
        <button type="submit">예약하기</button>
      </p>
    </>
  )
}
function AddApointment(){
  const clearData = {
    petName : '',
    ownerName : '',
    aptNotes : '',
    aptDate : ''
  }
  let [toggleForm,setToggleForm] = useState(false);
  // form 데이터 생성
  let [formData,setFormData] = useState(clearData);

  function formDataPublish(){
    const formDataInfo = {
      // id : lastId + 1,
      petName : formData.petName,
      ownerName : formData.ownerName,
      aptNotes : formData.aptNotes,
      aptDate : formData.aptDate +' '+ formData.aptTime
    }
    onSendAppointment(formDataInfo)
    setFormData(clearData)
    setToggleForm(!toggleForm)
  }

    return (
      <div id="appoint">
        <h4 onClick = {
          () => {setToggleForm(!toggleForm)}
        }><BiArchive style={{color:'#fff'}}/>예약하기</h4>
      <AddWrite 
        toggleForm = {toggleForm}
        formData = {formData}
        formDataPublish = {formDataPublish}
        setFormData = {setFormData} />
    </div>
  )
}

export default AddApointment;
// if문 말고 삼항연산자도 가능
// toggleForm && <AddWrite />