let _db;

const initDb = db =>{
    _db=db;
};

const getDb = ()=>{
    if(!_db){
        throw new Error("DataBase not initialized.");
    }
    return _db;
}

module.exports = {
    initDb,getDb
};