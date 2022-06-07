
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from './Details';
import { useState } from 'react'

const AddStudent = () => {
  const [Name, setName] = useState("")
  const [Age, setAge] = useState("")
  const [Course, setCourse] = useState("")
  const [Batch, setBranch] = useState("")
  const [students, setStudents] = useContext(store)


  const ChangeHandler4 = (e) => {
    setBranch(e.target.value)

  }

  const SubmitHandler = () => {


    setStudents([...students, { Name: Name, Age: Age, Course: Course, Batch: Batch, id: new Date().getTime().toString() }])


  }

  return (
    <div>


      <div className='Add_details_container'>
        <div><label>Name:</label>
          <input id="name" type="text" name='name' value={Name} onChange={(e) => {
            setName(e.target.value)

          }} /></div>
        <div><label>Age:</label>
          <input id="age" type="text" name='age' value={Age} onChange={(e) => {
            setAge(e.target.value)

          }} /></div>
        <div> <label>Course:</label>
          <input id="course" type="text" name='course' value={Course} onChange={(e) => {
            setCourse(e.target.value)

          }} />

        </div>

        <div>
          <label>Batch:</label>
          <input id="branch" type="text" name='batch' value={Batch} onChange={ChangeHandler4} /></div>
      </div>

      <div className='button_ctn'>

        <Link className='button' to="/student">Cancel</Link>
        <Link className='buttons' to="/student" onClick={SubmitHandler}>Submit</Link>

      </div>

    </div>
  )
}

export default AddStudent