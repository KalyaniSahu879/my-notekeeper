const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const notes = require('./data.js');
cors();
app.get('/' , (req,res)=>{
    res.send("Api is started");
})
app.get('/api/notes' , (req,res)=>{
    res.json(notes);
})
app.get('/api/notes/:id' , (req,res)=>{
    const note = notes.find((n)=>n._id === req.params.id );
    res.send(note);
})



const port = process.env.PORT || 5000;

app.listen(port , (console.log(`server started at ${port}`)))