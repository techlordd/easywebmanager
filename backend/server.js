const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

app.use(express.json({extended: false}));
//Connect To Database
connectDB();

app.get("/", (req, res)=>{
    res.json("Hello world");
});

app.use('/api/posts', require('./api/posts'));
if(process.env.NODE_ENV === 'production'){

    app.use(express.static('../build'))
    
    app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'..','build','index.html'));
    });
    
    }
    


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));