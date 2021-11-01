const express = require('express')
const app = express()
const connection = require('./database/database')
const cors = require('cors')
const Employees = require('./models/employees')

connection 
        .authenticate()
        .then(()=>{
            console.log("Db Connection!"); 
        }).catch((error) => {
            console.log(error)      
        })

 
app.use(cors());



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.post('/create',(req,res)=>{  //insert
        const name = req.body.name
        const age = req.body.age
        const country = req.body.country
        const position = req.body.position
        const wage = req.body.wage
        Employees.create({
            name: name,
            age: age,
            country: country,
            position: position,
             wage : wage 
    }).then(()=>{
        res.sendStatus(200);
    }).catch(error => {
        
        console.log("Error"+error)
    })
})

app.listen(3001, ()=>{
    console.log('Server on')
})      