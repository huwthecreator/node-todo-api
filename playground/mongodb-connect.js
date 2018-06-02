// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

var user = {name: 'Androo', age: 14};
var {name} = user;
console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log("Connected to MongoDB server")
  db.collection('Users').insertOne({
    name: "Androo",
    age: 14,
    location: "New Jersey"
  }, (err, result) => {
    if(err){
      return console.log("Unable to write to database", err)
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
  })
});
