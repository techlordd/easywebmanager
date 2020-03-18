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

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));