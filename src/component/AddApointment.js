import { BiArchive } from "react-icons/bi";

function AddApointment(){
  return (
    <div id="appoint">
        <h4><BiArchive style={{color:'#fff'}}/>예약하기</h4>
        <ul>
          <li>
            <label htmlFor="userName">집사명</label>
            <input type="text" id="userName"/>
          </li>
          <li>
            <label htmlFor="userChildren">아기명</label>
            <input type="text" id="userChildren"/>
          </li>
          <li>
            <label htmlFor="userDate">예약일</label>
            <input type="date" id="userDate"/>
          </li>
          <li>
            <label htmlFor="userTime">예약시간</label>
            <input type="time" id="userTime"/>
          </li>
          <li>
            <label htmlFor="userDes">기타설명</label>
            <textarea id="userDes" cols="30" rows="10" placeholder="기타설명"/>
          </li>
        </ul>
        <p><button type="submit">제출</button></p>
      </div>
  )
}

export default AddApointment;