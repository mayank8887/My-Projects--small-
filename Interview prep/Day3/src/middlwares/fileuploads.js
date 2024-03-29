const multer = require("multer");
const path =  require("path");


const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, path.join(__dirname,"../uploads"));
    },
    filename: function (req, file, callback){
        const uniqueSuffix = Date.now();
        callback(null, uniqueSuffix + "-" +file.originalname)
    }
    
});


const fileFilter = (req, file, callback)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype ==="image/png"){
        callback(null,true)
    }
    else{
        callback(null,false);
    }
};

const options = {
    storage:storage,
    fileFilter:fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
}

const uploads= multer(options);


module.exports= uploads;