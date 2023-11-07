import express from "express";

const app = express()

app.get('/',(req,res)=>{
    res.send('server is ready')
})

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'First Joke'            
        },       
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another Joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'            
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'           
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'           
        }        
    ]
    res.send(jokes)
})

const port1 = process.env.port || 5000;

app.listen(port1,()=>{
    console.log(`serve at http://locallhost:${port1}`);
})