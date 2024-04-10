const storeCollections = require('../model/model');

const showDetails = async(req,res)=>{
    let result = await storeCollections.find();
    res.status(201).json(result);
    res.send(result)
}

module.exports = {showDetails}