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
  // 6
  {
    que: "Are you using open-source technologies for your hosting environment? If yes, which ones?",
    ans: [
      { c: 3, a: "Yes, we use [insert open source technologies]" },
      { c: 2, a: "Yes, we use some OpesSource services" },
      { c: 1, a: "No, we don't use open-source technologies" },
    ],
  },
  // 7
  {
    que: "Are you looking to modernize your application development processes and infrastructure?",
    ans: [
      { c: 3, a: "Yes, we're actively exploring options for modernization" },
      { c: 2, a: "We may need some help planning our modernization approach" },
      { c: 1, a: "No, we're not currently interested in modernization" },
    ],
  },
  {
    que: "Are you looking to leverage the power of cloud-based infrastructure for your applications?",
    ans: [
      { c: 3, a: "Yes, we're interested in moving to the cloud" },
      { c: 2, a: "We already use a hybrid approach" },
      { c: 1, a: "No, we prefer to stay on-premises" },
    ],
  },
  // 9
  {
    que: "Do you have a comprehensive strategy for adopting the cloud?",
    ans: [
      { c: 3, a: "Yes, we have a detailed plan in place" },
      { c: 2, a: "We are currently in the process of adopting our strategy" },
      {
        c: 1,
        a: "No, we're still figuring out how to approach cloud adoption",
      },
    ],
  },
  // 10
  {
    que: "How do you currently deploy, manage, and upgrade your Red Hat solutions?",
    ans: [
      { c: 3, a: "We have an in-house team that handles these tasks" },
      { c: 2, a: "We work with a third-party provider for these tasks" },
      { c: 1, a: "We don't currently use Red Hat solutions" },
    ],
  },
  {
    que: "Are you familiar with Red Hat Satellite deployment management capabilities?",
    ans: [
      { c: 3, a: "Yes, we're familiar with them and use them" },
      { c: 2, a: "Yes, we are familiar with them but do not use them" },
      { c: 1, a: "No, we're not familiar with them" },
    ],
  },
  {
    que: "Are you using Red Hat OpenShift for container orchestration and application development?",
    ans: [
      { c: 3, a: "Yes, we're using it" },
      { c: 2, a: "We are using an opensource container/ alternative solution" },
      { c: 1, a: "No, we're not using it" },
    ],
  },
  {
    que: "Do you have a monitoring and support system in place for your hosting environment?",
    ans: [
      { c: 3, a: "No, we don't have a formal system in place" },
      { c: 2, a: "Yes, we have a comprehensive opensource system in place" },
      { c: 1, a: "Yes, we have a comprehensive enterprise system in place" },
    ],
  },
  {
    que: "Have you conducted a CIS benchmark and remediation for your hosting environment?",
    ans: [
      { c: 3, a: "Yes, we perform regular benchmarking and remediation" },
      { c: 2, a: "We have performed it in the past, but not regularly" },
      { c: 1, a: "No, we have not conducted any benchmarking or remediation" },
    ],
  },

  {
    que: "How confident are you in your ability to manage and support your hosting environment in the long term?",
    ans: [
      { c: 4, a: "Very confident" },
      { c: 3, a: "Somewhat confident" },
      { c: 2, a: "Not very confident" },
      { c: 1, a: "Not confident at all" },
    ],
  },
  {
    que: "What is your budget for hosting and infrastructure services?",
    ans: [
      { c: 1, a: "Less than $1000/month" },
      { c: 2, a: "$1000-5000/month" },
      { c: 3, a: "$5000-10000/month" },
      { c: 4, a: "More than $10000/month" },
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
  const [msj, setMsj] = React.useState(true);
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
        <div>
          {msj ? (
            <div>
              <p>You have scored {marks} marks</p>
              <div style={{ padding: "5%" }}>
                <button
                  className="button_1"
                  style={{ width: "50%", padding: "10px 20px" }}
                  onClick={() => {
                    window.alert("You will get the datasheet");
                    setMsj(false);
                  }}
                >
                  Download Datasheet
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p>Thanking Message</p>
            </div>
          )}
        </div>
      )}

      {/* <DataHandle /> */}
    </div>
  );
}
