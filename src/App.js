import React from "react";
import "./App.css";
import GoalList from "./GoalList";
// import { ReactDOM } from "react";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "web technology" },
    { id: "cg2", text: "system design and analysis" },
    { id: "cg3", text: "discret maths" },
  ];
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>

      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
