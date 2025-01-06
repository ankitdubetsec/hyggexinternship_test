import React, { useState } from "react";
import "./QuestionTab.css";

const QuestionTab = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="question-tab">
      <div className="question-text">
        A man walks 5 km toward south and then turns to the right. After walking
        3 km he turns to the left and walks 5 km. Now in which direction is he
        from the starting place?
      </div>
      <img
        src="https://res.cloudinary.com/dbtrc9jyk/image/upload/v1735582477/prepsaathi_problems/hw2b3crqo1f9hu89dac4.jpg"
        alt="Question Illustration"
        className="question-image"
      />
      <div className="image-caption">Question Image</div>
      <div className="options">
        {["West", "North-East", "South-West", "South"].map((option, index) => (
          <label
            key={index}
            className={`option-label ${
              selectedOption === option
                ? option === "South-West"
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
          >
            <input
              type="radio"
              name="question-option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
      {selectedOption && (
        <div
          className={`feedback ${
            selectedOption === "South-West"
              ? "correct-feedback"
              : "incorrect-feedback"
          }`}
        >
          {selectedOption === "South-West"
            ? "Correct Answer!"
            : "Incorrect Answer! The correct answer is South-West."}
        </div>
      )}
      <div className="action-buttons">
        <button className="left-button">Share My Solution</button>
        <button className="right-button">Next Question</button>
      </div>
    </div>
  );
};

export default QuestionTab;
