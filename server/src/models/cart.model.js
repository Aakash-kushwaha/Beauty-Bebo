const {model,Schema} =require("mongoose");
const cartSchema = new Schema({
   data:{}
})
module.exports= model("cart",cartSchema)