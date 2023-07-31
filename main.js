const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', function(req, res){
    res.json({message:"Hello, from backend"});
})
app.listen(PORT,()=> {
    console.log(`listening on port: ${PORT}`)
});