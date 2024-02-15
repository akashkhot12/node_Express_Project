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
        console.log("data insert swuccessfully");
    }
}
// addData()

const updateData = async()=>{
    let data = await dbConnection();
    let updateDatabase = await data.updateOne({name:"akash khot"},{$set:{name:"chetna bhanarkar"}});
    if (!updateDatabase) {
        console.log("data not update ");
    }
    else{
        console.log("data is update");
    }
    
}
// updateData()

const deleteData=async()=>{
    let data = await dbConnection();
    let deletingData = await data.deleteOne({name:"chetna bhanarkar"});
    if(!deletingData){
        console.log("something wrong");
    }
    else{
        console.log("data delete succefully");
    }
}
// deleteData()