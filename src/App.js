import React, { useState } from 'react'; 
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [registeredStudents, setregisteredStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: name,
      age: age
    };
    setregisteredStudents([...registeredStudents, newStudent]);
    setName("");
    setAge("");
  };

  return (
    <div className="App">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Register</button>
      </form>
      <h2>Registered Students:</h2>
      <ul>
        {registeredStudents.map((student, index) => (
          <li key = {index}>
            {student.name} - Age: {student.age}
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
