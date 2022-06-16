const {model,Schema} =require("mongoose");
const cartSchema = new Schema({
    products:[{}]
})
module.exports= model("cart",cartSchema)