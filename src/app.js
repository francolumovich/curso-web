const express = require('express')
const morgan = require('morgan')

//clase
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
//connection URI
const dbName = 'test'
const url = 'mongodb://franco1:password@localhost:27017' //sin +dbName anda todo

const client = new MongoClient(url)

//use method to connect to the server
client.connect(function(err){
	assert.equal(null,err)
	console.log("connected successfully to server")
	const db = client.db(dbName)
	client.close()
})
//fin clase, anduvo

const app = express()

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api/employees", require('./routes/employees.routes'))
// quiere decir que cada vez que pida /api/employees voy a estar requiriendo toda esa ruta



module.exports = app;