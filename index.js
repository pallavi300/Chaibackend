require('dotenv').config();
const express = require('express');

const app = express();
const port = 4000

app.get('/', (req, res) =>{
    res.send('hello world');
})

app.get('/twitter',(req, res) =>{
    res.send('Pallavi sahu')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hello pallavi</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})