import React from 'react'
// import {Routes , Route} from 'react-router-dom'
/// the goal here is to output a list of users
/// now to pass it here we hv to import it here
import UsersList from '../Components/UsersList'
////// in this function we want to create a dummy users info but laster on we will integrate a backend for it


const User = () => {

  /// the dummy info USERS is an array of objects that represents each user
  const USERS =[
    {
      id: 'u1', 
      name: 'Max Schwarz' ,
      image: 
       '/my-app/src/images/passport pic.jpg', 
      places: 4,
    }
  ]

  return (
    ///// we then extract the items prop inside this component
    <UsersList items={USERS}/>
  )
}

export default User