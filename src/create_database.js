var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://bandichodekaran1213:*****@cluster0.03df7iy.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
