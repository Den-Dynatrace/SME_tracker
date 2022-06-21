var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/SME";
var doc ={
  "_id": 1,
  "Overall" : "Content and lab dev",
  "Sub-Cat" : "Assist in building lab enviroments",
  "metric" : "# of others using labs",
  "value" : 6,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
}

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var emps = db.db()
  emps.collection("erik.sundblad").insertOne(doc, function(err, res){
    if (err) throw err;
    console.log("Inserted Doc");
    db.close();
  });
});

