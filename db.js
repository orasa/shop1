const {Client} = require('pg')

// create connection

// postgres:// is a protocal
// concectionString: postgres://orasaoneal:@localhost:5432/shop
// http://yourlocalcomputername:Where you want to go:default postgres/ourdatabaseName
// 'postgres://orasaoneal:@localhost:5432/shop1'

const db = new Client({
  concectionString: 'postgres://orasaoneal:@localhost:5432/s2'
})

// connect to database
db.connect((err) => {
  if (err) {
    console.log('Error connecting to PostgresSQL database')
  } else {
    console.log('Connected to PostgreSQL database')
  }

})

module.exports = db

//on index const db = require('./db')
// on terminal run nodemon index.js
