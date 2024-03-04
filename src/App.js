import React, { useState } from "react";
///adding  a usestate a fucntion  , manage data which when changed shpuold read to the UI
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";
// import { ReactDOM } from "react";
import NewGoal from "./Components/GoalList/NewGoal/NewGoal";

const App = () => {
  ////usestate also returns something it returns 2 elements the latest state element and the sec is the one that allows us to update,rerender
  ///// the useState() used tells react that this the initial used state
  const [courseGoals, setCourseGoals] = useState([
    // const courseGoals = [
    { id: "cg1", text: "web technology" },
    { id: "cg2", text: "system design and analysis" },
    { id: "cg3", text: "discret maths" },
  ]);

  ////sending data from parent to child
  /////a callback function from the parent compo into the child compo ie NewGoal as the child component
  const addNewGoalHandler = (newGoal) => {
    ////we reach out to the courseGoal and push the new goal into the array via props(the props on line 22)and now lets pass it to new goals via props on line 26
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((preventCourseGoals) => {
      return preventCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      {/* the props ie onAddGoal passes just a pointer ie addNewGoalHandler to one array meaning our input will be exhibited as one div only */}
      {/* we pass it on the NewGoal compo because that is the child compo that recieves the data */}
      <NewGoal onAddGoal={addNewGoalHandler} />

      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
