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


  app.get('/hello/:id?',  (req, res) =>{
      if(req.params.id !== undefined){
    res.send ({
        status:200, 
        message:"Hello," + req.params.id
    })}
    else {
        res.send ({
            status:200, 
            message:"Hello," 
        })}
    
  })


  app.get('/search',  (req, res) =>{
    if(req.query.s !== undefined && req.query.s !== ""){
        res.send({status:200, message:"ok", data:req.query.s})
         
        
        } 
        else {
            res.send({status:500, error:true, message:"you have to provide a search"})
        }
    }
)
  

  app.listen(3000)