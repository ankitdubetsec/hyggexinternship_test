import React from "react";
import "./SubmissionsTab.css"; // Import the updated CSS file

const submissions = [
  {
    id: 1,
    status: "Correct",
    date: "Dec 20, 2024",
    time: "3 ms",
    accuracy: "100%",
  },
  {
    id: 2,
    status: "Correct",
    date: "Dec 20, 2024",
    time: "1 ms",
    accuracy: "95%",
  },
  {
    id: 3,
    status: "Incorrect",
    date: "Jun 18, 2024",
    time: "8 ms",
    accuracy: "60%",
  },
  {
    id: 4,
    status: "Correct",
    date: "Jun 25, 2023",
    time: "12 ms",
    accuracy: "80%",
  },
  {
    id: 5,
    status: "Correct",
    date: "Jun 06, 2023",
    time: "12 ms",
    accuracy: "90%",
  },
];

const SubmissionsTab = () => {
  return (
    <div className="submissions-tab">
      <table className="submissions-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Date</th>
            <th>Time Taken</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td
                className={`status ${
                  submission.status === "Correct" ? "correct" : "incorrect"
                }`}
              >
                {submission.status}
              </td>
              <td>{submission.date}</td>
              <td>{submission.time}</td>
              <td>{submission.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionsTab;
