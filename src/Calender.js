import React from "react";

function CreateCalender({ list }) {
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayList = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const { start, end } = list;

  
  return <div>calender</div>;
}

function Calender({ lists }) {
  return (
    <div>
      {lists.map((list) =>
        list.active ? <CreateCalender list={list} key={list.id} /> : null
      )}
    </div>
  );
}
export default Calender;
