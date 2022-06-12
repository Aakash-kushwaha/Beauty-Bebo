const mongoose = require('mongoose')

module.exports =()=>{
return mongoose.connect("mongodb+srv://Anmolroan:Suman0mahatma%40@cluster0.cvo1e.mongodb.net/products?retryWrites=true&w=majority")
}