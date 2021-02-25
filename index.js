const express = require('express') //เรียกใช้ express
const app = express()
app.use(express.json()) // for parsing application/json สำหรับเพื่อให้body ไม่เป็นค่าว่าง
let movies = []


app.get('/movies',(req,res) => {
    //input

    //process

    //output

    res.status(200).json(movies)
  
})



app.post('/movies',(req,res) => {
    //input ต้องการเก็บข้อมูลอะไร
    let title = req.body.titlemovie     
    let plot  = req.body.plotmovie
    let newGenres =req.body.Genres
    let director = req.body.directormovie
    let stars = req.body.starsmovie
    let rating =req.body.ratingMV


    let movieID = 0
   
    //keyvalue กำหนดค่า
    let newMovie = {
        titlemovie: title,
        plotmovie: plot,
        Genres:newGenres,
        directormovie:director,
        starsmovie:stars,
        ratingMV:rating
     }

     
    // console.log(`title: ${title}`)
    // console.log(`plot: ${plot}`)
    //process
    movies.push(newMovie) //เอาข้อมูลยัดลง ar
    
    //n-1
    movieID = movies.length - 1 //กำหนดให้ ar เริ่มจาก0 1-1=0 2-1=1
   


    //output
    res.status(201).json(movieID)
   
})
const port = 3000
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`))