import React from "react";
const GoalList = props => {
    // console.log(props.goals )
    return(
        
            <ol className="goal-list">

                {props.goals.map(goal =>{
                    return (
                    <li key={goal.id}>goal.text</li>
                )})}
               {/* <li>web technology </li>
               <li>system design and analysis</li>
               <li>discret maths </li> */}
            </ol>
       

    )


}

export default GoalList;