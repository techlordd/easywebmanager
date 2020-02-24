const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json({extended: false}));
//Connect To Database
connectDB();

app.get("/", (req, res)=>{
    res.json("Hello world");
});

app.use('/api/posts', require('./api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));