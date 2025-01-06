import React, { useState } from "react";
import "./Tab.css";
import QuestionTab from "./QuestionTab";
import SolutionTab from "./SolutionTab";
import HintsTab from "./HintsTab";
import SubmissionsTab from "./SubmissionsTab";

const Tabb = () => {
  const [activeTab, setActiveTab] = useState("Question");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Question":
        return <QuestionTab />;
      case "Solution":
        return <SolutionTab />;
      case "Hints":
        return <HintsTab />;
      case "Submissions":
        return <SubmissionsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {["Question", "Solution", "Hints", "Submissions"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Tabb;
