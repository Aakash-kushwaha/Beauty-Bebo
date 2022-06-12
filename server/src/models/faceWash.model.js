const {model,Schema} =require("mongoose");
const facewashSchema =new Schema(
    {
        title: {type:String, required:true},
        link: { type:String, required:true  },
        condition: {type:String, required:false},
        price: {
        raw: {type:String, required:false},
        extracted:{type:String, required:false}
        },
        shipping: {type:String, required:false},
        location: {type:String, required:false},
        extensions: [{type:String, required:false}],
        thumbnail: {type:String, required:false},
        returns: {type:String, required:false},

        },{
            versionKey:false,
            timestamps:true
        }
)
module.exports =model("facewash",facewashSchema)