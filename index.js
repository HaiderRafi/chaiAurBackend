// console.log("chai aur codeeee");
require('dotenv').config()   //configure .env

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("<h1>Hello Twitter</h1>")
})

app.get('/login',(req,res)=>{
    res.send("please login with yout credentials")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// commit add by command base