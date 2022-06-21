from pymongo import MongoClient


connectionString="mongodb+srv://dyna:Sunwood4117@cluster0.hqxio3m.mongodb.net/?retryWrites=true&w=majority"
cluster = MongoClient(connectionString)
db = cluster["SME"]
collection = db["employee_name"]

collection.insert_many([

    {
        "Overall" : "Content and lab dev",
        "Sub-Cat" : "Assist in building lab enviroments",
        "metric" : "# of others using labs",
        "value" : "6",
        "Proof" : "pdf_path",
        "Notes" : "This would be for notes on the file",
        "Tag" : "Azure"
    }
])

for post in collection.find():
	print(post )
print('\n\n')
