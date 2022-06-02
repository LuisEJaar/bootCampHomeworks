console.log("May the Node be with you")

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.listen(3000, function() {
    console.log('listening on 3000')
})

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

// The endpoint is whatever is after the domain
// the callback is what happens when we receive a given
// endpoint. 
// app.get(endpoint, callback)

// app.get('/', function(req, res) {
//     res.send('Hello World')
// })

//Same as above, but more likely to see

app.get('/', (req, res) => {
    // res.send('Hello World')
    res.sendFile(__dirname + '/index.html')
})

// the res.sendFile lets you return a file

//The /quotes value in the form action attribute will trigger
//this post. 

//req body lets us see what was entered "request . body"
app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
  })

//mongo time!
const MongoClient = require('mongodb').MongoClient

let connectionString = 'mongodb+srv://LuisJaar:3fnDL9CTjnsrMFn@cluster0.jjrkk.mongodb.net/?retryWrites=true&w=majority'
//showing as a callback
// MongoClient.connect(connectionString, {
//     useUnifiedTopology: true
//   }, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//   })


//showing as a promise
MongoClient.connect(connectionString, { useUnifiedTopology: true })
.then(client => {
console.log('Connected to Database')
})
.catch(error => console.error(error))