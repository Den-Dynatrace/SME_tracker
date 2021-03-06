const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://sme-database:ulb91PoDqNRdCLBvnBjcjQQPBzeOabzijeeOyBsIkryMeBD8VPmbMvO9FxzxQzsxxRD61RJdG4HmGmN0AvlpAg==@sme-database.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sme-database@";
const client = new MongoClient(uri);

testing_eriks_docs = [
  {"Overall" : "Content and lab dev",
  "Sub-Cat" : "Partners to dev best practices",
  "metric" : "# of training deliverd",
  "value" : 1,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
  },
  {
    "Overall" : "Content and lab dev",
  "Sub-Cat" : "Assist in building lab enviroments",
  "metric" : "# of others using labs",
  "value" : 1,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
  },
  {
    "Overall" : "Content and lab dev",
  "Sub-Cat" : "Assist in building lab enviroments",
  "metric" : "# of lab environments developed",
  "value" : 1,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "AWS"
  },
  {"Overall" : "D1 representative/evangelist (internal and external)",
  "Sub-Cat" : "Participate in cross-functional “SWAT”, Value Creation, etc. teams",
  "metric" : "# of groups represented in",
  "value" : 1,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
  },
  {"Overall" : "Recognition & impact",
  "Sub-Cat" : "Continue to expand technical knowledge and stay ahead of industry trends",
  "metric" : "# of advanced certs",
  "value" : 1,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
}
]

var doc =[{ 
  "Overall" : "Content and lab dev",
  "Sub-Cat" : "Assist in building lab enviroments",
  "metric" : "# of others using labs",
  "value" : 1,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
  },

   id_doc = {
    "_id" : "Sundblad, Erik",
    "id_card": "ID Card",
    "Department" : "Dynatrace ONE",
    "Position": "Company Intern",
    " Number" : 305576,
    "Languages": ["English", "Spanish"]
  }
]

//INSERT ONE//
client.connect(err => {
  const collection = client.db("SME_Tracker").collection("Erik.Sundblad");
  if (err) throw err;
  collection.insertMany(doc, function(err, res){
      if (err) throw err;
      console.log("Inserted Docs");
  });
  
});
/*
//INJECT ONE//
MongoClient.connect(url, function(err, db) {
  const Simon = ["Jordyn.Corenman", "Jarred.Mckay", "Chris.Nodine", "Erik.Sundblad"];
  var doc =[{
  "id_card":, 
  "Overall" : "Content and lab dev",
  "Sub-Cat" : "Assist in building lab enviroments",
  "metric" : "# of others using labs",
  "value" : 1,
  "Proof" : "pdf_path",
  "Notes" : "This would be for notes on the file",
  "Tag" : "Azure"
  },

  var id_doc = {
    "_id" : "Sundblad, Erik",
    "Department" : "Dynatrace ONE",
    "Position": "Company Intern",
    " Number" : 305576,
    "Languages": ["English", "Spanish"]
  }
]

  if (err) throw err;
  var emps = db.db();

  emps.collection("Erik.Sundblad").insertMany(testing_eriks_docs, function(err, res){
    if (err) throw err;
    console.log("Inserted Docs");
  });
  */
  /*for (let emp in Simon){
    emps.collection(Simon[emp]).insertOne(doc, function(err, res){
      if (err) throw err;
      console.log("Inserted Doc");
      db.close();
    });
  };
});

/*
//SIMPLE QUERY//
MongoClient.connect(url, function(err, db) {
  var query = {"Sub-Cat":"Assist in building lab enviroments"}
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
/*
//COLLECTION NAMES//
MongoClient.connect(url, function(err, db) {
  const connect = db.db()
  connect.listCollections().toArray(function(err, names) {   
      if(err) throw err;
      for (let item in names){
        console.log(names[item])
      };
    });
  });
*/
/*
//TAG QUERY//
MongoClient.connect(url, function(err, db) {
  const connect = db.db()
  connect.collection
});
*/
