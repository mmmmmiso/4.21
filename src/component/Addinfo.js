import { BiTrash } from "react-icons/bi";
import Appointment from '../data.json';

function AddInfo (){
  return (
    <li>
      <dl>
        <dt>이름</dt>
        <dd className="owner"><dfn>예약자명 :</dfn></dd>
        <dd className="desc">설명</dd>
        <dd className="date">날짜</dd>
      </dl>
      <p><button type="button"><BiTrash /></button></p>
    </li>
  )
}

export default AddInfo;