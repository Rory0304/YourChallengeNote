import React, { useState, useRef, useCallback } from "react";
import ChallengeListForm from "./ChallengeListForm";
import ChallengeList from "./ChallengeList";
import Calender from "./Calender";

function Challenge() {
  const [showForm, setForm] = useState(false);

  const [inputs, setInputs] = useState({
    title: "",
    week: ""
  });

  const { title, week } = inputs;

  const [lists, setList] = useState([
    {
      id: 1,
      title: "코딩 테스트 100문제",
      start: [2020, 7, 1, 3],
      end: [2020, 7, 29, 3],
      week: 4,
      active: false
    },
    {
      id: 2,
      title: "영어 뉴스 따라 읽기",
      start: [2020, 7, 1, 3],
      end: [2020, 8, 19, 3],
      week: 6,
      active: false
    }
  ]);

  const nextId = useRef(3);

  const showListForm = () => setForm(!showForm);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );

  const onCreate = useCallback(() => {
    if (title && week) {
      let today = new Date();
      let end = new Date();
      end.setDate(today.getDate() + week * 7);

      const challenge = {
        id: nextId.current,
        title,
        start: [
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          today.getDay()
        ],
        end: [end.getFullYear(), end.getMonth(), end.getDate(), end.getDay()],
        week,
        active: false
      };

      setList((lists) => lists.concat(challenge));
      nextId.current += 1;
    } else {
      console.log("it is empty");
    }
    setInputs({
      title: "",
      week: ""
    });
  }, [title, week]);

  const onToggle = useCallback(
    (id) => {
      setList(
        lists.map((list) =>
          list.id === id ? { ...list, active: !list.active } : list
        )
      );
    },
    [lists]
  );

  return (
    <div className="">
      <h2>Challenge List</h2>
      <button onClick={showListForm}>+</button>
      {showForm ? (
        <ChallengeListForm
          showListForm={showListForm}
          title={title}
          onChange={onChange}
          onCreate={onCreate}
        />
      ) : null}
      <ChallengeList lists={lists} onToggle={onToggle} />
      <Calender lists={lists} />
    </div>
  );
}

export default Challenge;
