const express = require('express') //เรียกใช้ express
const app = express()
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
app.use(express.json()) // for parsing application/json สำหรับเพื่อให้body ไม่เป็นค่าว่าง

const url = 'mongodb+srv://SuperAdmin:d961d955*@cluster0.zgoyb.mongodb.net/buflix?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true ,useUnifiedTopology: true});
let db,moviesCollection
//connect
async function connect() {
    await client.connect()
     db=client.db('buflix')
    moviesCollection = db.collection('movies')
}
connect()







app.get('/movies', async (req,res) => {
    //input

    //process
    
    const cursor = await moviesCollection.find({}) 
    const result = await cursor.toArray()
    //output

    res.status(200).json(result)
  
})

app.get('/movies/:id', async (req,res) => {
    //input
    let id = req.params.id
    // let movie = {}
    //process
    // movie = movies[id]

    const movie = await moviesCollection.findOne({ _id: ObjectID(id) })
    //output
    res.status(200).json(movie)

})


app.post('/movies', async (req,res) => {
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
    const result = await moviesCollection.insertOne(newMovie) //insert data
    // movies.push(newMovie) //เอาข้อมูลยัดลง ar
    
    //n-1
    // movieID = movies.length - 1 //กำหนดให้ ar เริ่มจาก0 1-1=0 2-1=1
    movieID= result.insertedId //insert ID


    //output
    res.status(201).json(movieID)
   
})
const port = 3000
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`))