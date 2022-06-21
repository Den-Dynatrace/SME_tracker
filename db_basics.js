var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/SME";

const Simon = ["Jordyn.Corenman", "Jarred.Mckay", "Chris.Nodine", "Erik.Sundblad"];
var doc ={
  //"_id": 1,
  "Overall" : "Content and lab dev",
  "Sub-Cat" : "Assist in building lab enviroments",
  "metric" : "# of others using labs",
  "value" : 6,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
};
var query = {"Sub-Cat":"Assist in building lab enviroments"}

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var emps = db.db();
  for (let emp in Simon){
    emps.collection(Simon[emp]).insertOne(doc, function(err, res){
      if (err) throw err;
      console.log("Inserted Doc");
      db.close();
    });
  };
});
*/


/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var emps = db.db();
  emps.collection("Erik.Sundblad").find(query).toArray(function(err, result) {
    if (err) throw err;
    for (let item in result){
      console.log(result[item]);
    };
    db.close();
  });
});
*/

MongoClient.connect(url).then((client) => {
  const connect = client.db()
  connect.listCollections().toArray(function(err, names) {   
      if(!err) {
        for (let item in names){
          console.log(names[item])
      };
    }
  });
}).catch((err) => {

  // Printing the error message
  console.log(err.Message);
})