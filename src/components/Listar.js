import Axios from 'axios'
import './listar.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'

function  Listar() {
    const [employeeList, setEmployeeList] = useState([])
   
    
    

  
    
    Axios.get("http://localhost:3001/listar").then((response)=>{
       
         setEmployeeList(response.data)
       
     
})

   
function deleteRow(id){
  
  Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{

    setEmployeeList(employeeList.filter((val)=>{
      return val.id !== id
    }))
      alert("deleted employee!")
  }).catch(err =>{
      console.log(err);  
  })
      


}





  return (
  <div className="container">
   <div className="header">
    <header>
        <nav>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/Atualizar">Atualizar</Link>
          </li>
        </ul>
        </nav>
    </header>
    </div>
    <section>
   

   <div className="tablediv">   
       
        {employeeList.map((val, key)=>{
          return <div className="table">
          <h3>Name: {val.name}</h3>
          <h3>Age: {val.age}</h3>
          <h3>Country: {val.country}</h3>
          <h3>Position: {val.position}</h3>
          <h3>Wage: {val.wage}</h3>
          <button onClick={function(){deleteRow(val.id)}}>Deletar linha</button>
          
         
          
          </div>
          
          
        
          
                  
                
                
                
                
        })}
        
        </div>  
        
         
    </section>
   </div>
  );

  }

export default Listar;