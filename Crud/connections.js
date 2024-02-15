
const{MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client= new MongoClient(url);
const database = 'crud';

async function gettingCollections(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('collections')
};

// promises appllying
// gettingCollections().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// });

module.exports = gettingCollections;