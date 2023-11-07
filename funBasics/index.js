// require('dotenv').config()
// const express = require('express')
import 'dotenv/config'
import express from 'express'

// const { DotenvConfigOptions } = pkg;
let app = express()

app.get('/',(req,res) => {
    res.send('<h2> trying out myslef for the first time </h2>')
})

app.get('/home',(req,res) => {
    res.send('<h2> homepage </h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`listening to port number ${process.env.PORT}`);
})