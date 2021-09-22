
const mockAPIResponse = require('./mockAPI.js')
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const express = require("express");
const bodyParser=require('body-parser');
const PORT = 8081
const app = express();
app.use(express.static("dist"));
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
const url={nam:""}
app.post("/url",(req,res)=>{
  console.log("hi")
  url.nam=req.body.url
    console.log(req.body.url)
    console.log("send data")
    console.log(req.body)
})
app.get("/data" ,async (req,res)=>{
  console.log("post...")
  const key ="c8e8fc05c827d61e02ad3b4932c4c6e9"
  try {
    const r= await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url.nam}&lang=en`)
    const { agreement, subjectivity, confidence, irony } = r.data
    console.log(agreement, subjectivity, confidence, irony)
    const alldata ={
      "agreement":agreement, 
      "subjectivity":subjectivity, 
      "confidence":confidence,
       "irony":irony
    }
    res.send({ agreement, subjectivity, confidence, irony })
    console.log(alldata)
  }catch {
    console.log("data not valeted")
  }
})



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}...`)
})

