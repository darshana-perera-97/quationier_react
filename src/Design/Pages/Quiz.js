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
  {
    que: "Are you experiencing any issues or challenges with your current hosting method?",
    ans: [
      { c: 2, a: "Yes" },
      { c: 1, a: "No" },
    ],
  },
  {
    que: "What is the main challenge in your current operation?",
    ans: [
      { c: 0, a: "No apparent issues in our current operation" },
      { c: 3, a: "DevOps/ Cyber Security" },
      { c: 2, a: "Building and maintaining a competent team" },
      { c: 1, a: "Capacity Planning and performance management" },
      { c: 4, a: "Cost management and containment" },
    ],
  },
  {
    que: "How do you manage security and compliance in your hosting environment?",
    ans: [
      {
        c: 1,
        a: "We have a third-party security team/ experts that manage these aspects",
      },
      {
        c: 2,
        a: "We have a dedicated security team that manages these aspects",
      },
      { c: 3, a: "We use third-party security tools" },
      {
        c: 4,
        a: "We use 3rd party software that is already security certified",
      },
      { c: 5, a: "We don't have a formal process in place for this" },
    ],
  },
  // {
  //   que: "",
  //   ans: [
  //     { c: , a: "" },
  //     { c: , a: "" },
  //     { c: , a: "" },
  //     { c: , a: "" },
  //     { c: , a: "" },
  //   ],
  // },
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
