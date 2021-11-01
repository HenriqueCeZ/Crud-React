import './App.css';
import {useState} from 'react'
import Axios from 'axios'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage]  = useState(0);
  function addEmployee (){
    Axios.post("http://localhost:3001/create",{name:name,age:age,country:country,position:position,wage:wage}).then(response =>{
      if(response.status === 200){
          alert("successful registration!")
          
      }
  }).catch(err =>{
      (console.log(err))
  })

  }
 

  return (
  <div className="container">
    <div className="form">
    <label htmlFor="">Name: </label>
    <input type="text" onChange={(event) =>{setName(event.target.value)}} />
    <label htmlFor="">Age: </label>
    <input type="number" onChange={(event) =>{setAge(event.target.value)}}  />
    <label htmlFor="">Country: </label>
    <input type="text" onChange={(event) =>{setCountry(event.target.value)}}  />
    <label htmlFor="">Position: </label>
    <input type="text" onChange={(event) =>{setPosition(event.target.value)}}  />
    <label htmlFor="">Wage (year): </label>
    <input type="number" onChange={(event) =>{setWage(event.target.value)}} />
    <button onClick={addEmployee}> Add Employee</button>
    </div>
  </div>
  );
}


export default App;
