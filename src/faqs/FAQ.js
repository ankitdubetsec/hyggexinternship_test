import React, { useState } from "react";
import "./FAQ.css"; // Import CSS file for styling

function FAQ() {
  // Define state for active question
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Data for FAQs - array of objects containing questions and answers
  const faqs = [
    {
      id: 1,
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      question: "How do education flashcards work?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    // Add more FAQs as needed
  ];

  // Function to toggle active question
  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null); // If clicked question is already active, close it
    } else {
      setActiveQuestion(id); // If clicked question is not active, make it active
    }
  };

  return (
    <div className="faq-container">
      <span
        style={{
          width: "676px",
          height: "39px",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "32px",
          lineHeight: "39px",
          background: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        Hints
      </span>
      <br></br>
      <br></br>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <div
            className={`faq-question ${
              faq.id === activeQuestion ? "active" : ""
            }`}
            onClick={() => toggleQuestion(faq.id)}
          >
            {faq.question}
            {/* <i
              className={"fa fa-angle-down"}
              style={{ position: "absolute", left: "620px" }}
            ></i> */}
          </div>

          {faq.id === activeQuestion && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
