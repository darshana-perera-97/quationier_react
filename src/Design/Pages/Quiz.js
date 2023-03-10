import React from "react";
import SingleQue from "../Components/SingleQue";
import DataHandle from "../Data/DataHandle";
const questionSet = [
  {
    que: "What is your current method of hosting services?",
    ans: [
      { c: 1, a: "Shared Hosting" },
      { c: 2, a: "Dedicated hosting" },
      { c: 3, a: "Cloud hosting" },
      { c: 4, a: "Hybrid hosting" },
      { c: 5, a: "On-premises hosting" },
    ],
  },
  {
    que: "How long have you been using this method?",
    ans: [
      { c: 0, a: "We are planning our strategy" },
      { c: 1, a: "Less than 1 year" },
      { c: 2, a: "1-3 years" },
      { c: 3, a: "3-5 years" },
      { c: 4, a: "More than 5 years" },
    ],
  },
];

export default function Quiz(prop) {
  const [marks, setMarks] = React.useState(0);
  const arrLength = questionSet.length;
  const [n, setN] = React.useState(+0);
  // console.log(prop);
  return (
    <div>
      {arrLength > n ? (
        <SingleQue
          val={questionSet[n]}
          num={n}
          set={setN}
          marks={marks}
          setMarks={setMarks}
          userData={prop.userData}
          setUserData={prop.setUserData}
          setanswered={prop.setanswered}
        />
      ) : (
        <p>You have scored {marks} marks</p>
      )}

      {/* <DataHandle /> */}
    </div>
  );
}
