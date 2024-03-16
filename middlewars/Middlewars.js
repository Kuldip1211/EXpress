const express = require('express');

const app = express();

app.get('/health-checkup', (req, res) => {
 const username = req.headers.username;
 const password = req.headers.password;
 const kidneyid = req.headers.kidneyid;


 if(username != "kuldeep" || password != "pass"){
  res.status(400).json({"msg" : "somthing up with inputs"})
  return
 }

 if(kidneyid != 1 && kidneyid != 2){
  res.status(400).json({"msg" : "somthing with inputs"})
  return
 }

 res.json({
  "msg" : "your kidney is fine"
 })

})

app.listen(3000);