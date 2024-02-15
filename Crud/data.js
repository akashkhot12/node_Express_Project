const dbConnection = require('./connections');

const getdata = async()=>{
    let data = await dbConnection();
    const getdatabase = await data.find().toArray();
    console.log(getdatabase); 
}
getdata()

const addData = async()=>{
    let data = await dbConnection();
    let adddatabase = await data.insertOne({
        name:"akash khot",
        phoneNumber:9874748474,
        gender:"male"
    })
    if(adddatabase.acknowledged){
        console.log("data insert successfully");
    }
}
// addData()