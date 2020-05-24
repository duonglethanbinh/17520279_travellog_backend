
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://travellogaccount:<password>@travellog-ynb90.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://travellogaccount:mongodb123456@travellog-ynb90.gcp.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function main(){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);