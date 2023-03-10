import React from "react";
import PageTitle from "./Components/PageTitle";
import Quiz from "./Pages/Quiz";
import THanking from "./Pages/THanking";
import UserDetails from "./Pages/UserDetails";

export default function Design() {
  const [gotUserDetails, setgotUserDetails] = React.useState(false);
  const [answered, setanswered] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  return (
    <div className="page">
      {!gotUserDetails ? (
        <UserDetails
          setgotUserDetails={setgotUserDetails}
          setUserData={setUserData}
        />
      ) : (
        <div>
          <PageTitle />
          {!answered ? (
            <Quiz
              setanswered={setanswered}
              userData={userData}
              setUserData={setUserData}
            />
          ) : (
            <THanking userData={userData} />
          )}
        </div>
      )}
    </div>
  );
}
