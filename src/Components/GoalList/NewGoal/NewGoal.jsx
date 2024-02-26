import React , {useState}from 'react'
import './NewGoal.css'

///// after passing it from the Appjs(ie the parent compo)  into the  child compo we can now recieve it here as props in the function NewGoal as showed below 
const NewGoal = (props) => {

  const [enteredText, setEnteredText] = useState('');


  //// this function passes data from the NewGoal to the Appjs
  const addGoalHandler = (event) =>{
    /// the preventDefault prevent the automatical loading
    event.preventDefault();

    ////// this is a dummy goal or its just to display any number 
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };

    ////instead of logging it into console we can just add the onAddGoal and also add the pass the pointer to a function which is newGoal as my argument 
    // console.log(newGoal);
    setEnteredText('');
    props.onAddGoal(newGoal);

  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value) ;

  };




  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
        <input type='text' value={enteredText} onChange={textChangeHandler}/>
        <button type='submit'>Ad d Goal</button>
    </form>
  )
}

export default NewGoal