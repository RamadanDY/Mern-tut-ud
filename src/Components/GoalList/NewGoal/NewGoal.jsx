import React from 'react'
import './NewGoal.css'


const NewGoal = () => {

  //// this function passes data from the NewGoal to the Appjs
  const addGoalHandler = (event) =>{
    /// the preventDefault prevent the automatical loading
    event.preventDefault();
    

    const newGoal = {
      id: Math.random().toString(),
      text: 'My new goal'
    }
    console.log(newGoal)

  }




  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
        <input type='text' />
        <button type='submit'>Ad d Goal</button>
    </form>
  )
}

export default NewGoal