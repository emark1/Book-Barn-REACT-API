const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

//We need cors so the browser will allow us to interact between sites, otherwise it will flag as a security risk
app.use(cors())
app.use(bodyParser.json())

//Array of book objects
let books = [
    {title: "1Q84", genre: "fiction", publisher: "Shinochosha", year: "2009", imageurl: "https://upload.wikimedia.org/wikipedia/en/b/b9/1Q84bookcover.jpg"},
    {title: "Brave New World", genre: "fiction", publisher: "Perennial", year: "1932", imageurl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg"}
]


//Respond with a json of the books array when a request is sent on /api/books
app.get('/api/books',(req,res) => {
    res.json(books)
})

app.post('/api/books',(req,res) => {

    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageurl = req.body.imageurl
  
    books.push({title: title, genre: genre, publisher: publisher, year: year, imageurl: imageurl})
    res.json({success: true, message: 'Book was added!'})
  })

//   app.post('/api/books',(req,res) => {

//     let title = req.body.title
//     let genre = req.body.genre
//     let publisher = req.body.publisher
//     let year = req.body.year
//     let imageurl = req.body.imageurl
  
//     books.splice({title: title, genre: genre, publisher: publisher, year: year, imageurl: imageurl})
//     res.json({success: true, message: 'Book was added!'})
//   })


app.listen(8080,() => {
    console.log('Server is running')
  })