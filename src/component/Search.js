import { BiSearch } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

function DropDown(){
  return (
    <ul>
      <li>아기이름</li>
      <li>예약자명</li>
      <li>날짜</li>
    </ul>
  )
}
function Search (){
  return (
    <div id="search">
      <p>
        <BiSearch />
        <input type="text" defaultValue="search"/>
        <button type="button">정렬하기<BiCaretDown /></button>
      </p>
      <DropDown />
    </div>
  )
}

export default Search;