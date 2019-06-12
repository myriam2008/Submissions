const express = require('express')
const app = express()

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


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
  


app.get('/movies/create', (req, res) =>{

})

app.get('/movies/read', (req, res) => {
    res.status(200).send({
        status:200,
        data:movies
    })
  });
  
  app.get('/movies/update', (req, res)=>{})
  app.get('/movies/delete', (req, res)=>{})


  app.listen(3000)