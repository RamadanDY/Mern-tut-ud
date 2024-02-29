import React from 'react'
/// we will use props here bacause we will get the users list from the parent compo that will later on recieve the data from the backend
/// this is to display a list of users 
//// this Userslist compo will display the list of users we have and also whether a user has been found or not
import './UsersList.css'
import UserItem from './Useritem'



const UsersList = (props) => {
  
    //// the data we expect to get via props from the parent compo
    //// items is the name for this prop
    if (props.items.length === 0) {
        return (
            
            <div className='center'>
                <h2>No Users Found</h2>
            </div>
        );  
    }
    ///// this displays the users from another compo
    return(
        <ul className='users-list'>
            {props.items.map(user => {
                return(
                    ////we can specify what we want every user should have inside this compo
                    ///// the id={user.id} forwards the id of the user on a separate prop to the useritem
                    /////lets pass the users inside the users page 
                    <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
                )
            })}
        </ul>
    )
  
}

export default UsersList