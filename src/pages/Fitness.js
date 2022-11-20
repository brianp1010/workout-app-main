import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


import{db} from '../firebase-config'
//addDoc enables users to add information
//doc allows us to create an instance of an object
//got rid of "connectFirestoreEmulator" from the bottom inport list, just in case
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

function Fitness() {
  const[newWorkoutName, setNewWorkoutName] = useState("")
  const[newReps, setReps] = useState(0)

  //callendar values  
  const [custom_workouts, setCustom_workouts]= useState([]);

  //creating a reference to the database collection (the entire thing)
  const customWorkoutsCollectionRef = collection(db, "custom_workouts")

  const createWorkoutName = async () =>{
    //takes in two things
    //1. the reference to the collection that we are talking about, customWorkoutsCollectionRef
    //2. takes in an object that contains the data that we are going to add to the collection
    //    add document to workout collection    (this area is the document value)                                                            
    await addDoc(customWorkoutsCollectionRef, {wo: newWorkoutName, reps: Number(newReps)})
  }

  //need to identify which document we need to update
  //to increase the reps
  const updateReps1 = async (id, reps) =>{
    
    //which workout we want to update the reps on
    const customWorkoutsDoc = doc(db, "custom_workouts", id);

    const newFields = {reps: reps + 1}

    //takes in a specific document, and an object containing the fields that you want to update from that document
    //1. for the first param, you dont want to use customWorkoutsCollectionRef becaucause customWorkoutsCollectionRef
    //... only references the whole collection, but we only want a part of that collection
    //2. udates the reps for the user doc, to the age of the new variable
    await updateDoc(customWorkoutsDoc, newFields)
  }

  //to decrease the reps
  const updateReps2 = async (id, reps) =>{
    const customWorkoutsDoc = doc(db, "custom_workouts", id);

    const newFields = {reps: reps - 1}

    await updateDoc(customWorkoutsDoc, newFields)
  }


  //delete the workout
  const deleteWorkout = async (id) =>{
    const customWorkoutsDoc = doc(db, "custom_workouts", id);
    await deleteDoc(customWorkoutsDoc);
  }

  useEffect(() =>{
    //async function created function inside of a use effect
    const getCustom_Workout = async () => {
      //can also use .catch or .then keywords
      const data = await getDocs(customWorkoutsCollectionRef)

      //to see logs, to return the the reps and workout of the user, not including id
      //... is the spreading operator, sets object to have all of the fields that they return
      //now to add more fields to the object, to get the id for this specific document
      //this is an array, like a user's array
      setCustom_workouts(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      
    };

    //then make it get this function
    getCustom_Workout()
  }, )


  return (
    //both placeholder onChange clicks relates to line 15
    <Container className="d-flex align-items-center 
    justify-content-center" style={{ minHeight: "100vh"}} >
  <div className="App">
    <h1 class="font-monospace lead text-center">Work Out List</h1>
    <input 
    placeholder = "Workout_Name..." 
    onChange={(event) => {
      setNewWorkoutName(event.target.value);
    }}
    />
    <input 
    placeholder = "Rep Amount..." 
    onChange={(event) => {
      setReps(event.target.value);
    }}
    />
    
    <button onClick={createWorkoutName}>Create Workout</button>

    {custom_workouts.map((custom_workout) => {
    //each div contains information about the custom workout
    return( 
    <div>
      {" "}
      <h3>Workout Name: {custom_workout.wo}</h3>
      <h3>Reps: {custom_workout.reps}</h3>
      <button onClick={()=>{updateReps1(custom_workout.id, custom_workout.reps)}}>Increase Reps</button>
      <button onClick={()=>{updateReps2(custom_workout.id, custom_workout.reps)}}>Decrease Reps</button>
      <button onClick={()=> {deleteWorkout(custom_workout.id);}}>Delete Workout</button>
      </div>
    );   
  })}

  </div>
  </Container>
  )
}


//render(<ReactCalendar />, document.querySelector('#root'));
export default Fitness;
