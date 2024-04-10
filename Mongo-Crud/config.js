const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = MongoClient(url);
const database  = 'Mongo-Crud';

const connections = async()=>{
    let result = await client.connect();
    let db  = await result.db(database);
    return db.collection('Crud_Data'); 
}

module.exports = connections;

