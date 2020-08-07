import React from "react";

function ChallengeListForm({ showListForm, onChange, onCreate, title }) {
  return (
    <div className="challenge-list-form">
      <input
        name="title"
        value={title}
        placeholder="enter your challenge"
        onChange={onChange}
      />

      <label>
        <input type="radio" name="week" value={4} onChange={onChange} />4 week
      </label>
      <label>
        <input type="radio" name="week" value={6} onChange={onChange} />6 week
      </label>
      <label>
        <input type="radio" name="week" value={13} onChange={onChange} />
        13 week
      </label>
      <button onClick={onCreate}>Add</button>
      <button onClick={showListForm}>Cancel</button>
    </div>
  );
}
export default ChallengeListForm;
