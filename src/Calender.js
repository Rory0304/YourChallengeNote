import React from "react";

function CreateCalender({ list }) {
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { start, end } = list;
  const makeDay = dayList.map((day) => {
    return <th>{day}</th>;
  });

  const getLastdate = (date) => {
    if (date[0] % 4 === 0) {
      return leapYear[date[1] - 1];
    } else {
      return notLeapYear[date[1] - 1];
    }
  };

  const getFirstDay = (date) => {
    return new Date(date[0], date[1] - 1, 1).getDay();
  };

  const makeRows = (date) => {
    let startLastDate = getLastdate(date);
    let startFirstDay = getFirstDay(date);

    let result = [];
    let rows = [];
    let cells = [];

    while (startFirstDay > 0) {
      result.push(<td className="empty-day"> </td>);
      startFirstDay--;
    }

    for (let i = 1; i <= startLastDate; i++) {
      result.push(<td className="calender-day">{i}</td>);
    }

    result.forEach((row, index) => {
      if (index % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (index === result.length - 1) {
        rows.push(cells);
      }
    });

    return rows;
  };

  const startRows = makeRows(start);
  const endRows = makeRows(end);

  const MakeCalender = ({ date }) =>
    date.map((row) => {
      return <tr>{row}</tr>;
    });

  return (
    <div>
      <table>
        <thead>
          <tr>{makeDay}</tr>
        </thead>
        <tbody>
          <MakeCalender date={startRows} />
          <MakeCalender date={endRows} />
        </tbody>
      </table>
    </div>
  );
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
