import Axios from 'axios'
import './listar.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'

function  Listar() {
    const [employeeList, setEmployeeList] = useState([])
    const [click, setClick] = useState(false)
    

   function list (){
    
    Axios.get("http://localhost:3001/listar").then((response)=>{
        if(click){
            setEmployeeList([])
            setClick(false)
         }else{ 
        setEmployeeList(response.data)
        console.log(response)
        setClick(true)
    } 
        
    });
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
            <Link className="link" to="/Deletar">Deletar</Link>
          </li>
          <li>
            <Link className="link" to="/Atualizar">Atualizar</Link>
          </li>
        </ul>
        </nav>
    </header>
    </div>
    <section>
    <button onClick={list}> List Devs</button>

   <div className="tablediv">   
       <div> <h3>Name</h3>
        <h3>Age</h3>
        <h3>Country</h3>
        <h3>Position</h3>
        <h3>Wage</h3>
        </div>
        {employeeList.map((val, key)=>{
          return <div className="table">
          <h3>{val.name}</h3>
          <h3>{val.age}</h3>
          <h3>{val.country}</h3>
          <h3>{val.position}</h3>
          <h3>{val.wage}</h3>
          
          </div>
        
          
                  
                
                
                
                
        })}
        </div>  
        
         
    </section>
   </div>
  );

  }

export default Listar;