const express = require('express');
const app = express();
const axios = require('axios');

// Replace the URL with the API endpoint you want to fetch data from
const apiUrl = 'https://qanasneaker.online';

const PORT = process.env.PORT || 5000;

const reqestAfterMinutes = 14;

const reqestAfterMiliSeconds = reqestAfterMinutes * 60 * 1000;
console.log("🚀 ~ file: main.js:13 ~ reqestAfterMiliSeconds:", reqestAfterMiliSeconds)

app.get('/', function(req, res){
    res.json({message:"Hello, from backend"});
})

function CallToQanaSneaker () {
    // Call 
    axios.get(apiUrl)
    .then(response => {
      // Handle the response data
      console.log(response.status);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
}


app.listen(PORT,()=> {
    console.log(`listening on port: ${PORT}`);
    setInterval(CallToQanaSneaker,reqestAfterMiliSeconds) 
});