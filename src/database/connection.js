const { MongoClient } = require('mongodb');

module.exports.main = async()=> {

    /**
   3
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   4
    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   5
    */
    // const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"; // for local machine mongodb compass
    const uri = "mongodb+srv://smartsearch.p3nam.mongodb.net/smartsearch"; // for cloud access

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.warn('database connected')
        // Make the appropriate DB calls
        // await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}
 
async function listDatabases(client) {

    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


