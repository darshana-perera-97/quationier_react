import React from "react";
import companyLogo from "./hsenidMobile-logo-2018-fullcolor-small.png";

export default function PageTitle() {
  return (
    <div>
      <img src={companyLogo} alt="hSenid Mobile Solutions main logo" />
      <h1 className="page-main-title">
        <span className="redhat-logo">Redhat</span> Service Questionnaire
      </h1>
      <div className="horizonatal-line"></div>
    </div>
  );
}
