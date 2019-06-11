const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('OK'))



app.get('/test', (req, res) => {
    res.status(200).send({
        status:200,
        message:"ok"
    })
  });
  var today = new Date();
  var Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  app.get('/time', (req, res) => {
      
    res.status(200).send({
        status:200,
        message:Time
    })
  });


  app.listen(3000)