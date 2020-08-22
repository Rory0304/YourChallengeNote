import React from "react";

function Challenge({ list, onToggle }) {
  return (
    <div className="challenge-list" style={{ cursor: "pointer" }}>
      <p onClick={() => onToggle(list.id)}>{list.title}</p>
      <p>{list.start.join("/")}</p>
      <p>{list.end.join("/")}</p>
    </div>
  );
}

function ChallengeList({ lists, onToggle }) {
  return (
    <>
      {lists.map((list) => (
        <Challenge list={list} onToggle={onToggle} key={list.id} />
      ))}
    </>
  );
}

export default ChallengeList;
