const express = require('express');
const bodyParser = require('body-parser')
const { projectrouter } = require('./Routes/projectRoutes');

const app = express()

app.use(bodyParser.json());
app.use('/project', projectrouter);

app.use((err, req, res, next)=>{
    console.log(err);
    res.json({Error: err.message})
})

app.listen(4500, ()=>{
    console.log('listening on port 4500');   
})
