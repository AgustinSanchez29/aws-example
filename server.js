const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hi, now on express and html</h1>')
})

app.listen(8080,(console.log(`listen on port 8080`)));