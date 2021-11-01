const express = require('express')
const app = express()
const connection = require('./database/database')

connection 
        .authenticate()
        .then(()=>{
            console.log("Db Connection!"); 
        }).catch((error) => {
            console.log(error)      
        })




app.post('/create',(req,res)=>{  //insert
        const name = req.body.name
        const age = req.body.age
        const country = req.body.country
        const position = req.body.position
        const wage = req.body.wage
        employees.create({
            employeename: name,
            employeeage: age,
            employeecountry: country,
            employeeposition: position,
            employeewage : wage 
    }).then(()=>{
            res.redirect("/")
    }).catch(error => {
        console.log("Error"+error)
    })
})

app.listen(3001, ()=>{
    console.log('Server on')
})      