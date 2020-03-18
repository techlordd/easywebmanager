const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json({extended: false}));
//Connect To Database
connectDB();

app.get("/", (req, res)=>{
    res.json("Hello world");
});

app.use('/api/posts', require('./api/posts'));


app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });




app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));