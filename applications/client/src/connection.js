const {MongoClient} = require('mongodb');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    //databasesList.databases.users.insertOne({"Name" : "Jonathan" , "Email" : "jon@gmail.com"});
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    //console.log(databasesList.databases.users.find());
};

async function main(){
   
    const uri = "mongodb+srv://team6:qziI2pApuyEEkTFG@projectcluster.lrqotts.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
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
