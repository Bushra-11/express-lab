// imports
const express = require("express") //importing express package
const app = express() // creates a express application


app.use(express.static('public')) // serves all static files from public folder






// Routes go here
app.get('/test',(req,res)=>{
    res.send('<p>Success!</p>') 
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html') 
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about.html') 
})









app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000
