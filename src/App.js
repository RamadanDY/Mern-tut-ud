import React from "react";
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";
// import { ReactDOM } from "react";
import NewGoal from "./Components/GoalList/NewGoal/NewGoal";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "web technology" },
    { id: "cg2", text: "system design and analysis" },
    { id: "cg3", text: "discret maths" },
  ];
  /////a callback function from the parent compo into the child compo
  const addNewGoalHandler = (newGoal) => {
    ////we reach out to the courseGoal and push the new goal into the array via props(the props on line 22)
    courseGoals.push(newGoal);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      {/* the props ie onAddGoal passes just a pointer to one array meaning our input will be exhibited as one div only */}
      <NewGoal onAddGoal={addNewGoalHandler} />

      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
