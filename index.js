// require the express package
// don't need to do  "./node_modules/express/index.js" because index.js is by default file

const express = require('express')
const path = require('path') // this will allows send text files
const app = express()

// database
const db = require('./db.js')

// app.get('/data', (reg, res)  => {
//   res.json({
//     "name": "Tony",
//     "Color": [
//       "red", "black", "white"
//     ]
//   })
//   console.log("Hello World");
// })

// // to make a request and respons
// app.get('/', (req, res) => {
//   console.log(req);
// })

// to get back the request with the responsn using res.send(whatever)

// rerun the command for server, on brower localshost:3000/profile

//to send file
// use is middlewear (specify what we want to use)
//(express(use function inside it))
// (express(static(path.join)))
//__dirname is the root folder of our project: in this case server
//from root folder go and find folder client.
//static means serve as static file.

// get ourdatabase

app.get('/products', (reg, res) => {
  db.query(`SELECT * FROM products`, (err, result) => {
    if(err) {
      console.log("Error", err)
    }else {
      console.log('Result', result)
    }
  })

})

app.use(express.static(path.join(__dirname, 'client')))

app.get('/profile', (req, res) => {
  //send fie from root/client/profile.txt
  res.sendFile(path.join(__dirname,'/client/profile.txt'))
  console.log("__dirname",  __dirname);
})

app.get('/homepage', (reg, res) => {
  res.sendFile(path.join(__dirname, '/client/homepage.html'))
})


// send image

app.get('/image', (reg, res) => {
  res.sendFile(__dirname, '/client/download.jpg')
})

app.get('/about', (reg, res) => {
  res.sendFile(path.join(__dirname, '/client/about.html'))
})

app.get('/login', (reg, res) => {
  res.sendFile(path.join(__dirname, '/client/login.html'))
})

app.get('/contact', (reg, res) => {
  res.sendFile(path.join(__dirname, '/client/contact.html'))
})

app.get('/shopwindow', (reg, res) => {
  res.sendFile(path.join(__dirname, '/client/shopwindow.html'))
})





app.listen(3000,() => {
  console.log("Server listening on port 3000");
})
