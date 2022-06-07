import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {store} from './Details';


const Student = () => {
  const [student] = useContext(store)
  return (
    <div>
        <div className='sub_head'><h2>Students Details</h2>
    <Link className='btn' to="/AddStudent">Add New Student</Link></div>
    <div className='table_data'>
    <table className="table" >
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  </thead>
  <tbody>
    {student.map((student)=>(<tr key={student.id}>
      <td>{student.Name}</td>
      <td>{student.Age}</td>
      <td>{student.Course}</td>
      <td>{student.Batch}</td>
      <td><Link to="/AddStudent">Edit</Link></td>
    </tr>
    ))}
    
      
   
  </tbody>
</table>
</div>
    
    
    </div>
  )
}

export default Student;