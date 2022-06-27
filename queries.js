var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/SME";

//Basic Total
var cat = "Overall";
var titl = "Content and lab dev";
var query = {}
//query[cat] = titl


//Complex Total
var cat_name = "Sub-Cat"
var sub_cat = "Assist in building lab enviroments"
var query = {}
//query[cat] = titl
//query[cat_name] = sub_cat


//Total Query
query = {}

//Id Card
var id = "_id"
var name = "Sundblad, Erik"
query[id] = name



//SIMPLE QUERY//
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var emps = db.db();
    
    emps.collection("Erik.Sundblad").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.length);
      db.close();
    });
  });


