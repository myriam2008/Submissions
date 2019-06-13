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
        status: 200,
        message: "ok"
    })
    });
var today = new Date();
var Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
app.get('/time', (req, res) => {

    res.status(200).send({
        status: 200,
        message: Time
    })
});


app.get('/hello/:id?', (req, res) => {
    if (req.params.id !== undefined) {
        res.send({
            status: 200,
            message: "Hello," + req.params.id
        })
    }
    else {
        res.send({
            status: 200,
            message: "Hello,"
        })
    }

})


app.get('/search', (req, res) => {
    if (req.query.s !== undefined && req.query.s !== "") {
        res.send({ status: 200, message: "ok", data: req.query.s })


    }
    else {
        res.send({ status: 500, error: true, message: "you have to provide a search" })
    }
}
)



app.get('/movies/create', (req, res) => {

})

app.get('/movies/read', (req, res) => {
    res.status(200).send({
        status: 200,
        data: movies
    })
});

app.get('/movies/update', (req, res) => { })
app.get('/movies/delete', (req, res) => { })


app.get('/movies/read/:tag?', (req, res) => {
    TAG = req.params.tag


    if (TAG == "bydate") {
        res.send({
            status: 200, data: movies.sort(function (a, b) { return a.year - b.year })
        })
    }


    else if (TAG == "byrating") {
        res.send(
            {
                status: 200,
                data: movies.sort(function (a, b) { return b.rating - a.rating })
            })
          }
         else if (TAG == "bytitle") {


                 res.send({
                 status: 200, data:
                    movies.sort(function (a, b) {
                    var x = a.title.toLowerCase();
                    var y = b.title.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                })
        })
    }
}
)

app.get('/movies/read/id/:ID', (req, res) =>
{ 
var s = req.params.ID
    if  (s -1 > 0 && s-1 < movies.length) { 
        res.send({ status:300, data:movies[s-1] })
    } 
        else{ res.send( {status:404, error:true, 
            message:'the movie <id> does not exist'} ) }}) ;



            app.get("/movies/create", (req, res) => {
              if (
                req.query.title !== undefined &&
                parseInt(req.query.year) !== undefined &&
                parseInt(req.query.rating) !== undefined
              ) {
                movies.push({
                  title: req.query.title,
                  year: parseInt(req.query.year),
                  rating: parseInt(req.query.rating)
                });
                res.send({ status: 200, data: movies });
                if (req.query.rating === "") {
                  req.query.rating = 4;
                }
              } else {
                res.send({
                  status: 403,
                  error: true,
                  message:
                    "you cannot create a movie without providing a title and a year"
                });
              }
            });







app.listen(3000, () => console.log('listinig on port 3000'))