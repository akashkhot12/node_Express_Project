
const{MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const databse = "crud";

const getConnect = async()=>{
    let result = await client.connect();
    let db  = await result.db(databse);
    return db.collection('collections')
}
module.exports = getConnect;


