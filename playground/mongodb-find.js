const mongodb = require('mongodb');

mongodb.MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, db) => {
  if(err){
    return console.log("Unable to connect to MongoDB server.")
  }
  console.log("Connected to MongoDB server")
  db.collection('Users').find({
    name: "Andrew"
  }).toArray().then((usrs) => {
    console.log(JSON.stringify(usrs, undefined, 2))
  })
  db.close();
})
