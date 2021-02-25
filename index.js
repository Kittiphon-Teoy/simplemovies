const express = require('express')
const app = express()
app.use(express.json()) // for parsing application/json
let movies = []

app.get('/movies',(req,res) => {
    //input

    //process

    //output

    res.status(200).json(movies)

})



app.post('/movies',(req,res) => {
    //input
    let title = req.body.titlemovie     
    let plot  = req.body.plotmovie
    let movieID = 0
    
    //keyvalue
    let newMovie = {
        titlemovie: title,
        plotmovie: plot
    }
    // console.log(`title: ${title}`)
    // console.log(`plot: ${plot}`)
    //process
    movies.push(newMovie)
    //n-1
    movieID = movies.length - 1



    //output
    res.status(201).json(movieID)

})
const port = 3000
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`))