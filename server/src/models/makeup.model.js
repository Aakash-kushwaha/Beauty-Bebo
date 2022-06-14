const {model,Schema} =require("mongoose");
const makeupSchema =new Schema({
    
        title: {type:String, required:true, },
        link: {type:String, required:true},
        condition: {type:String, required:true},
        reviews:{type:Number, required:true},
        top_rated:{type:String, required:true},
        price: {
        raw: {type:String, required:true},
        extracted: {type:String, required:true}
        },
        shipping: {type:String, required:true},
       
        returns: {type:String, required:true},
        extensions: [
            {type:String, required:true}
        ],
        thumbnail: {type:String, required:true}
        }
)
module.exports =model("makeup",makeupSchema)